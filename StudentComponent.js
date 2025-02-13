import {useState} from "react";

function StudentComponent({name, age, city}) {

    const[name, setName]=useState("");
    const[age, setAge]= useState("");
    const[city, setCity]= useState("");

    const Display=()=>{
        alert(`name: ${name}`, `Age: ${age}`,` city: ${city}`)
    };

    const s={backgroundColor: 'blue', height: '200px'};

    return(
        <div style={s}>
        <h1>Student Information</h1>
        <p>Name is  {name}
        </p>
        <p>Age is {age}</p>
        <p> City is  {city}</p>

        <button onClick={Display}> Show Details </button>
        </div>
    )
}
export default StudentComponent;