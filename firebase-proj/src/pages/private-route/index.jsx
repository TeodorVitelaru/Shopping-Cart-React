import { useContext } from "react"
import { AuthContext } from "../../context"
import { Navigate } from "react-router-dom"



export default function AuthPage({children}){

    const {user, loading} = useContext(AuthContext)

    //loading...
    if(loading) return <h1>Loading! Please wait</h1>

    //login succes!
    if(user) return children

    //login failed
    return(
        <Navigate to={"/login"} />
    )
}