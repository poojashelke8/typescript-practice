import { useState } from "react"
type data={
    title:string
    
}


function Greet2(props:data) {
  const [count,setCount] = useState(0)

  const add =() =>{
    setCount(count+1)
  }

  const sub = ()=>{
    setCount(count-1)
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{count}</h2>
      <button onClick={()=>add()}>Add</button>
      <button onClick={()=>sub()}>sub</button>
    </div>
  )
}

export default Greet2