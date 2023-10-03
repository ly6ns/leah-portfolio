import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import styles from '../styles/work.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Work() {
  return (
    <>
      <Head>
        <title>Leah Anitto</title>
        <meta name="description" content="Leah Anitto's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/jhs3zhj.css"></link>
        
      </Head>
      <main>
        <div>
          <Header/>
          <div className={styles.container}> 
            <div className={styles.workContainer}>
                <div className={styles.workLeftContainer}>
                    <h1 className={styles.name}>CodefyUI</h1>
                    <p className={styles.subText}>Connecting software developers with product designers to produce a powerful tool that creates code for designs using AI.</p>
                    <Link href="/savvy"><button className={styles.workButton}>Read Case Study</button></Link>
                </div>
                <div className={styles.workRightContainer}>
                  <Image
                    className={styles.art}
                    src="/images/codefy ui work page.svg"
                    width={395}
                    height={231}
                    alt="Codefy UI image"
                  />
                </div>
            </div>
            <div className={styles.workContainer}>
                <div className={styles.workLeftContainer}>
                    <h1 className={styles.name}>SchoolSavvy</h1>
                    <p className={styles.subText}>Helping parents find schools for their children.</p>
                    <Link href="/savvy"><button className={styles.workButton}>Read Case Study</button></Link>
                </div>
                <div className={styles.workRightContainer}>
                  <Image
                    className={styles.mobileImages}
                    src="/images/iphone school savvy hi fi 3.svg"
                    width={127.6}
                    height={276.8}
                    alt="Art picture 3"
                  />
                  <Image
                    className={styles.mobileImages}
                    src="/images/iphone school savvy hi fi 4.svg"
                    width={127.6}
                    height={276.8}
                    alt="Art picture 3"
                  />
                  <Image
                    className={styles.mobileImages}
                    src="/images/iphone school savvy hi fi 5.svg"
                    width={127.6}
                    height={276.8}
                    alt="Art picture 3"
                  />
                </div>
            </div>
            <div className={styles.workContainer}>
                <div className={styles.workLeftContainer}>
                    <h1 className={styles.name}>Haydn</h1>
                    <p className={styles.subText}>Working to make AI communicate in writing that is equivalent to a beach formal dress code – both relaxed and polished.</p>
                    <Link href="/savvy"><button className={styles.workButton}>Read Case Study</button></Link>
                </div>
                <div className={styles.workRightContainer}>
                  <Image
                    className={styles.art}
                    src="/images/ipad.png"
                    width={250}
                    height={300}
                    alt="Art picture 3"
                  />
                </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
