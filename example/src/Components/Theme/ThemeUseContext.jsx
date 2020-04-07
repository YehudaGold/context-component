import React, {useContext} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import Button from '../Generic/Button';

const ThemeUseContext = () => {
    const {theme, toggleTheme} = useContext(ThemeContext.componentContext);

    return (
        <div className={theme}>
            ThemeUseContext
            <Button handelClick={toggleTheme} text="toggle theme" />
        </div>
    );
};

export default ThemeUseContext;