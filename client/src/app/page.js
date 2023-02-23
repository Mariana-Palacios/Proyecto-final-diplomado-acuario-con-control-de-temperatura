import Image from 'next/image'
//import { Inter } from '@next/font/google'
import '../styles/styles.css'
import Main from '../components/landingPage/Main'
import Tecnologies from '../components/landingPage/Tecnologies'
import Adventages from '../components/landingPage/Advantages'
import AboutTheTeam from '../components/landingPage/AboutTheTeam'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='landingPage'>
      <Main/>
      <Adventages/>
      <AboutTheTeam/>
      <Tecnologies/>
    </main>
  )
}
