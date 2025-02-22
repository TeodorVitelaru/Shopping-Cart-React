import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { registerFormControls } from "../../config";
import { updateProfile } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import auth from "../../firebaseConfig";


export default function RegisterPage(){

    const {registerFormData, 
        setRegisterFormData, 
        registerWithFirebase,
        setLoading
    } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleRegisterFormSubmit(event){
        event.preventDefault()

        registerWithFirebase()
      .then((result) => {
        updateProfile(result.user, {
          displayName: registerFormData.name,
        }).then(() => {
          console.log(
            auth.currentUser.displayName,
            "auth.currentUser.displayName"
          )

          if (auth.currentUser.displayName) {
            setLoading(false)
            navigate("/profile");
          }
        })

         //navigate("/profile");
      })
      .catch((error) => console.log(error));
  }
         

    return(
        <div className="w-full max-w-sm mx-auto rounded-lh shadow-md">
            <div className="px-6 py-5">
                <h3>Welcome back</h3>
                <p>RegisterPage</p>
                <CommonForm
                formControls={registerFormControls}
                formData={registerFormData}
                setFormData={setRegisterFormData}
                onSumbit={handleRegisterFormSubmit}
                buttonText="Register"
                />
            </div>
        </div>
    )
}