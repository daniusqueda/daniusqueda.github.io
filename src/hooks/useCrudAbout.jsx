import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchWithoutToken, fetchWithToken, fetchWithTokenImg } from "../helpers/fetch";
import { aboutActive, clearAboutActive } from "../state/slices/aboutSlice";

const KEY = 'about';

//LOAD
const loadAbout = () => fetchWithoutToken('/about')
export const useLoadAbout = () =>  {
   const dispatch = useDispatch();
   return useQuery([KEY], loadAbout, {
      onSuccess: (about) => dispatch(aboutActive(about[0]))
   });
}

//ADD
const addAbout = (values) => fetchWithToken('/about', 'POST', values)
export const useAddAbout = () => {
   const dispatch = useDispatch();
   const client = useQueryClient();
   return useMutation(addAbout, {
      onSuccess: (about) => {
         toast.success('Informacion agregada')
         client.setQueryData([KEY], () => [about])
         dispatch(aboutActive(about));
      }
   }) 
}

//ADD IMAGE
const addImageAbout = (values) => fetchWithTokenImg(`/uploads/about/${values.id}`, 'POST', values)
export const useAddImageAbout = () => {
   const dispatch = useDispatch();
   const client = useQueryClient();
   return useMutation(addImageAbout, {
      onSuccess: (about) => {
         toast.success('Imagen agregada')
         client.setQueryData([KEY], () => [about])
         dispatch(aboutActive(about));
      }
   }) 
}

//UPDATE
const updateAbout = (values) => fetchWithToken(`/about/${values.id}`, 'PUT', values);   
export const useUpdateAbout = () => {
   const client = useQueryClient();
   return useMutation(updateAbout, {
      onSuccess: (about) => {
         toast.success('Informacion actualizada');
         client.setQueryData([KEY], old => old.map(i => (i.id === about.id) ? about : i))
      }
   })
}

//REMOVE
const removeAbout = (id) =>  fetchWithToken(`/about/${id}`, 'DELETE')
export const useRemoveAbout = () => {
   const dispatch = useDispatch();
   const client = useQueryClient();
   return useMutation(removeAbout, {
      onSuccess: (about) => {
         toast.success('Informacion eliminada')
         client.setQueryData([KEY], old => old.filter(i => i.id !== about.id))
         dispatch(clearAboutActive());
      }
   })
}
