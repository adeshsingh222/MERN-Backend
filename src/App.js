import React,{useState} from 'react' // rfc sortcut
import axios from 'axios';
export default function App() {
  const [enteredData,setEnterdData]= useState({
    name:'',
    mobile:''
  })
  const changeHandler=(event)=>{
     const {name,value} = event.target;
     setEnterdData((prevData)=>{
     return { ...prevData,
      [name]:value}
     })

  }
  const clickHandler= async (event)=>{
        event.preventDefault();
      let response= await axios.post("http://localhost:3999/create-post", enteredData)
      console.log(response);
  }
  return (
    <div>
      <h1>todo App</h1>
      <form >
        <input onChange={changeHandler} type="text" placeholder='name' name='name'/>
        <input onChange={changeHandler} type="number" placeholder='number' name='mobile'/>
        <button onClick={clickHandler}>submit</button>
      </form>
    </div>
  )
}
