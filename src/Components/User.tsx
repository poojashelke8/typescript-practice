import React,{useState} from 'react'

type Authuser ={
    name:string,
    email:string
}


function User() {
    

    const [user,setuser] = useState<Authuser | null>(null)

    const handlelogin =()=>{
        setuser({
            name:"Pooja",
            email:"pooja@mail.com"
        })
    }
    const handlelogout = ()=>{
        setuser(null)
    }

  return (
    <div>
        <button onClick={handlelogin}>Login</button> 
        <button onClick={handlelogout}>Logout</button>
        <h2>User name is {user?.name} and email is{user?.email}</h2>

        
    </div>
  )
}

export default User