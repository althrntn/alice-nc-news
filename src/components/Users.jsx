import { useContext, useEffect, useState } from "react"
import { getUsers } from "../utils/api_funcs"
import { UserContext} from "../contexts/User"

const Users = () => {
    const [userList, setUserList] = useState([])
    const {user, setUser} = useContext(UserContext)

    useEffect(()=>{
        getUsers().then((response)=> {
            setUserList(response.users);
        })
    }, [])

const changeUser = (newUser)=> {
    setUser(newUser.username)
    }

return (<div><h1>Users</h1>
<ul>
{userList.map((ele)=>{
    return (<li><h2>{ele.username}</h2>
    <img src={ele.avatar_url}></img>
    <button onClick={()=>{changeUser(ele)}}>Sign me in</button></li>)
})}</ul></div>)
}
export default Users