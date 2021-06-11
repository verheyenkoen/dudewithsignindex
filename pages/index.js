import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>@dudewithsign index</title>
        <meta name="description" content="An index of @dudewithsign tweets" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <main>
        <h1>
          Welcome to the <a href="https://twitter.com/dudewithsign">@dudewithsign</a> index
        </h1>
      </main>

      <footer>
        <hr />
        <div>WTF needs a copyright?</div>
      </footer>
    </div>
  )
}
