import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";

const KEY = 'education';

//LOAD
const loadEducation = () => fetchWithoutToken('/education')
export const useLoadEducation = () =>  {
   return useQuery([KEY], loadEducation);
}

//ADD
const addEducation = (values) => fetchWithToken('/education', 'POST', values)
export const useAddEducation = () => {
   const client = useQueryClient();
   return useMutation(addEducation, {
      onSuccess: (education) => {
         toast.success('Estudio agregado')
         client.setQueryData([KEY], old => [...old, education])
      }
   }) 
}

//UPDATE
const updateEducation = (values) => fetchWithToken(`/education/${values.id}`, 'PUT', values);   
export const useUpdateEducation = () => {
   const client = useQueryClient();
   return useMutation(updateEducation, {
      onSuccess: (education) => {
         toast.success('Estudio actualizado');
         client.setQueryData([KEY], old => old.map(i => (i.id === education.id) ? education : i))
      }
   })
}

//REMOVE
const removeEducation = (id) =>  fetchWithToken(`/education/${id}`, 'DELETE')
export const useRemoveEducation = () => {
   const client = useQueryClient();
   return useMutation(removeEducation, {
      onSuccess: (education) => {
         toast.success('Estudio eliminado')
         client.setQueryData([KEY], old => old.filter(i => i.id !== education.id))
      }
   })
}
