import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
export default class Login extends React.Component {
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
                    <h1>Sign in</h1>
                    <input placeholder="Email address" type="email" className="entry"></input>
                    <br></br>
                    <input placeholder="Password" type="password" className="entry"></input>
                    <br></br>
                    <button className="loginbtn"><Link to="/emotion">Login</Link></button>
                </div>
                <div>
                    <h3>Don’t have an account? Sign up <Link to="/signup">HERE</Link></h3>
                </div>
            </div>
        )
    }

}