//import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'; // <Link to={`/url/${i}}> instead of <a href>
// import React from 'react'
import React, { useState, useCallback } from 'react';
import {useHistory} from 'react-router-dom';
import fish from './fish.svg'
import axios from "axios";

const Login = (props) => {
    const [newLogin, setNewLogin] = useState({})
    let history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/oauth/token',
            data: {
            grant_type: "password",
            client_id: "93361012-98b9-4a86-9d63-8c2bc0437acb",
            client_secret: "SiDwGvf7JPrjRQkdSu1gIFqAO7UOGqVxMhDEaor7",
            username: newLogin.username,
            password: newLogin.password
            }
        })
            .then(function(response) {
                // console.log(response)
                props.saveToken(response.data.access_token);
                history.push('/dash')
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    const callbackHelper = e => {
        return setNewLogin(previousState => ({ ...previousState, [e.target.name]: e.target.value }), [])
    }

    const handleChange = useCallback(callbackHelper);

    return (

        <div className="LoginBox text-center" >

            <main className="form-signin">
                <div className="row d-flex justify-content-center">
                    <div className="col-3 mt-5">
                        <form
                            onSubmit={handleSubmit}>
                            <img className="mb-4" src={fish} alt="" width="72" height="57" />
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                            <div className="form-floating">
                                <input
                                    value={newLogin.username}
                                    name='username'
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={handleChange} />
                                <label htmlFor="floatingInput">Username (Email address)</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    value={newLogin.password}
                                    name='password'
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    onChange={handleChange} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                            </div>
                            <button
                                className="w-100 btn btn-lg btn-primary"
                                type="submit">
                                Sign In
                            </button>
                            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                        </form>
                    </div>
                </div>
            </main>



        </div>


    );
}


export default Login;
