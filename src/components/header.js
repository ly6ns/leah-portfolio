import Image from 'next/image'
import styles from '../styles/header.module.css'
import Link from 'next/link'

export default function Header() { 
  return (
    <>
        <div className={styles.header}>
          <div className={styles.logoSection}>
            <Link href="/">
              <Image
                  className={styles.logo}
                  src="/Logo.svg"
                  height={167.7}
                  width={87}
                  alt="Picture of the author"
              />
            </Link>
          </div>
          <div className={styles.menuSection}>
            <ul className={styles.list}>
                <Link className={styles.menuItems} href="/about">about</Link>
                <Link className={styles.menuItems} href="/work">work</Link>
                <Link className={styles.menuItems} target="_blank" href="/Resume-Leah B A.pdf">resume</Link>
                <Link className={styles.menuItems} href="/contact">contact</Link>
            </ul>
          </div>
        </div>
    </>
  )
}