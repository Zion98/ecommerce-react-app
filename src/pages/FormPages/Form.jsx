import React from 'react'
import "./Form.scss"
import SignIn from "../../components/SignIn/SignIn"
import SignUp from '../../components/Signup/SignUp'
const Form = () => {
    return (
      <div className="sign-in-and-sign-up">


        <SignIn/>
        <SignUp/>
      </div>
    )
}

export default Form
