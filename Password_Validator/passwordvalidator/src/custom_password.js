import React ,{useState}from 'react';
//import validator from 'validator'
const Password_custom = ( value ) => {

    const[errorMessage,setErrorMessage] = useState("");

    const passwordCriteria = {
    minLength: 8, minLowercase: 1,
    minUppercase: 1, minNumbers: 1, minSymbols: 1
};

const customValidatePassword = (password) => {
    let lowercase = (password.match(/[a-z]/g) || []).length;
    let uppercase = (password.match(/[A-Z]/g) || []).length;
    let numbers = (password.match(/[0-9]/g) || []).length;
    let symbols = (password.match(/[^a-zA-Z0-9]/g) || []).length;

    if( password.length >= passwordCriteria.minLength &&
           lowercase >= passwordCriteria.minLowercase &&
           uppercase >= passwordCriteria.minUppercase &&
           numbers >= passwordCriteria.minNumbers &&
           symbols >= passwordCriteria.minSymbols)
            {setErrorMessage("Password is strong enough")}
    else{
        setErrorMessage("Password is not strong")
    }

           }
           return (
    <div>
        EnterPassword:<span>
            <input type="text" onChange={(e)=>customValidatePassword(e.target.value)} />

        </span>
        <h1>{errorMessage === "" ? null : errorMessage}</h1>
    </div>
)
};

// Returns false






export default Password_custom

