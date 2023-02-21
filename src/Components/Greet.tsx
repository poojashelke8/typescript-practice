// ------------individual types-----------
// type PersonData = {
//     name:string
//     messagecount:number
//     isloggedin:boolean

import { type } from "@testing-library/user-event/dist/type"

    
// }


// --------------------Object-----
// type PersonData={
//     name:{
//         first:string,
//         last:string
//     }
// }

// -----------array------------
// type PersonData={
//     name:{
//         first:string,
//         last:string
//     }[]
// }

// optional props are -> add ? at the end of prop type ex:  [first?:string]



type PersonData = {
    // passing another component as a parameter 
    children:React.ReactNode
}

function Greet(props:PersonData) {
  return (
    <div>
      {/* <h3>{props.isloggedin ? `Welcome${props.name}` : 'Need to register'}</h3> */}
      {/* <h2>{props.name.first}  {props.name.last}</h2> */}

      {/* {props.name.map((name)=>{
        return(
            <h2 key={name.first}>{name.first}  {name.last}</h2>
        )
      })} */}
      <h3>{props.children}</h3>
    </div>
  )
}

export default Greet