

export default function CommonInput({label, onChange, name, value, placeholder, type, id}){

    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} 
            type={type || 'text'}
            id={id} 
            placeholder={placeholder || 'Enter a value'}
            value={value}
            onChange={onChange}/>
        </div>
    )
}