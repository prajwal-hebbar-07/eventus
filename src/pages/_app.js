import MainHeader from '@/components/main-header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <MainHeader>
      <Component {...pageProps} />
    </MainHeader>
  )
}
