import Image from 'next/image'
import '../../styles/styles.css'
import waterBackground from '../../../public/waterBackground.svg'

const AboutTheTeam = () => {
  return (
    <section className="aboutTheTeam">
          <Image  
            alt = 'logo'
            src = {waterBackground}
            layout="fill"
            objectFit="cover"
          />
          <button className='aboutTheTeam__button'>Meet our team</button>
    </section>
  )
}

export default AboutTheTeam;