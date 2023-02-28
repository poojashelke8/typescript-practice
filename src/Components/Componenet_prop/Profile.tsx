export type Componentprop = {
    name:string
}

const Profile = ({name}:Componentprop) =>{
    return(
        <div>Private component and name is {name}</div>
    )
}

export default Profile