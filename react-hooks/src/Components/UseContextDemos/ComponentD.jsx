
import React, { Component } from 'react'
import { LanguageContext, ThemeContext, UserContext } from './UseContextDemosComp';

export class ComponentD extends Component {
  render() {
    return (
      <div>
        <h5> Component D </h5>
        <UserContext.Consumer>
          {
            username => {
              return (
                <ThemeContext.Consumer>
                  {
                    theme => {
                      return (
                        <LanguageContext.Consumer>
                          {
                            language => {
                              return <p>Username: {username}, Theme: {theme}, Language: {language} </p>
                            }
                          }
                        </LanguageContext.Consumer>
                      )
                    }
                  }
                </ThemeContext.Consumer>
              )
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }
}
export default ComponentD;
