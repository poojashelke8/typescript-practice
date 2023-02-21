import React, { useState } from 'react'

type FormData = {
    name:string,
    age:number
}
const defaultval = {
    name:"",
    age:0
}

function Form() {
    const [formUser,setFormUser] = useState<FormData>(defaultval)

    const OnchangeName = (event:any)=>{
        setFormUser({
            ...formUser,
            name:event.target.value
        })};
    const OnchangeAge = (event:any)=>{
        setFormUser({
            ...formUser,
            age:event.target.value
        })
    }

    const onSubmitform=()=>{
        console.log("formdata",formUser)
    }
  return (
    <div>
        Username :<input 
            type="text" 
            value={formUser.name} 
            onChange={OnchangeName}/><br></br>
        
        UserAge :<input 
            type="text" 
            value={formUser.age} 
            onChange={OnchangeAge}/><br/>

        <button onClick={onSubmitform}>Submit</button>
    </div>
  )
}

export default Form