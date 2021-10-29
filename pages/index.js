import Head from 'next/head';


export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>A.E. Signings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-purple-600" href="https://nextjs.org">
            A.R. Notary Signings 
            <p className="text-yellow-300">COMING SOON </p>
          </a>
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
           A.R. Notary Signings 
        </a>
      </footer>
    </div>
  )
}
