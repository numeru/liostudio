import { AppProps } from "next/app"
import Head from "next/head"
import "styles/global.css"
import "styles/notion.css"
import "styles/model-viewer.css"
import "react-notion-x/src/styles.css" // core styles shared by all of react-notion-x
import "prismjs/themes/prism-tomorrow.css" // used for code syntax highlighting
import "rc-dropdown/assets/index.css" // used for collection views
import "katex/dist/katex.min.css" // used for rendering equations

export default function RootApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LIO STUDIO</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
