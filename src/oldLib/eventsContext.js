import {createContext} from './contextManager';

import {List, Map} from 'immutable';
import {groupBy} from 'lodash-es';

import EventsApi from 'api/eventsApi';
import {eventsConverter} from 'utils/eventsConverter';

const initialState = {
    events: null,
    groupedEvents: new Map(),
    groupedSelectedEvents: new Map(),
    selectedEventsIds: new List(),
    groups: null,
    imConversations: null,
    loading: false
};

const sortEvents = events => events.sort((firstEvent, secondEvent) => firstEvent.start - secondEvent.start);

const actions = {
    fetchEvents(keys, start, end) {
        this.setState({events: null, loading: true}, () => {
            EventsApi.getEvents(keys, start, end).then((response) => {
                let events = [];
                let conversations = [];
                const groups = [];

                for (const type in response.data) {
                    if (!response.data[type].failed) {
                        const parsedItems = eventsConverter(type, response.data[type].events, keys);
                        if (parsedItems !== undefined) {
                            events = events.concat(parsedItems.items);
                            groups.push(parsedItems.group);
                        }
                    }
                }

                if (response.data.im !== undefined && !response.data.im.failed) { // TODO: remove this shit ASAP
                    conversations = response.data.im.events.filter(event => event.messages.length > 0).map(event => event.conversation);
                    conversations = eventsConverter('imConversations', conversations);
                    conversations = conversations ? conversations.items : [];
                }

                events = sortEvents(events);

                const groupedEvents = groupBy(events, event => event.get('type'));
                Object.keys(groupedEvents).forEach((group) => {
                    groupedEvents[group] = new List(groupedEvents[group]);
                });

                this.setState({
                    events: new List(events),
                    groups: new List(groups),
                    imConversations: new List(conversations),
                    groupedEvents: new Map(groupedEvents),
                    selectedEventsIds: new List(),
                    groupedSelectedEvents: new Map(),
                    loading: false
                });
            });
        });
    },

    setSelectedEvents(selectedEventsIds) {
        let groupedEvents = this.state.events.filter(event => selectedEventsIds.includes(event.get('id'))).toArray();
        groupedEvents = groupBy(groupedEvents, event => event.get('type'));

        Object.keys(groupedEvents).forEach((group) => {
            groupedEvents[group] = new List(groupedEvents[group].map(event => event.get('id')));
        });

        this.setState({
            selectedEventsIds: new List(selectedEventsIds),
            groupedSelectedEvents: new Map(groupedEvents)
        });
    }
};

createContext('events', initialState, actions);