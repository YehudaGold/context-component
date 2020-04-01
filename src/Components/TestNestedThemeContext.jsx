/* eslint-disable react/no-multi-comp */
import React, {Component} from 'react';

import NestedThemeContext from '../Contexts/NestedThemeContext';
import Button from './Generic/Button';
import NestedThemeConnect from './NestedTheme/NestedThemeConnect';
import NestedThemeConnectImpure from './NestedTheme/NestedThemeConnectImpure';
import NestedThemeUseContext from './NestedTheme/NestedThemeUseContext';

class TestNestedThemeContext extends Component {

    state ={themeProp: {background: 'dark'}}

     toggleTheme = () => {
         // Not changing the object to not cause rerender
         this.setState((state) => {
             if (state.themeProp.background === 'dark') state.themeProp.background = 'light';
             else state.themeProp.background = 'dark';

             return state;
         });
     }

     render() {
         const {themeProp} = this.state;

         return (
             <div className="list">
                 TestNestedThemeContext - test update of nested values: <br />
                 connect is defaulted to pure and will not rerender <br />
                 connect with options - pure:false will rerender <br />
                 react.memo(UseContext) prop change will not rerender, context change  will rerender by the hook<br />
                 <div>
                     {`prop theme.background: ${themeProp.background}`}
                     <Button
                         handelClick={this.toggleTheme}
                         text="toggle theme prop"
                     />
                 </div>
                 <NestedThemeConnect themeProp={themeProp} />
                 <NestedThemeConnectImpure themeProp={themeProp} />
                 <NestedThemeUseContext themeProp={themeProp} />
             </div>
         );
     }

}

// Separate the provider to not rerender the provider every setState
const NestedThemeContextProvider = WarpComponent => () =>
    <NestedThemeContext>
        <WarpComponent />
    </NestedThemeContext>;

export default NestedThemeContextProvider(TestNestedThemeContext);