//import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'; // <Link to={`/url/${i}}> instead of <a href>
// import React from 'react'
import React, { useState, useCallback } from 'react';
import fish from './fish.svg'
import axios from "axios";

const Signup = (props) => {
    const [newSignUp, setNewSignUp] = useState({})

    function handleSubmit(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/auth/register',
            data: newSignUp
        })
            .then(function(response) {
                console.log(response)
                props.saveToken(response.data.data.token);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    const callbackHelper = e => {
        // console.log('in callback helper')
        return setNewSignUp(previousState => ({ ...previousState, [e.target.name]: e.target.value }), [])
    }

    const handleChange = useCallback(callbackHelper);
    // function handleChange() {
    //     console.log('changing');
    // }

    return (

        <div className="LoginBox text-center" >

            <main className="form-signin">
                <div className="row d-flex justify-content-center">
                    <div className="col-3 mt-5">
                        <form
                            onSubmit={handleSubmit}>
                            <img className="mb-4" src={fish} alt="" width="72" height="57" />
                            <h1 className="h3 mb-3 fw-normal">Sign Up for Free</h1>

                            <div className="form-floating">
                                <input
                                    value={newSignUp.name}
                                    name='name'
                                    type="text"
                                    className="form-control"
                                    id="floatingName"
                                    placeholder="Billy Bassman"
                                    onChange={handleChange} />
                                <label htmlFor="floatingName">Name</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    value={newSignUp.email}
                                    name='email'
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={handleChange} />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    value={newSignUp.password}
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
                                Sign Up
                            </button>
                            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                        </form>
                    </div>
                </div>
            </main>



        </div>


    );
}


export default Signup;
