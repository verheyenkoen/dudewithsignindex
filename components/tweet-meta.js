import Head from 'next/head'

export default function TweetMeta({ ast }) {
  let image = null
  if (ast?.[0]?.nodes[0]?.nodes[0]?.tag == 'img') {
    image = ast[0].nodes[0].nodes[0].props.src
  }

  // TODO: Use real tweet metadata here
  return (
    <Head>
      {/* <title>...</title> */}
      {/* <meta name="description" content="..." /> */}
      {/* <meta property="og:title" content="..." /> */}
      {/* <meta property="og:description" content="..." /> */}
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
