import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchWithoutToken, fetchWithToken, fetchWithTokenImg } from "../helpers/fetch";

const KEY = 'portfolio';

//LOAD
const loadPortfolio = () => fetchWithoutToken('/portfolio')
export const useLoadPortfolio = () =>  {
   return useQuery([KEY], loadPortfolio);
}

//ADD
const addPortfolio = (values) => fetchWithToken('/portfolio', 'POST', values)
export const useAddPortfolio = () => {
   const client = useQueryClient();
   return useMutation(addPortfolio, {
      onSuccess: (portfolio) => {
         toast.success('Proyecto agregado')
         client.setQueryData([KEY], old => [...old, portfolio])
      }
   }) 
}

//ADD IMAGE
const addImagePortfolio = (values) => fetchWithTokenImg(`/uploads/portfolio/${values.id}`, 'POST', values)
export const useAddImagePortfolio = () => {
   const client = useQueryClient();
   return useMutation(addImagePortfolio, {
      onSuccess: (portfolio) => {
         toast.success('Imagen agregada')
         client.setQueryData([KEY], old => old.map(i => (i.id === portfolio.id) ? portfolio : i))
      }
   }) 
}

//UPDATE
const updatePortfolio = (values) => fetchWithToken(`/portfolio/${values.id}`, 'PUT', values);   
export const useUpdatePortfolio = () => {
   const client = useQueryClient();
   return useMutation(updatePortfolio, {
      onSuccess: (portfolio) => {
         toast.success('Proyecto actualizado');
         client.setQueryData([KEY], old => old.map(i => (i.id === portfolio.id) ? portfolio : i))
      }
   })
}

//REMOVE
const removePortfolio = (id) =>  fetchWithToken(`/portfolio/${id}`, 'DELETE')
export const useRemovePortfolio = () => {
   const client = useQueryClient();
   return useMutation(removePortfolio, {
      onSuccess: (portfolio) => {
         toast.success('Proyecto eliminado')
         client.setQueryData([KEY], old => old.filter(i => i.id !== portfolio.id))
      }
   })
}
