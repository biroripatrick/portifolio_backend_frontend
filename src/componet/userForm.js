import { useState,useEffect, useCallback } from "react";


const useForm = (callback,validate) => {
    const[values,setvalues] = useState({
       username:"",
       email:"" ,
       password:"",
       password2:""
    })
    const [errors,setErrors] = useState({});
    const [isSubmitting,setIsSubmitting] =useState(false)

    const handleChange = e => {
        
        const{name,value} = e.target;
        setvalues({
           ...values,
           [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values)); 
        setIsSubmitting(true);
    };
    useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting ) {
        callback()
    }
    }, [errors]);
    return{handleChange, values, handleSubmit, errors};   
    
};
export default useForm; 