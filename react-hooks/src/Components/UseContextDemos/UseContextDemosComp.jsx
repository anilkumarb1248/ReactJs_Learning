import React from 'react'
import ComponentA from './ComponentA';

  export const UserContext = React.createContext();
  export const ThemeContext = React.createContext();
  export const LanguageContext = React.createContext();

function UseContextDemosComp() {

  return (
    <div>
      <h2> UseContext Demos Component </h2>
      <UserContext.Provider value={'Anil'}>
        <ThemeContext.Provider value={'Dark Theme'}>
          <LanguageContext.Provider value={'Telugu'}>
              <ComponentA/>
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </UserContext.Provider>
     
    </div>
  )
}

export default UseContextDemosComp;
