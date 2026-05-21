import styles from './LoadingMonogram.module.css'

export default function LoadingMonogram() {

    return (
        <div className={styles.container}>

            <div className={styles.glow} />

            <img
                src="../images/Monograma.png"
                alt="Monograma"
                className={styles.monogram}
            />

            <div className={styles.loadingText}>
                Confirmando presença...
            </div>

        </div>
    )
}