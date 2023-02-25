import { Inter } from 'next/font/google'
import Header from './(home)/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
    </>
  )
}
