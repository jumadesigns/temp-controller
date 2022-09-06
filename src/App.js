import React, { useState } from "react"


const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(45);
  const [color, setColor] = useState("cold");

  const setTempColorHot = () => {
    setTemperatureValue(temperatureValue + 1)

    if(temperatureValue >= 50){
      setColor("hot")
    }
  }

  const setTempColorCold = () => {
    setTemperatureValue(temperatureValue - 1)

    if(temperatureValue <= 50){
      setColor("cold")
    }
  }


  return(
    <div>
      
    <div className="app-container">
      <div className="temperature-display-container ">
      <div className={`temperature-display ${color}`}>{temperatureValue}°F</div>
      </div>
        <div className="button-container">
          <button onClick={setTempColorHot}>+</button>
          <button onClick={setTempColorCold}>-</button>
        </div>
      
      </div>
    </div>
    
  )
}

export default App;
