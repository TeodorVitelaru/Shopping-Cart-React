import { useState } from "react";
import { loginFormElements } from "../../../confix";
import CommonForm from "../common-form";




const initialFormData = {
    email: '',
    password: ''
}


export default function LoginComponent(){

    const [loginFormData, setLoginFormData] = useState(initialFormData)

    function onHandleSubmit(event){
        event.preventDefault()
        console.log(loginFormData);

        //api login & database logic

        setLoginFormData(initialFormData)
        
    }
    

    return (
        <div>
            <h1>Login Page</h1>
            <CommonForm 
            formControls={loginFormElements}
            formData={loginFormData}
            setFormData={setLoginFormData}
            onHandleSubmit={onHandleSubmit}/>
        </div>
    )
}