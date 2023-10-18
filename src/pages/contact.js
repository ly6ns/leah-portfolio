import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import styles from '../styles/contact.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <Head>
        <title>Leah Annitto</title>
        <meta name="description" content="Leah Annitto's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/jhs3zhj.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <div>
          <Header/>
          <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h1>Email: <span className={styles.email}>leahannitto@gmail.com</span></h1>
                <Link target="_blank" className={styles.link} href="https://www.linkedin.com/in/leah-annitto"><h1 className={styles.linkedin}>Linkedin</h1></Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
