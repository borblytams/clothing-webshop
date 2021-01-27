import React from "react";
import FormInput from "../form-input/form-input.component"

import CustomButton from "../custom-button.component/custom-button.component"

import {signInWithGoogle} from "../../firebase/firebase.utils"
import "./sign-in.styles.scss";



class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:"", password: ""})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.state({ [name]: value})
    }
    render() {
        return (
            <div className="sign-in" onSubmit={this.handleSubmit}>
            <h2>I already have an account</h2>
            <span>Sign in with your e-mail and password</span>

            <form action="">
                <FormInput type="email" label="email" name="email" id="" handleChange={this.handleChange} value={this.state.email} required/>
          
                <FormInput 
                type="password" 
                label="password"
                name="password" id="" 
                handleChange={this.handleChange}
                value={this.state.email} required/>


                <div className="buttons">
                <CustomButton type="submit" >Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with google</CustomButton>
         
                </div>
                 </form>
            </div>
        )
    }
}

export default SignIn;