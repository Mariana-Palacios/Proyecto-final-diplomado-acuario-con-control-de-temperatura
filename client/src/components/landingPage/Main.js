import Image from 'next/image'
import '../../styles/styles.css'
import landingPageWave from '../../../public/logo.svg'

const Main = () => {
  return (
    <main className="main">
      <div className='text flex flex-j-c flex-a-i flex-f-d-c'>
        <div className='bigLogo'>
          <Image  
            alt = 'logo'
            src = {landingPageWave}
            layout="fill"
            objectFit="cover"
            //className ='bigLogo__image'
          />
        </div>
        <h1 className='text__title'>Maintain the perfect aquarium <br/>temperature with ease.</h1>
        <button className='text__button'>Get started</button>
      </div>
    </main>
  )
}

export default Main;