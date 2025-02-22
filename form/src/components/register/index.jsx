import { useState } from "react"
import CommonForm from "../common-form"
import { registerFormElements } from "../../../confix"



const initialState = {
    name: '',
    email: '',
    password: ''
}

export default function RegisterComponent(){
    const [registerFormData, setRegisterFormData] = useState(initialState)
    
    function handleRegisterOnSubmit(event){
        event.preventDefault()
        
        console.log(registerFormData);
    }
    
    return (
        <div>
            <h1>Register Page</h1>

            <CommonForm
            formControls={registerFormElements}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            buttonText={'Register'}
            onHandleSubmit={handleRegisterOnSubmit}
            />
        </div>
    )
}