import React from 'react'
import "./header.css";
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SendIcon from '@material-ui/icons/Send';
import FilterTiltShiftIcon from '@material-ui/icons/FilterTiltShift';

export default function Header() {
    return (
        <div className="header">
            <AddToHomeScreenIcon  style={{marginLeft:5}} /> 
             Home Automa
             <FilterTiltShiftIcon/>
            <ControlPointIcon/>
            
            <SendIcon style={{marginRight:10}}/>

        </div>
    )
}
