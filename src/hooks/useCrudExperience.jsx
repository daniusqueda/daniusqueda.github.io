import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";

const KEY = 'experience';

//LOAD
const loadExperience = () => fetchWithoutToken('/experience')
export const useLoadExperience = () =>  {
   return useQuery([KEY], loadExperience);
}

//ADD
const addExperience = (values) => fetchWithToken('/experience', 'POST', values)
export const useAddExperience = () => {
   const client = useQueryClient();
   return useMutation(addExperience, {
      onSuccess: (experience) => {
         toast.success('Experiencia agregada')
         client.setQueryData([KEY], old => [...old, experience])
      }
   }) 
}

//UPDATE
const updateExperience = (values) => fetchWithToken(`/experience/${values.id}`, 'PUT', values);   
export const useUpdateExperience = () => {
   const client = useQueryClient();
   return useMutation(updateExperience, {
      onSuccess: (experience) => {
         toast.success('Experiencia actualizada');
         client.setQueryData([KEY], old => old.map(i => (i.id === experience.id) ? experience : i))
      }
   })
}

//REMOVE
const removeExperience = (id) =>  fetchWithToken(`/experience/${id}`, 'DELETE')
export const useRemoveExperience = () => {
   const client = useQueryClient();
   return useMutation(removeExperience, {
      onSuccess: (experience) => {
         toast.success('Experiencia eliminada')
         client.setQueryData([KEY], old => old.filter(i => i.id !== experience.id))
      }
   })
}
