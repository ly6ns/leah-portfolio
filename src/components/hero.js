import Image from 'next/image'
import styles from '../styles/hero.module.css'

export default function Hero() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleSection}>
            <h1 className={styles.titleText}>leah annitto design</h1>
          </div>
          <div className={styles.waveSectionContainer}>
          <div className={styles.waveSection}>
            <div className={`${styles.waveContainer} ${styles.waveContainer1}`} style={{backgroundImage: `url('wave.svg')`}}>
            <div className={styles.waveContent}></div>
            </div>
            <div className={`${styles.waveContainer} ${styles.waveContainer2}`} style={{backgroundImage: `url('wave-1.svg')`}}>
            <div className={styles.waveContent}></div>
            </div>
            <div className={`${styles.waveContainer} ${styles.waveContainer3}`} style={{backgroundImage: `url('wave-2.svg')`}}>
            <div className={styles.waveContent}></div>
            </div>
            <div className={`${styles.waveContainer} ${styles.waveContainer4}`} style={{backgroundImage: `url('wave-3.svg')`}}>
            <div className={styles.waveContent}></div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}