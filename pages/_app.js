import { GlobalStyle } from '../styles/globalStyle'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

// TODO:
/**
 *  Custom Icons for mobile view
 *  Fix the issue when switching screen-sizes
 *  active links
 *  Page-transitions for other pages
 *  Custom close-arrow with animation
 *  Fix pagetransition models (customize framer motion?)
 */