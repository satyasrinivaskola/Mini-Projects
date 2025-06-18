import React ,{useState}from 'react';
import validator from 'validator'
const Password = ( value ) => {

    const[errorMessage,setErrorMessage] = useState("");

const validate=(value)=>{
    if(validator.isStrongPassword(value,{
        minLength:8,
        minUppercase:1,
        minLowercase:1,
        minSymbols:1,
        minNumbers:1,
    
    })){setErrorMessage("Password is strong")}
    else{
        setErrorMessage("Password is not strong")
    }

}

return (
    <div>
        EnterPassword:<span>
            <input type="text" onChange={(e)=>validate(e.target.value)} />

        </span>
        <h1>{errorMessage === "" ? null : errorMessage}</h1>
    </div>
)
}
export default Password

