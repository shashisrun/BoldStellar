import React, { Component } from "react";
import AuthService from './../services/AuthService';

class Register extends Component {

    constructor(props){
        super(props);
        this.state={
        name: '',
        email:'',
        password:'',
        confirmPassword: ''
        }
       }
    
       async handleFormSubmit(event) {
        event.preventDefault();
        const postRegisterData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password
        }
        const response = await AuthService.doUserRegistration(postRegisterData);
        if(response){
            const postLoginData = {
                username: this.state.email,
                password: this.state.password,
                grant_type: 'password',
                client_id: 2,
                client_secret: 'h4Rszv34VV9o0BHKhowVSLEg5kfFIEvNlJoALpHc'
            }
            const response = await AuthService.doUserLogin(postLoginData);
            AuthService.handleLoginSucces(response);
            window.location.reload(false);
        }
        else{
            alert('Something Went Wrong');
        }
    }


    render () {
        const {name, email, password, confirmPassword} = this.state;
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Register</div>

                            <div className="card-body">
                                <form onSubmit={event => this.handleFormSubmit(event)}>
                        
                                    <div className="form-group row">
                                        <label
                                        htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>

                                        <div className="col-md-6">
                                            <input id="name"
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={name}
                                            onChange={() => this.setState({name: event.target.value})}
                                            required
                                            autoComplete="name"
                                            autoFocus />

                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div className="col-md-6">
                                            <input id="email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={email}
                                            onChange={() => this.setState({email: event.target.value})}
                                            required
                                            autoComplete="email" />

                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                        <div className="col-md-6">
                                            <input
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            value={password}
                                            onChange={() => this.setState({password: event.target.value})}
                                            required
                                            autoComplete="new-password" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                        <div className="col-md-6">
                                            <input
                                            id="password-confirm"
                                            type="password"
                                            className="form-control"
                                            name="password_confirmation"
                                            value={confirmPassword}
                                            onChange={() => this.setState({confirmPassword: event.target.value})}
                                            required
                                            autoComplete="new-password" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={() => {this.handleFormSubmit(event);}}
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

  
export default Register;
  
