import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tao's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to tao's portfolio
        </h1>

        <div className={styles.grid}>
          <a href="https://twitter.com/thao_0108" className={styles.card}>
            <h3>Twitter &rarr;</h3>
          </a>

          <a href="https://zenn.dev/thao_0108" className={styles.card}>
            <h3>Zenn &rarr;</h3>
          </a>

          <a
            href="https://github.com/thao0108"
            className={styles.card}
          >
            <h3>Git Hub &rarr;</h3>
          </a>

          <a
            href="https://www.wantedly.com/id/thao_0108"
            className={styles.card}
          >
            <h3>Wantedly &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>tao's portfolio</p>
      </footer>
    </div>
  )
}
