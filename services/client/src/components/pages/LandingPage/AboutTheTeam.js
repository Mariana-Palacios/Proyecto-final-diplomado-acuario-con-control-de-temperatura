import React from 'react';

import '../../styles/styles.css'
import waterBackground from './waterBackground.svg'

const AboutTheTeam = () => {
  return (
    <section className="aboutTheTeam">
          <img
            src={waterBackground}
            alt='waterBackground'
            className='aboutTheTeam__img'
          />
          <button className='aboutTheTeam__button'>Meet our team</button>
    </section>
  )
}

export default AboutTheTeam;