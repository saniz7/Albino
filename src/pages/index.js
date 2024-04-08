import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner />
    </div>
  )
}
