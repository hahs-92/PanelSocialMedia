import { useContext, useEffect } from 'react'

//ESTILOS
import styles from '../styles/components/Switch.module.css'

//CONTEXT
//eslint-disable-next-line
import AppContext from '../context/AppContext'

const Switch = () => {
    const { darkMode, setDarkMode } = useContext(AppContext)

    //USE EFFECTS PARA MANEJAR SI EL USUARIO ESTA EN MODO OSCURO
    useEffect(() => {
        let local = localStorage.getItem('darkMode','true')
        if(local === 'true'){
            setDarkMode(true)
        }
        else{
            setDarkMode(false)
        }//eslint-disable-next-line
    },[])

    useEffect(()=> {
        darkMode ? window.localStorage.setItem('darkMode', 'true') :  window.localStorage.setItem('darkMode', 'false')
    },[darkMode])

    const handleClick = () => setDarkMode(!darkMode)  

    return(
       <>
            {
                darkMode
                ? 
                    <button
                        id='switch' 
                        name='switch'
                        className={ `${ styles.Switch } ${ styles['active']}` } 
                        type='button' 
                        onClick={ handleClick } 
                        aria-label='switch'  >    
                    </button>
                :
                    <button
                        id='switch' 
                        name='switch'
                        className={ `${ styles.Switch }` } 
                        type='button' 
                        onClick={ handleClick } 
                        aria-label='switch'  >
                    </button>
            }
       </>
    )
}

export default Switch