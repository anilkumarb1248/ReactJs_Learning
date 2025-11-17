
import React, { useContext } from 'react'
import { LanguageContext, ThemeContext, UserContext } from './UseContextDemosComp';

function ComponentE() {

    const username = useContext(UserContext);
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    return (
        <div>
            <h5>Comonent E</h5>
            <p>Username: {username}, Theme: {theme}, Language: {language} </p>
        </div>
    )
}

export default ComponentE;
