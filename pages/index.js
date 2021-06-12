import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>@dudewithsign index</title>
      </Head>

      <main>
        <h1 className="title">
          Welcome to the <a href="https://twitter.com/dudewithsign">@dudewithsign</a> index
        </h1>
        <h3 className="subtitle">I've indexed some of his tweets for your and my benefit.</h3>
      </main>
    </>
  )
}
