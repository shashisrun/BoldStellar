import React, {Component} from 'react'
import  {Button}  from 'react-bootstrap';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'react-router-dom'
import ApiRepository from '../Library/ApiRepositories'
const axios = require('axios').default; 

class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};




        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {    this.setState({value: event.target.value});  }
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      async GetMenu(event) {
        event.preventDefault();
        const response = await ApiRepository.GetMenu();
        if(response){
            console.clear()
            console.log(response)
        }
        else{
            alert('Something Went Wrong');
        }
    }
    render(){
        const {email, password, isChecked} = this.state;
        return(
         <React.Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>

                            <div className="card-body">
                                <form >
                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control" value={email} required autoComplete="email" autoFocus />

                                    
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
        )
    }
    // render(){
    //     return (
    //         <React.Fragment>
    //             <h1>Home</h1><br />
    //             <Link to='/root'>Root</Link><br />
    //             <Button onClick={shoot}>Take the Shot!</Button><br />
    //             <Button onClick={event => this.GetMenu(event)}>Get Blog Data</Button>

    //         </React.Fragment>
    //     )
    // }
}

function shoot() {
    alert("Great Shot!");
}










// function get(){
// console.clear()
//     var data = new FormData();

//         // data.append('grant_type', 'password');
//         // data.append('client_id', '2');
//         // data.append('client_secret', 'secret_token');
//         // data.append('scope', '*');

//         // data.append('username', 'mail');
//         // data.append('password', 'pwd');

//     var url = 'localhost:8000'+ '/api/blog/1';
//     const config = {
//         method: 'GET',
//         headers: {
//           'Accept': 'application/json',
//           //'Content-Type': 'multipart/form-data;',
//         //   'Authorization': 'Bearer ' + global.token,
//         },
//         body: data,
//        }
//        fetch(url, config)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 console.log(responseJson);

//             })
//             .catch(err => {
//                 console.log(err);
//             })
// console.log(config)
//     axios.get('http://localhost:8000/api/blog/1')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .finally(function () {
//         // always executed
//     });






// }


export default Test