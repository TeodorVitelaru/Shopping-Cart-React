import CommonInput from "../common-input";

const formTypes = {
    INPUT : 'input',
    SELECT : 'select',
    TEXTAREA: 'textarea'
}


export default function CommonForm({formControls = [], formData, setFormData, buttonText, onHandleSubmit}){
    function renderFormElement(getCurrentElement, formData, setFormData){
        let content = null;
        
        switch (getCurrentElement.componentType) {
            case formTypes.INPUT:
                content = <CommonInput 
                label={getCurrentElement.label}
                name={getCurrentElement.name}
                type={getCurrentElement.type}
                id={getCurrentElement.id}
                placeholder={getCurrentElement.placeholder}
                value={formData[getCurrentElement.name]}
                onChange={(event)=> setFormData({
                    ...formData,
                    [event.target.name]: event.target.value
                })}/>
                break
        
            default:
                content = <CommonInput 
                label={getCurrentElement.label}
                name={getCurrentElement.name}
                type={getCurrentElement.type}
                id={getCurrentElement.id}
                placeholder={getCurrentElement.placeholder}
                value={formData[getCurrentElement.name]}
                onChange={(event)=> setFormData({
                    ...formData,
                    [event.target.name]: event.target.value
                })}/>
                break;
        }
        
        return content
    }
    
    
    return(
        <form onSubmit={onHandleSubmit}>
            {
                formControls?.length ?
                formControls.map(singleFormElementItem =>
                    renderFormElement(singleFormElementItem, formData, setFormData)
                ) : null
            }
            <div style={{
                marginTop: "12px"
            }}>
                <button type="submit">{buttonText || 'Submit'}</button>
            </div>
        </form>
    )
}