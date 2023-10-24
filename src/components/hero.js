import Image from 'next/image'
import styles from '../styles/about.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleSection}>
            <h1 className={styles.titleText}>leah annitto design</h1>
          </div>
          <h1 className={styles.been}>a look at where I've been...</h1>
            <div className={styles.imageContainer}>
                <Image
                  className={styles.art}
                  src="/images/painting1.jpeg"
                  width={400}
                  height={500}
                  alt="Art picture 1"
                />
                <Image
                  className={styles.art}
                  src="/images/painting2.jpeg"
                  width={400}
                  height={500}
                  alt="Art picture 2"
                />
                <Image
                  className={styles.art}
                  src="/images/painting3.jpg"
                  width={400}
                  height={500}
                  alt="Art picture 3"
                />
            </div>
            <div>
              <h1 className={styles.heading}>...and where I am heading</h1>
            </div>
            <div className={styles.bottom}>
                <Image
                  className={styles.art}
                  src="/images/iphone hi fi 1 school savvy.svg"
                  width={400}
                  height={650}
                  alt="Art picture 3"
                />
                <div className={styles.bottomRight}>
                  <Image
                    className={styles.art}
                    src="/images/Logo.svg"
                    width={250}
                    height={250}
                    alt="Art picture 3"
                  />
                  <Link className={styles.workLink} href='/work'>Enjoy my work.</Link>
                </div>
            </div>
        </div>
    </div>
  )
}