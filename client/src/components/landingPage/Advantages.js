import Image from 'next/image'
import '../../styles/styles.css'
import { FaTemperatureHigh, FaFish} from 'react-icons/fa';
import { BsFileBarGraphFill } from "react-icons/bs";

const Adventages = () => {
  const iconsLogo = [ <FaTemperatureHigh/>, <FaFish/>, <BsFileBarGraphFill/>] 
  const text = ['parla1', 'parla2', 'parla3']

  return (
    <section className="adventages flex flex-j-c flex-a-i">
        {iconsLogo.map((iconLogo,index)=>{
            return <div className='adventage'>
                <div className='adventage__icon flex flex-j-c flex-a-i'><i>{iconLogo}</i></div>
                <p  className='adventage__text'>{text[index]}</p>
            </div>
        })}
    </section>
  )
}

export default Adventages;