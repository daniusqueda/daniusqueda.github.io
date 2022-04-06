import toast from "react-hot-toast";
const baseURL = 'https://street-carlitos.herokuapp.com/api';

export const fetchWithoutToken = async (endpoint, method, dates) => {
   const config = {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(dates)}
   const res = method === 'POST' 
      ? await fetch(baseURL + endpoint, config) 
      : await fetch(baseURL + endpoint)
   const data = await res.json();
   if (!res.ok) {
      data.map(err => toast.error(err));
      throw new Error()
   }
   return data;
}

export const fetchWithToken = async (endpoint, method, dates) => {
   const TOKEN = localStorage.getItem('token') ?? '';
   let config = (method === 'GET' || method === 'DELETE')
      ? { method, headers: { 'access-token': TOKEN } }
      : { method, headers: { 'access-token': TOKEN, 'Content-Type': 'application/json' }, body: JSON.stringify(dates) }
   const res = await fetch(baseURL + endpoint, config)
   const data = await res.json();
   if (!res.ok) {
      data.map(err => toast.error(err));
      throw new Error();
   }
   return data;
}

export const fetchWithTokenImg = async (endpoint, method, {file}) => {
   const TOKEN = localStorage.getItem('token') ?? '';
   const config = { method, headers: { 'access-token': TOKEN }, body: file }
   const res = await fetch(baseURL + endpoint, config)
   const data = await res.json();
   if (!res.ok) {
      data.map(err => toast.error(err));
      throw new Error();
   }
   return data;
}
