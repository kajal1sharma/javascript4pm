import Logo from "./logo.png"
import Card from "./Card";
const Hero = ()=>{
    return <div className="hero_container">
                <img src={Logo} alt=""/>
                <h1>Star Restaurant </h1>
                <Card/>
          </div>
}


export default Hero;
