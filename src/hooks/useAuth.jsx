import  { useMutation } from "react-query"
import { useDispatch } from "react-redux";
import { login } from '../state/slices/authSlice'
import { fetchWithToken, fetchWithoutToken } from "../helpers/fetch";
import toast from "react-hot-toast";

const loginPortfolio = (values) => fetchWithoutToken('/auth/login', 'POST', values)
export const useAuth = () => {
   const dispatch = useDispatch();
   return useMutation(loginPortfolio, {
      onSuccess: ({id, name, email, token}) => {
         toast.success(`Bienvenido ${name}`)
         localStorage.setItem('token', token)
         dispatch(login({ id, name, email }))
      }
   })
}

export const useAuthRenew = () => {
   const dispatch = useDispatch();
   return useMutation(() => fetchWithToken('/auth/renew', 'GET'), {
      onSuccess: ({ id, name, email, token }) => {
         localStorage.setItem('token', token)
         dispatch(login({ id, name, email }))
      }
   })
}