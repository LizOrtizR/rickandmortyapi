import { useDispatch } from "react-redux"
import { deleteCharacter } from "../../redux/actions"
import style from "./Card.module.css";
import { Link } from "react-router-dom";


const Card = ({name,status,species,onClose,gender,image,id})=>{

    const dispatch=useDispatch();

    const handleClick=()=>{
        dispatch(deleteCharacter(id))
    }

    return(
     
        <div className={style.card} >
        <div className={style.front} >
           <img src={image} alt={name} />
        </div>

        <div className={style.back} >
           <div>
              <Link to={`/detail/${id}`} className={style.link} >
                 <h2 className={style.name}>{name}</h2>
              </Link>
           </div>

           <div className={style.species} >
   
              <p>Status: {status}</p>
              <p>Species: {species}</p>
              <p>Gender: {gender}</p>
              
           </div>

           <div className={style.btn}>
           <button onClick={handleClick}>X</button>
           </div>
        </div>
     </div>
  );
}


export default Card;