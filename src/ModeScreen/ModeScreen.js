import React from 'react';
import './ModeScreen.css';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import SendIcon from '@material-ui/icons/Send';


export default function ModeScreen() {
  return (
    <div className="div">
      <div className="card">
      <header className="header1">
          <AddToHomeScreenIcon/>
           Home Screen
           <SendIcon  style={{marginRight:4}}/>

          </header>
        <div className="firstDiv">
          
        <div className="labelDiv"><label >Motion Based</label></div> 
         
          <label onClick={()=>console.log("press")} className="switch">
            <input type="checkbox"></input>
            <span className="slider round"></span>

           </label>
          
        </div>

        <div className="secondDiv">
           <div className="labelDiv" ><label>Light Based</label></div> 
         
          <label className="switch">
            <input type="checkbox"></input>
            <span className="slider round"></span>
          </label>
          

        </div>

      </div>
    </div>

  );
}

