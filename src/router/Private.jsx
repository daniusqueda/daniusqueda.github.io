import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useAuthRenew } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom";
import LoaderAuth from "../animation/LoaderAuth";

const Private = ({ children, isLogged }) => {
   const TOKEN = localStorage.getItem('token');
   const navigate = useNavigate()
   const {mutate: renewUser, isLoading} = useAuthRenew();
   useEffect(() => {
      if(TOKEN){
         renewUser();
         navigate('/dashboard')
      }
   }, [])
   
   return (
      isLoading 
         ? <LoaderAuth />
         :
         isLogged
            ? children
            : <Navigate to="/auth" />
   )
}

export default Private