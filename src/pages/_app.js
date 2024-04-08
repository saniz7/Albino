import '../styles/globals.css'
import Template from './template'
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Generate a unique key based on the pathname
  const key = router.pathname;
  return (
    <Template  key={key}>

      <Component {...pageProps} />
    </Template>
  )

}
