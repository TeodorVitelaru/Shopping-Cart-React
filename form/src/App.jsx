import { useState } from "react"
import FormComponent from "./components/form"
import { use } from "react"
import LoginComponent from "./components/login"
import RegisterComponent from "./components/register"


function App() {
  
  return(
    <div>
      {/*<FormComponent/>*/}
      <div style={{
        display: 'flex',
        gap: '20px'
      }}>
        <LoginComponent/>
        <RegisterComponent/>
      </div>
    </div>
  )
}

export default App
