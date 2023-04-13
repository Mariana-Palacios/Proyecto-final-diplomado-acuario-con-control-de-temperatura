import React from 'react';

import AboutTheTeam from "./AboutTheTeam";
import Adventages from "./Advantages";
import Main from "./Main";
import Tecnologies from './Tecnologies'


const landingPage = () => {
    return (
        <div className="landingPage">
            <Main/>
            <Adventages/>
            <Tecnologies/>
        </div>
    )
}
  
export default landingPage;

//            <AboutTheTeam/>