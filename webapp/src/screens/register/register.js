import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            view: null
        };
    }

    render() {
        return (
            <div>
                <div className="nav">
                    <img src={Logo} style={{height:50,width:50}}></img>
                </div>
                <div className="form">
                    <h1>Sign up</h1>
                    <input placeholder="First Name" type="name" className="entry"></input>
                    <input placeholder="Last Name" type="name" className="entry"></input>
                    <br></br>
                    <input placeholder="Email address" type="email" className="entry"></input>
                    <input placeholder="Password" type="password" className="entry"></input>
                    <br></br>
                    <button className="loginbtn"><Link to="/emotion">Register</Link></button>
                </div>
                <div>
                    <h3>Already have an account? Sign in <Link to="Login">HERE</Link></h3>
                </div>
            </div>
        )
    }

}