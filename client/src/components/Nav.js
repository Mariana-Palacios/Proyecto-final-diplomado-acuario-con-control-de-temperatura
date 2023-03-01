import Link from 'next/link'
//import { Inter } from '@next/font/google'
//import '../styles/styles.css'

//const inter = Inter({ subsets: ['latin'] })

const Nav = () => {
    const linksNames= ['home','adventages','noseMan'] 
    return (
        <nav className='nav flex'>
            <ul className='flex'>
                {linksNames.map((linkName)=>{
                    return <li><Link href="/">{linkName}</Link></li> 
                })}
            </ul>
            <Link href='/login'><button >login</button></Link>
        </nav>
  )
}


export default Nav
