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
            //className ='bigLogo__image'
          />
    </section>
  )
}

export default AboutTheTeam;