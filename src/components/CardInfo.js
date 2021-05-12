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
import styles from '../styles/components/CardInfo.module.css'

const CardInfo = (props) => {
    const { darkMode } = useContext(AppContext)
    return(
        <article className={ darkMode ? `${ styles.CardInfo } ${ styles.CardInfoDarkMode }` : styles.CardInfo }>
            <div className={ styles.Wrapper }>
                <section className={ styles.Title }>
                    <h3>{ props.title }</h3>
                </section>  

                <section className={ styles.Logo }>
                    <div>
                        { props.icon === 'Facebook' && <IconFacebook /> }
                        { props.icon === 'Youtube'  && <IconYoutube /> }
                        { props.icon === 'Twitter'  && <IconTwitter />}
                        {  props.icon === 'Instagram'  && <IconInstagram />}
                    </div>
                </section>

                <section className={ styles.Number }>
                <div>
                    <h2>{ props.amount }</h2>
                    </div>
                </section>

                <section className={ `${ styles.Percentage } ${ styles[`${ props.trend }`]}` }>
                    <div className={ styles.PercentageLogo}>
                        {
                            props.trend === 'Up'
                            ? <IconUp />
                            : <IconDown />
                        }
                    </div>
                    <div>
                        <h4>{ props.percentage }</h4>
                    </div>
                </section>
            </div>

        </article>
    )
}

export default CardInfo