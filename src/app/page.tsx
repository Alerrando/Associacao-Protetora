import { Inter } from 'next/font/google'
import Header from './(home)/Header'
import Main from './(home)/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}
