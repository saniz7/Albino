import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '../components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      
      <Banner />
    </div>
  )
}
