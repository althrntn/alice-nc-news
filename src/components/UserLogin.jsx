import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/User"

const UserLogin = () => {
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/users')
    }
    return (<section id='user_status'>
        {user? <div><h2>Signed in as {user}</h2><button onClick={()=> {handleClick()}}>Switch user</button></div>: <p>Sign in here</p>}</section>)
}
export default UserLogin