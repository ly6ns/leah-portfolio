import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import styles from '../styles/about.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>Leah Anitto</title>
        <meta name="description" content="Leah Annitto's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/jhs3zhj.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <div>
          <Header/>
          <div className={styles.topContainer}>
            <h1 className={styles.header}>hey, this is Leah <span></span></h1>
            <h1 className={styles.subHeader}>thanks for lookin'</h1>
            <p className={styles.content}> I’m a Product Designer solving business problems, and I tend to believe that there are not any problems that cannot be solved. 
              My background as a Special Education Teacher gives me tremendous patience and a willingness to persevere and find a way. For me, 
              design is no different.
            </p>
            <p className={styles.content}> My fatal flaw is asking a lot of questions. I’ve spent my time as a designer listening to clients and users,
             learning from their feedback, and asking questions for clarification and verification, all in service of creating the best possible 
             digital interface that they love and users want to explore. 
            </p>
            <p className={styles.content}> When I’m not pushing pixels on a screen, you can find me riding my bike 
             across the five boroughs, reading, or in some sort of body of water, playing and living my best mermaid life.
            </p>
            <Link className={styles.resumeLink} target="_blank" href="/Resume-Leah B Annitto.pdf">Take a look at my resume.</Link>
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
      </main>
    </>
  )
}
