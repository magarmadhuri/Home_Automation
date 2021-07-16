// import { Timer } from '@material-ui/icons';
import React from 'react';
// import FirstScreen from "./FirstScreen/FirstScreen";
// import NewHome from './NewScreen/NewHome';
 import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
 import Timer1  from './TimerPage/Timer1';
 import ModeScreen1 from './ModeScreen1/ModeScreen1';

export default function App() {
  return (

   
     <Router>
       <Switch>
          < Route exact path="/" component={ModeScreen1} />
           < Route exact path="/Timer1" component={Timer1} /> 
          
          </Switch>
          </Router>
       );
}

