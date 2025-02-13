import React from 'react'

 //Hook: state is a function that gives extra feature of the react component.
 //state: hold the information of the component


export default function Toggle() {

    const [isOn, setIsOn]=useState(false);

    //function & method
    const toggle=()=>{
        setIsOn(!isOn)
    }
//turnary operator
//react event

  return (
    <div
    ><p>
        {isOn? "On": "OFF"}
    </p>
      
      <button onClick={toggle}>Toggle Button</button>
    </div>
  )
}
