import React,{useState} from 'react'
import "./Button.css";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

export default function Button(props) {
    const [onoff ,setOnoff]=useState(false);
    // const {btnPress}=props;



    return (
        <>
            <div className="button_div">
                <label  >bulb</label>
                <button className="circle">< EmojiObjectsIcon  style={{ color:onoff?"red": "white" }} /></button>
            </div>

            <div className="button_div">
                <label  >ready</label>
                <button  className="circle" onClick={()=>{setOnoff(!onoff)}}>{onoff?"On":"Off" }</button>
            </div>
            <div  className="button_div">
                <label  >auto</label>
                <button className="circle">off</button>
            </div>
            <div className="button_div">
                <label  >intelli...</label>
                <button className="circle">off</button>
            </div>
               
        </>
    )
}
