import '@/styles/globals.css'
import handler from '@/pages/api/hello'

handler();

export default function App({ Component, pageProps }) {
    return <Component {...pageProps }
    />
}