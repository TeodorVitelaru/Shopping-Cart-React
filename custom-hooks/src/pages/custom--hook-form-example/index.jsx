import { useForm } from "react-hook-form"


export default function ReactHookFormExamplePage(){

    const {register, handleSubmit, formState: {errors}}= useForm()

    function onSubmitForm(formData){
        console.log(formData);
        reset()
    }

    return(
        <div>
            <h1>React hook form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label>Email</label>
                    <input {...register('email', {
                        required: true
                    })} name="email" type="email"/>
                    {
                        errors.email && errors.email.type==='required' ?
                        <p style={{color: "red", fontWeight: "bolder"}}>Email is required</p> : null
                    }
                    <label>Password</label>
                    <input {...register('password', {
                        required: true,
                        minLength: 8,
                    })} name="password" type="password"/>
                    {
                        errors.password && errors.password.type === 'required' ?
                        <p style={{color: "red", fontWeight: "bolder"}}>Password is required</p> : null
                    }
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}