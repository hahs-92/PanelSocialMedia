//ESTILOS
import styles from '../styles/components/CardInfo.module.css'

const CardInfo = () => {
    return(
        <article className={ styles.CardInfo }>
            <div className={ styles.Wrapper }>
                <section className={ styles.Title }>
                    <h3>Page Views</h3>
                </section>  

                <section className={ styles.Logo }>
                    <div>Logo</div>
                </section>

                <section className={ styles.Number }>
                <div>
                    <h3>87</h3>
                    </div>
                </section>

                <section className={ styles.Percentage }>
                    <div>
                        numero%
                    </div>
                </section>
            </div>

        </article>
    )
}

export default CardInfo