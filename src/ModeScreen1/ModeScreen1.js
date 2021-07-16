import React, { useState } from 'react';
import './ModeScreen1.css';
import Switch from "react-switch";
import { useHistory} from "react-router-dom";



export default function ModeScreen1() {
  const [onSensor, setonSensor] = useState(false)
  const history = useHistory();

  const handleChange = () => {
    setonSensor(!onSensor);
  }
  function handleClick() {
    history.push("/Timer1");
}
  
  return (
    <div className="main">
      <div className="card">
        <header>
          <h5>IntelligetMode</h5>
          <h6>Automatic</h6>
        </header>
        <div className="div1">

         
          <div className="switchDiv">
            <label>

              <Switch
                onChange={handleChange}
                checkedIcon={false}
                uncheckedIcon={false}
                checked={onSensor}
                width={100}
                offColor={'#D3D3D3'}
                onColor={'#018786'}


              />
            </label>
          </div>


          <div className="button_div">
            <label style={{ marginRight: 120,color:'#3c1874' }}>MotionSense</label>
            <button className="circle">off</button>
            <button className="circle">off</button>
            <button className="circle">off</button>
            <button className="circle">off</button>
          </div>

        </div>
        <div className="div2">
          {!onSensor && <>
            <label style={{ marginLeft: 60, color:'#3c1874'}}>LightSense</label>
            <div className="button_div2">
              <button className="circle"style={{backgroundColor:'#108786'}} >off</button>
              <button className="circle"style={{backgroundColor:'#108786'}} >off</button>
              <button className="circle"style={{backgroundColor:'#108786'}} >off</button>

            </div>


          </>

          }

          {onSensor && <div className="div3">
            
            <button className="timerBtn" onClick={handleClick}>Set TImer!</button>

          </div>}


        </div>

      </div>

    </div>
  )
}
