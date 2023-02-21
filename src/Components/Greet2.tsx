type data={
    children:string
}


function Greet2(props:data) {
  return (
    <div>{props.children}</div>
  )
}

export default Greet2