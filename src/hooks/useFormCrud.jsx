import { useState } from "react"

const useFormCrud = (initial, setStart, setEnd) => {

    const [form, setForm] = useState(initial)

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const reset = (input) => {
        setForm({
            ...form,
            [input]: ''
        });
    }

    const resetInputs = () => {
        setForm(initial);
        if(setStart && setEnd){
            setStart('');
            setEnd('');
        }
    }
    
    return [form, setForm, handleInput, reset, resetInputs]
}
export default useFormCrud