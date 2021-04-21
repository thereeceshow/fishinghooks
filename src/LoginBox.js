import React from 'react'
import fish from './fish.svg'

function LoginBox() {

    

    return (

        <div className="LoginBox text-center" >
        
                <main className="form-signin">
                <div className="row d-flex justify-content-center">
                <div className="col-3 mt-5">
                    <form>
                        <img className="mb-4" src={fish} alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div >
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                    </form>
                    </div>
                    </div>
                </main>



        </div>


    );
}

export default LoginBox;