import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function ProtectedRoute(props){
    const {Component}=props
    const navigate=useNavigate();

    useEffect(()=>{
        let token=localStorage.getItem("Token")
        if(!token){
            navigate("/login")
        }
    },[])


    return(
        <>
        <Component></Component>
        </>
    )

}



export default ProtectedRoute;