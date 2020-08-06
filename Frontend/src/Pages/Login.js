import React, { Component } from "react";
import AuthService from './../Services/AuthService';
class Login extends Component {
    constructor(props){
        super(props);
            this.state = {
                email:'',
                password:'',
                isChecked: false
            }
        }

    async handleFormSubmit(event) {
        event.preventDefault();
        const postData = {
            username: this.state.email,
            password: this.state.password,
            grant_type: 'password',
            client_id: 2,
            client_secret: 'h4Rszv34VV9o0BHKhowVSLEg5kfFIEvNlJoALpHc'
        }
        const response = await AuthService.doUserLogin(postData);
        if(response){
            AuthService.handleLoginSucces(response, this.state.isChecked);
            window.location.reload(false);
        }
        else{
            alert('Check Your Credentials');
        }
    }
    handleChecked() {
        if(this.state.isChecked == true){
            this.setState({isChecked: false});
        }
        else{
            this.setState({isChecked: true});
        }
    }   
    render () {
        const {email, password, isChecked} = this.state;
        return(
            <React.Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>

                            <div className="card-body">
                                <form onSubmit={event => this.handleFormSubmit(event)}>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div className="col-md-6">
                                            <input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={email}
                                            onChange ={event => this.setState({email: event.target.value})} 
                                            required
                                            autoComplete="email"
                                            autoFocus />

                                    
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                        <div className="col-md-6">
                                            <input
                                            id="password"
                                            type="text"
                                            className="form-control"
                                            name="password"
                                            value={password}
                                            onChange ={event => this.setState({password: event.target.value})} 
                                            required
                                            autoComplete="current-password"
                                            />

                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-6 offset-md-4">
                                            <div className="form-check">
                                                <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="remember"
                                                checked ={isChecked}
                                                onChange={() => this.handleChecked()} 
                                                id="remember" />

                                                <label className="form-check-label" htmlFor="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button
                                            type="submit"
                                            className="btn btn-primary" >
                                                Login
                                            </button>

                                                <a className="btn btn-link" href="">
                                                    Forgot Your Password?
                                                </a>
                                            
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}  
export default Login;
  