import React from 'react';
// import './App.css';
import Header from '../Components/HeaderComponent/Header';
import Button from '../Components/ButtonsComponent/Button';
import MaterialUIPickers from '../Components/TimerCompoent/Timer';
import './firstScreen.css';




export default function HomeScreen() {
  return (
    <div className="App">
      <div className="box">
        <Header />
        <div className="grid-container1" >

          <div className="sensor-div"  >
            <label> sensor </label>
            <button className="btn" > off </button>
          </div>

          <div className="sensor-div"  >
            <label> sensor </label>
            <button className="btn"> off </button>
          </div>
        </div>

        <div className="grid-container2" >

          <Button btnPress={(text)=>console.log("press ",text)}/>

        </div>

        <div className="auto">
          <button className="circle">Bulb</button>
          <button className="circle">Fan</button>
        </div>
        {/* <timer> */}
        <div className="body" >
          <MaterialUIPickers />
        </div>



      </div>
    </div>
  );
}