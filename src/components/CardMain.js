//ESTILOS
import styles from '../styles/components/CardMain.module.css'

const CardMain = () => {
    return(
        <article className={ styles.Wrapper }>
            {/* <section className={ styles.Bar }>
            
            </section> */}

            <section className={ styles.User }>
                <div>
                    Logo
                </div>
                <h4>@nathanf</h4>
            </section>
            
            <section className={ styles.Followers }>
                <h1>1987</h1>
                <h3>Followers</h3>
            </section>

            <section className={ styles.Rate }>
                <div>
                    <div>Logo</div>
                    <h4>12</h4>
                </div>
                <div>
                    <h4>Today</h4>
                </div>
            </section>
        </article>
    )
}

export default CardMain