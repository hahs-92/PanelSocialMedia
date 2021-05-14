import React from 'react'
import { useContext } from 'react'

//COMPONENTS
import IconFacebook from './IconFacebook'
import IconYoutube from './IconYoutube'
import IconTwitter from './IconTwitter'
import IconInstagram from './IconInstagram'
import IconUp from './IconUp'
import IconDown from './IconDown'

//CONTEXT
import AppContext from '../context/AppContext'

//ESTILOS
import styles from '../styles/components/CardMain.module.css'

const CardMain = (props) => { 
    const { darkMode } = useContext(AppContext)
    return(
        <article className={ darkMode ? `${ styles.Wrapper } ${ styles.WrapperDarkMode }` : styles.Wrapper }>
            <section className={ `${ styles.Bar } ${ styles[`Bar${ props.icon }`]}`} ></section>

            <section className={ styles.User }>
                { props.icon === 'Facebook' && <IconFacebook /> }
                { props.icon === 'Youtube'  && <IconYoutube /> }
                { props.icon === 'Twitter'  && <IconTwitter />}
                { props.icon === 'Instagram'  && <IconInstagram />}

                <h4>{ props.user }</h4>
            </section>
            
            <section className={ styles.Followers }>
                <h1>{ props.amountFollowers } </h1>
                <h3>{ props.title }</h3>
            </section>

            <section className={ `${ styles.Rate } ${ styles[`${ props.trend }`]}` }>
                <div className={ styles.Data }>
                    <div>
                        {
                            props.trend === 'Up'
                                ? <IconUp />
                                : <IconDown />
                        }
                    </div>
                    <h4>{ props.number  }</h4>
                </div>
                <div>
                    <h4>Today</h4>
                </div>
            </section>
        </article>
    )
}

export default CardMain