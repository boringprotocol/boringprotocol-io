import type { NextPage } from 'next'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { IoCardOutline, IoLogoDiscord, IoLogoGithub, IoLogoMedium, IoLogoTwitter, IoMoonOutline, IoSunnyOutline, IoLogInOutline } from 'react-icons/io5'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import Logo from '../components/logo'
import V2Art from '../components/v2'

const Home: NextPage = () => {

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeToggle = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button
          className='sm:border-t mt-3 text-center w-12 sm:dark:border-gray-dark sm:border-gray-lightest px-4 py-6 text-xs'
          onClick={() => setTheme("light")}
          type="button"
        > <IoMoonOutline /></button>
      );
    }
    return (
      <button
        className="sm:border-t mt-3 text-center w-12 sm:dark:border-gray-dark sm:border-gray-lightest px-4 py-6 text-xs"
        onClick={() => setTheme("dark")}
        type="button"
      > <IoSunnyOutline /> </button>
    );
  };

  return (
    // <div className="font-jetbrains">
    //   <Head>
    //     <title>Boring Protocol</title>
    //     <meta name="description" content="A VPN on Solana" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className="bg-boring-white dark:bg-boring-black dark:text-gray-light">


    //     {/* desktop head/nav */}
    //     <div className='hidden sm:visible sm:w-12 sm:inline-block sm:h-screen sm:float-left sm:border-r border-gray-lightest dark:border-gray-dark'>


    //       <span className="inline-block align-top mt-3 text-boring-black dark:text-boring-white">

    //         {renderThemeToggle()}
    //       </span>
    //     </div>

    //     {/* mobile header/nav */}
    //     <div className="sm:hidden">

    //       <div className="px-4 py-5 sm:px-6">
    //         <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
    //           <div className="ml-4 mt-4">
    //             <div className="flex items-center">
    //               <div className="flex-shrink-0">

    //                 <div
    //                   className="h-12 w-12 rounded-full">
    //                   <Logo />
    //                 </div>
    //               </div>
    //               <div className="ml-4">
    //                 <h3 className="text-lg font-medium leading-6 text-gray-900">Boring Protocol</h3>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="ml-4 flex flex-shrink-0">
    //             <button
    //               type="button"
    //               className="relative inline-flex items-center rounded-md px-4 text-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //             >

    //               {renderThemeToggle()}
    //             </button>
    //           </div>
    //         </div>
    //       </div>




    //     </div>



    //     <div className="grid grid-cols-6 gap-4">


    //       <div className='col-start-1 col-span-6 md:col-span-4 lg:col-span-3 '>
    //         <div className='md:h-screen border-r border-gray-lightest dark:border-gray-dark'>
    //           <div className='p-8 sm:p-12'>

    //             <div className="">
    //               {/* <span className="">
    //                 <h1 className='invisible sm:visible text-3xl'>Boring Protocol</h1>
    //               </span> */}


    //             </div>
    //           </div>
    //         </div>

    //       </div>


    //     </div>


    //   </main >

    // </div >

    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-8 bg-black rounded-lg shadow-lg max-w-md mx-auto">
          <article className="font-jetbrains">


            <header className="flex items-center text-orange mb-4">
              <span className="w-6 h-6 mr-2">
                <Logo />
              </span>
              <h1 className="text-lg font-semibold">Boring Protocol</h1>
            </header>
            <p className="text-sm">
              A Decentralized VPN on Solana. Seeking seed funding in 2024.
            </p>


            <p className="text-sm mt-4">
              Follow us on <a href="https://twitter.com/boringprotocol/" target="_blank" className="text-blue-500 hover:text-blue-600 border-b border-dotted">
                <IoLogoTwitter className="inline-block mr-1" />Twitter
              </a> for updates.
            </p>
          </article>
        </div>
      </div>

    </>
  )
}

export default Home

