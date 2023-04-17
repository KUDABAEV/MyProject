import React from "react";
interface IGreeting {
    name: string
}

const Greeting = (props:IGreeting) =>{

    return (
        <div>
            <h3>Hi + {props.name}</h3>
        </div>
    )
}

export default Greeting;