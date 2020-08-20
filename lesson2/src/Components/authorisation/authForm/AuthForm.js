import React, { Component } from 'react';

import auth from '../../../services/auth';


class AuthForm extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;


        auth.signIn({ email, password })
            .then(res => localStorage.setItem('user', JSON.stringify({ token: res.data.idToken, localId: res.data.localId })))
            .then(() => {
                this.setState({ email: "", password: "" })
            })

    }

    render() {

        const { email, password } = this.state;

        return (

            <form onSubmit={this.handleSubmit}>
                {console.log('this.props SignIn', this.props)}
                <label>
                    Email: <input type="text" value={email} name="email" onChange={this.handleChange} />
                </label>
                <label>
                    Password: <input type="text" value={password} name="password" onChange={this.handleChange} />
                </label>

                <button type="submit">SignIn</button>
            </form>

        );
    }
}

export default AuthForm;