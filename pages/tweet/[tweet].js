import { useRouter } from 'next/router'

import fetchTweetAst from '../../lib/fetchTweetAst'
import Node from '../../components/html/node'
import TweetSkeleton from '../../components/twitter-layout/tweet-skeleton'
import components from '../../components/twitter-layout/components'
import TweetMeta from '../../components/tweet-meta'

import styles from '../../components/twitter-layout/twitter.module.css'

const TWEET_ID = /^[0-9]+$/

export function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const { tweet } = params

  if (tweet.length > 40 || !TWEET_ID.test(tweet)) {
    return { notFound: true }
  }

  try {
    const ast = await fetchTweetAst(tweet)
    return ast ? { props: { ast } } : { notFound: true }
  } catch (error) {
    // The Twitter API most likely died
    console.error(error)
    return { notFound: true }
  }
}

export default function Tweet({ ast }) {
  const { isFallback } = useRouter()

  return (
    <div className={styles.theme}>
      <TweetMeta ast={ast} />

      <main>{isFallback ? <TweetSkeleton /> : <Node components={components} node={ast[0]} />}</main>

      <style jsx>{`
        .page-wrapper {
          color: var(--tweet-font-color);
          background: var(--bg-color);
          height: 100vh;
          overflow: auto;
          padding: 2rem 1rem;
        }
        main {
          width: 500px;
          max-width: 100%;
          margin: 0 auto;
        }
        footer {
          font-size: 0.875rem;
          text-align: center;
          margin-top: -0.5rem;
        }
      `}</style>
    </div>
  )
}
