import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Profile from '../components/Profile/Profile'



export default function Home() {
  return (
      <div className={styles.container}>
      <Head>
        <title>tao's portfolio</title>
        <link rel="icon" href="" />
      </Head>
      <main className={styles.main}>
      <Profile />
      </main>

      <footer className={styles.footer}>
        <p>tao's portfolio</p>
      </footer>
    </div>
  )
}
