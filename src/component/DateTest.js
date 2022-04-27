import React,{useState} from 'react'

const DateTest = () => {
    const [Dob, setDob] = useState('')

let userDate=new Date(Dob);
let curDate= new Date();



let date=curDate.getDate();
let month=curDate.getMonth()+1;
let year=curDate.getFullYear();
let y=year-18;
console.log(y)
if (month<10) {
    month="0"+month  //'0'+2 = 02
}
if (date<10) {
    date="0"+date 
}

let birth=  y+'-'+month+'-'+date;

  return (
    <div className='mt-5 mx-5'>

    <input type="date" max={birth} onChange={(e)=>setDob(e.target.value)}/>
    <input className='mx-2' type="text" value=""/>
    </div>
  )
}

export default DateTest