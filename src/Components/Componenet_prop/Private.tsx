import { Login } from "./Login"
import { Componentprop } from "./Profile"

type Privateprop = {
    isloggedin:boolean,
    component:React.ComponentType<Componentprop>
    
}

const Private = ({isloggedin,component:Component}:Privateprop)=>{
    if(isloggedin){
        return <Component name="Pooja"/>
    }else{
        return <Login/>
    }
}

export default Private