import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <KeyboardTimePicker
        margin="normal"
        id="time-picker"
         label="Timer"
         value={selectedDate}
         onChange={handleDateChange}
         KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
    </MuiPickersUtilsProvider>
  )
}


// import React, { useState, useEffect } from 'react';
// import './Timer.css';

// export default function Timer() {
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);

//         useEffect(()=>{
//            let timer=setInterval(()=>{
//                 setSeconds(seconds+1);
//                 if(seconds===59){
//                     setMinutes(minutes+1);
//                     setSeconds(0);
//                 }
//             },1000)
//             return()=>clearInterval(timer);
//         });


//  return (
//         <div className="timer1" >

//             <h3>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds} </h3>

//         </div>
//     )
// }
  // const intervalRef = useRef(null);
  // const [timer, setTimer] = useState("00:00:00");

  // useEffect(() => {
  //   clearTimer(getDeadlineTime());
  //   return () => {
  //     if (intervalRef.current) clearInterval(intervalRef.current)
  //                 }
  // },[]);

  // const getDeadlineTime=()=> {
  //   let deadline = (new Date());
  //   deadline.getSeconds(deadline.getSeconds()+10);
  //   return deadline;
  // }


  // function getTimeRemaining(endtime) {
  //   const total = Date.parse(endtime) - Date.parse(new Date());
  //   const seconds = Math.floor((total / 1000) % 60);
  //   const minutes = Math.floor((total / 1000 / 60) % 60);
  //   const hours = Math.floor((total / 1000 * 60 * 60) % 24);
  //   const days = Math.floor((total / 1000 * 60 * 60) % 24);
  //   return {
  //     total, days, hours, minutes, seconds
  //   };
  // }

  // function startTimer(deadline) {
  //   let { total,days, hours, minutes, seconds } = getTimeRemaining(deadline);
  //   if (total>=0) {
  //     setTimer(
  //       (hours > 9 ? hours : '0' + hours) + ':' +
  //       (minutes > 9 ? minutes : '0' + minutes) + ':' +
  //       (seconds > 9 ? seconds : '0' + seconds)
  //     )
  //   } else {
  //     clearInterval(intervalRef.current);
  //   }
  // }

  // function clearTimer(endtime) {
  //   if (intervalRef.current) clearInterval(intervalRef.current);
  //   const id = setInterval(() => {
  //     startTimer(endtime);
  //   }, 1000)
  //   intervalRef.current = id;
  // }



  // return (
  //   <div className="timer1" >{timer}</div>
  // )

