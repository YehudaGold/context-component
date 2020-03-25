import React, {useContext} from 'react';

import ThemeContext from '../Contexts/ThemeContext';

const ThemeUseContext = () => {
    const {theme} = useContext(ThemeContext.componentContext).state;

    return (
        <div className={theme}>ThemeUseContext</div>
    );
};

export default ThemeUseContext;