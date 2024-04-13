import type { NextPage } from 'next'
import Head from 'next/head'
import { IoLogoTwitter } from 'react-icons/io5'
import Logo from '../components/logo'
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Boring Protocol</title>
        <meta name="description" content="A decentalized VPN on Solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="flex items-center justify-center relative w-full h-full before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-gray-200 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#2e2e2e] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

        </div>
        <article className="font-jetbrains p-4 md:p-0 z-auto">
          <header className="flex items-center text-orange mb-4">
            <span className="w-6 h-6 mr-2">
              <Logo />
            </span>
            <h1 className="text-2xl font-semibold uppercase">Boring Protocol</h1>
          </header>
          <p className="text-sm ml-1">
            A Decentralized VPN on <span className="text-purple">Solana</span>.
          </p>
          <p className="text-sm ml-1 mt-2">
            Seeking 2M Seed in 2024.
          </p>

          <p className="text-xs mt-4 ml-1">
            Follow us on <a href="https://twitter.com/boringprotocol/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 border-b border-dotted">
              <IoLogoTwitter className="inline-block mr-1" />Twitter
            </a> for more.
          </p>
        </article>
      </main>

    </>
  )
}

export default Home

