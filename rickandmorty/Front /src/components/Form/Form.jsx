import { connect } from "react-redux";
import React from "react";
import { createCharacter } from "../../redux/actions";
import style from "./Form.modules.css";


const Form = (props)=>{

    const [form,setForm] = React.useState({
        name:"",
        status:"",
        species:"",
        gender:""
    })

    const handleChange = (event) => {
        const property=event.target.name;
        const value = event.target.value;

        setForm({
            ...form,
            [property]:value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        props.createCharacter({
            ...form,
            id: Date.now(),
            image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
        });
        alert("Personaje creado correctamente");
    }

    // id, name, status,species,image,gender
    return (
        
         <form onSubmit={handleSubmit} className= "formulario">
                 
            <h3 >Crear Personaje</h3>
            <div className= "cuerpo">
            <p type name="name" value={form.name} onChange={handleChange} ></p>
            <input placeholder="Name..." />
            <p type name="status" value={form.status} onChange={handleChange} ></p>
            <input placeholder="Status..."/>
            <p type name="species" value={form.species} onChange={handleChange}></p>
            <input placeholder="Species..."/>
            <p type name="gender" value={form.gender} onChange={handleChange}></p>
            <input placeholder="Gender..."/>
            </div >
            <button type="submit">SUBMIT</button>   
                   
         </form>
         

        
        )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        createCharacter:(character)=>{dispatch(createCharacter(character))}
    }
}

export default connect(null,mapDispatchToProps)(Form);

// character.origin?.name

