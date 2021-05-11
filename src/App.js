//COMPONENTS
import CardMain from './components/CardMain'
import CardInfo from './components/CardInfo'

//ESTILOS GLOBALES
import './styles/Global.css'
//ESTILOS
import styles from './styles/App.module.css'

// __________________________________________________________________________________

function App() {
  return (
    <section className={ styles.App }>
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
                Button Dark
              </div>
          </section>
        </div>
      </header>

      <section className={ styles.SectionMain }>
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
      </section>

      <section className={ styles.SubTitle }>
        <h2>Overview- Today</h2>
      </section>

      <section className={ styles.SectionInfo }>
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
      </section>
    </section>
  )
}

export default App;
