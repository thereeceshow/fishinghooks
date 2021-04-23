import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

export default function Nav(props) {
    let history = useHistory()

    const logOut = () => {

        axios({
            method: 'get',
            url: 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/auth/logout',
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        })
            .then(function(response) {
                props.deleteToken();
                history.push('/')
            })
            .catch(function(error) {
                console.log(error);
            });
}

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand text-right">Ian's Fish Shack</a>
                <span className="d-flex">
                    {props.token.length == 0 ? <>
                        <Link to="/login" className="btn btn-outline-primary">Login</Link>
                        <Link to="/signup" className="btn btn-outline-primary">Sign Up</Link>
                    </> :
                        <button className="btn btn-outline-primary" onClick={logOut}>Log Out</button>}
                </span>
            </div>
        </nav>
    )
}
