import style from "./Intro.modules.css";  
import {  React } from "react";
import RickAndMorty from "../../videoMp4/RickAndMorty.mp4"


const Intro = () => {
    return(
     
        <div className= "intro">
        <video src={RickAndMorty} autoPlay loop muted></video>
        <div className= "content">
            <div className="container">
                <div className= "portal">
                    <div className= "title">
                    </div> 
                    <h1>Rick and Morty Api </h1>
                    
                </div>

            </div>
     
            <div className ="boton">
    

            </div>
        </div>
        </div>
    )
}
export default Intro;