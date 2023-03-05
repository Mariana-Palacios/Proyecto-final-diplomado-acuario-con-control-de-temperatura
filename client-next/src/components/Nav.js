import Link from 'next/link'
import Image from 'next/image'

import logo from '../../public/logoSmall.svg'

const Nav = () => {
    const linksNames= ['home','adventages','noseMan'] 
    return (
        <nav className='nav flex flex-j-s-b flex-a-i'>
            <div className='nav__logo'>
                <Image
                    alt='logo'
                    src={logo} 
                    width={50}
                    height={50}
                />
            </div>
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
