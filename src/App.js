import React from 'react'
import { useState } from 'react'

//COMPONENTS
import CardMain from './components/CardMain'
import CardInfo from './components/CardInfo'
import Switch from './components/Switch'

//CONTEXT
import AppContext from './context/AppContext'

//ESTILOS GLOBALES
import './styles/Global.css'
//ESTILOS
import styles from './styles/App.module.css'

//INFO
import infoUser from './utils/infoUser'
import infoOverviews from './utils/infoOverviews'

// __________________________________________________________________________________

function App() {
  const [ darkMode, setDarkMode ]= useState(false)

  return (
    <AppContext.Provider value={ { darkMode, setDarkMode } }>

      {
        darkMode 
          ?
          <section  className={ `${ styles.App } ${ styles.AppDarkMode}` }>
            <header className= { `${ styles.Header } ${ styles.HeaderDarkMode }` }>
    
              <div className={ styles.HeaderContainer }>
                <section className={ styles.HeaderInfo }>
                    <h2>Social Media Dashboard</h2>
                    <h3>Total Followers: 23,004</h3> 
                </section>
    
                <section className={ styles.HeaderTheme }>
                    <div>
                        <h3>Dark Mode</h3>
                    </div>
    
                    <div>
                      <Switch />
                    </div>
                </section>
              </div>
            </header>
    
            <section className={ styles.SectionMain }>
              {
                infoUser.map(item => (           
                  <CardMain 
                    key={ item.id } 
                    user={ item.user } 
                    icon={ item.icon } 
                    amountFollowers={ item.amountFollowers } 
                    title={ item.title } 
                    number={ item.number } 
                    trend={ item.trend }
                  />
                ))
              }
            </section>
    
            <section className={ styles.SubTitle }>
              <h2>Overview- Today</h2>
            </section>
    
            <section className={ styles.SectionInfo }>
              {
                infoOverviews.map(item => (
                  <CardInfo key={ item.id } title={ item.title } icon={ item.icon } amount={ item.amount } trend={ item.trend } percentage={ item.percentage } />
                ))
              }
            </section>
          </section>

        :
          <section className={ styles.App}>
              <header className= { styles.Header }>

                <div className={ styles.HeaderContainer }>
                  <section className={ styles.HeaderInfo }>
                      <h2>Social Media Dashboard</h2>
                      <h3>Total Followers: 23,004</h3> 
                  </section>

                  <section className={ styles.HeaderTheme }>
                      <div>
                          <h3>Dark Mode</h3>
                      </div>

                      <div>
                        <Switch />
                      </div>
                  </section>
                </div>
              </header>

              <section className={ styles.SectionMain }>
                {
                  infoUser.map(item => (           
                    <CardMain key={ item.id } title={ item.title } user={ item.user } icon={ item.icon } amountFollowers={ item.amountFollowers } number={ item.number } trend={ item.trend }/>
                  ))
                }
              </section>

              <section className={ styles.SubTitle }>
                <h2>Overview- Today</h2>
              </section>

              <section className={ styles.SectionInfo }>
                {
                  infoOverviews.map(item => (
                    <CardInfo key={ item.id } title={ item.title } icon={ item.icon } amount={ item.amount } trend={ item.trend } percentage={ item.percentage } />
                  ))
                }
              </section>
          </section>
      }

     
    </AppContext.Provider>
  )
}

export default App;
