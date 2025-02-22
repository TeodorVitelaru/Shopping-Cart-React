import CommonInput from "../common-input";


const formElementTypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea'

}


export default function CommonForm({formControls = [], formData, setFormData, onSumbit, buttonText}){


    function renderFormElement(getFormControl, getFormData){
        let element = null
        switch (getFormControl.componentType) {
            case formElementTypes.INPUT:
                element = <CommonInput 
                type={getFormControl.type} 
                placeholder={getFormControl.placeholder} 
                value={getFormData[getFormControl.name]} 
                name={getFormControl.name} 
                onChange={(event) => setFormData({
                    ...formData,
                    [getFormControl.name] : event.target.value
                })}/>
                break;
        
            default:
                element = <CommonInput 
                type={getFormControl.type} 
                placeholder={getFormControl.placeholder} 
                value={getFormData[getFormControl.name]} 
                name={getFormControl.name} 
                onChange={(event) => setFormData({
                    ...formData,
                    [getFormControl.name] : event.target.value
                })}
                />
                break;
        }
        
        return element
    }    

    return(
        <form onSubmit={onSumbit}>

        {
            formControls.map(singleFormControl => renderFormElement(singleFormControl, formData))
        }

        <button type="submit">{buttonText || 'Submit'}</button>
        </form>
    )
}