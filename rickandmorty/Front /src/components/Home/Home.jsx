import Cards from "../Cards/Cards";
import style from "./Home.module.css";
import { Link } from "react-router-dom"
import RickAndMorty2 from "../../videoMp4/625912.jpg"

const Home = ()=>{
    return(
      
        <div className= "Home">
              <Cards>
            
            <div className = 'bg'></div>
     
            <img src={ RickAndMorty2 } alt="" />
            </Cards>
          
                
            
       
      
        </div>
        
    )
    
}

export default Home;