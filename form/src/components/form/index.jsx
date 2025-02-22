import { useState } from "react"



export default function FormComponent(){
    const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email : ''
  })

  function handleInputChange(event){
    const {value} = event.target
    setNameValue(value)
    //setNameValue(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()

    //call the api gere and pass the name value 
  }

  function handleEmailChange(event){
    setEmailValue(event.target.value)
  }

  function handleOnChange(event){
      const {name, value} = event.target

      setFormData({
        ...formData,
        [name] : value
      })
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
      <input 
        value={formData.name}
        name="name" 
        id="name" 
        placeholder="Enter your name"
        onChange={handleOnChange}/>
        <input type="email" 
        name="email" 
        id="email" 
        placeholder="email@exemple.com"
        onChange={handleOnChange}
        value={formData.email}/>
        <button type="submit">Submit</button>  
      </form>
      
    </div>
  )
}