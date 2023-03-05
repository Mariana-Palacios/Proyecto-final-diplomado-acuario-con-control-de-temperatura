import { SiRabbitmq, SiGrafana, SiReact, SiNextdotjs, SiFastapi, SiInfluxdb} from "react-icons/si";
import '../../styles/styles.css'

const Technologies = () => {
  const technologiesIcon = [<SiRabbitmq/>, <SiGrafana/>, <SiReact/>, <SiNextdotjs/>, <SiFastapi/>, <SiInfluxdb/>]
  return (
    <section className="technologies">
      <h2 className="technologies__text">Our technologies</h2>
      <div className="flex flex-j-c flex-a-i flex-f-w">
        {/* showing the technologies */}
        {technologiesIcon.map((icon,index)=>{
          return <i className="technologies__icon" key={index}>{icon}</i>
        })}
      </div>
    </section>
  )
}

export default Technologies;