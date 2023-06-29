import { useState } from "react";
import { createUser, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import React from "react";
import FormInput from "../form-input/form_input.component";
import './sign_up.style.scss';

import Button from "../button/button.component";

const defaultformFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultformFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultformFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword)
        {
           alert("Password does not match");
           return;
        }
        try{
            const { user } = await createUser(email, password);
            console.log(user);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch(error){
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

   return(
    <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email</span>
        <form onSubmit={handleSubmit}>
            <FormInput required
                label="Display Name"
                type="text"
                onChange={handleChange}
                name="displayName"
                value={formFields.displayName}
            />
            <FormInput required
                label="Email"
                type="email"
                onChange={handleChange}
                name="email"
                value={formFields.email}

            />
            <FormInput required
                label="Password"
                type="password"
                onChange={handleChange}
                name="password"
                value={formFields.password}
            />
            <FormInput required
                label="Confirm Password"
                type="password"
                onChange={handleChange}
                name="confirmPassword"
                value={formFields.confirmPassword}
            />
            <Button type="submit">Sign Up</Button>
        </form>
    </div>
   )
}

export default SignUp;