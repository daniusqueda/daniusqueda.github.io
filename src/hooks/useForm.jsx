import { useState } from "react"

const useForm = (initial) => {

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
    }
    
    return [form, handleInput, reset, resetInputs]
}
export default useForm