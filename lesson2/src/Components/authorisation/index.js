import React, { Component } from 'react'
import RegistrationForm from './registrationForm/RegistrationForm'
import AuthForm from './authForm/AuthForm'

class Auth extends Component {

    state = {
        signIn: false
    }


    openForm = () => {
        this.setState(prevState => ({ signIn: !prevState.signIn })
        )
    }

    render() {
        return (
            <>
                {/* <button type='button' onClick={this.openForm}>Sign IN</button>
                <button type='button' onClick={this.openForm}>Sign Up</button> */}

                <div>{this.state.signIn ? <RegistrationForm /> : <AuthForm />}</div>
                <p onClick={this.openForm} >{this.state.signIn ? 'Sign IN' : 'Sign UP'}</p>
            </>
        )
    }
}

export default Auth