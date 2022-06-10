import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
    <div className={styles.container}>
      <Head>
        <title>incognitomode.dev</title>
        <meta property="og:type" content="website"/>
        <meta property="og:color" content="#" />
        <meta property="og:title" content="IncognitoMode - Full Stack Developer"/>
        <meta property="og:description" content="IncognitoMode Personal Portfolio"/>
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/863208445557473320/971385219393409054/incognito.png"/>
        <meta property="og:url" content="https://incognitomode.dev"/>
        <link rel="icon" href="/incognito.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm <a className="" href="#">IncognitoMode</a>.
        </h1>

        <div className={styles.grid}>
          <a href="#stack" className={styles.card}>
            <h2 className="hover:underline underline-offset-4" >Stack &rarr;</h2>
            <p>Stack or Technologies that I am familiar with.</p>
          </a>

          <a rel="noreferrer" target="_blank" href="https://blog.incognitomode.dev" className={styles.card}>
            <h2 className="hover:underline underline-offset-4" >Blog &rarr;</h2>
            <p>A blog where I record all my programming journeys.</p>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://links.incognitomode.dev"
            className={styles.card}
          >
            <h2 className="hover:underline underline-offset-4" >Links &rarr;</h2>
            <p>Discover all my socials or links at that page.</p>
          </a>

          <a
            href="mailto:%incognito@incognitomode.dev"
            className={styles.card}
          >
            <h2 className="hover:underline underline-offset-4" >Contact &rarr;</h2>
            <p>
              Contact me through my email.
            </p>
          </a>
        </div>
      </main>

      <section id="stack">
      <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold'>Stack</h1>
          <p className='text-xl'>
            Stack or Technologies that I am familiar with.
          </p>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://brayden.tech/assets/express.44e8ea18.svg" alt="express-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Express</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        <div className={styles.card} >
        <br />
        <br />
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://brayden.tech/assets/nginx.9f4c6b1e.svg" alt="nginx-svg"/ >
        <div className="px-6 py-4">
        <br />
        <div className="font-bold text-xl mb-2 text-center">Nginx</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://brayden.tech/assets/html.6c066d3b.svg" alt="html5-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">HTML5</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://brayden.tech/assets/vscode.ac6dde88.svg" alt="vscode-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">VSCode</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://brayden.tech/assets/css.1beff86c.svg" alt="css3-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">CSS3</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://brayden.tech/assets/git.e87409f6.svg" alt="git-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Git</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://brayden.tech/assets/javascript.79cc48c8.svg" alt="javascript-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">JavaScript</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://brayden.tech/assets/mysql.d33f9bfd.svg" alt="mysql-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">MySQL</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://brayden.tech/assets/node.9717fb4b.svg" alt="nodejs-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">NodeJS</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="/next-js.svg" alt="nextjs-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">NextJS</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://brayden.tech/assets/react.e8f9b857.svg" alt="reactjs-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">ReactJS</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://brayden.tech/assets/tailwind.3ba60fef.svg" alt="tailwindcss-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">TailWindCSS</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>

        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="/python-5.svg" alt="python-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Python</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>

        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://brayden.tech/assets/typescript.ec953d09.svg" alt="typescript-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">TypeScript</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>

        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <img className="w-full" src="https://avatars.githubusercontent.com/u/39464898?s=200&v=4" alt="tailwindcss-svg" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">SkriptLang</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>

        <div className={styles.card}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br />
        <br />
        <img className="w-full" src="/terminal-1.svg" alt="windowsterminal-svg" />
        <div className="px-6 py-4">
        <br />
        <div className="font-bold text-xl mb-2 text-center">Windows Terminal</div>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
        </div>
        </div>
        </div>
      </section>
      <footer className={styles.footer}>
        Programmed by <a className="underline" href="#">IncognitoMode</a>
      </footer>
    </div>
    </div>
  )
}

export default Home
