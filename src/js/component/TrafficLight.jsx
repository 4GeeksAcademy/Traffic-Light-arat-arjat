import React from "react";
import { useState } from "react";


function TrafficLight() {
const [changeLight , setChangeLight ] = useState("Yellow"); 

  return (
    <div className="TrafficLight">
        <div className="TrafficLightT">
          <div 
          onClick={() => setChangeLight("Green")}
          className={"Foco Green" + ((changeLight === "Green") ? " shine" : "") }></div>
          
          <div 
          onClick={() => setChangeLight("Yellow")}
          className={"Foco Yellow" + ((changeLight === "Yellow") ? " shine" : "")}></div>
          
          <div 
          onClick={() => setChangeLight("Red")}
          className={"Foco Red" + ((changeLight === "Red") ? " shine" : "")}></div>
        </div>
    </div>
  )
}

export default TrafficLight