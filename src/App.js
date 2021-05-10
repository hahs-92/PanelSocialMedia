//COMPONENTS
import CardMain from './components/CardMain'
import CardInfo from './components/CardInfo'

import './App.css';
//ESTILOS GLOBALES
import './styles/Global.css'

function App() {
  return (
    <>
      <header>
        <section>
            <h3>Social Media Dashboard</h3>
            <h5>Total Followers: 23,004</h5>
        </section>

        <section>
            <div>
                <h5>Dark Mode</h5>
            </div>

            <div>
              Button Dark
            </div>
        </section>

      </header>

      <section>
        <CardMain />
      </section>

      <section>
        <CardInfo />
      </section>
    </>
  )
}

export default App;
