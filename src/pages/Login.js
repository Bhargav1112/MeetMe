import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/auth'
import DarkLogo from '../images/logo-dark.png'
import LightLogo from '../images/logo-light.png'
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const Login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem("userInfo", JSON.stringify(user))
                navigate('/chat')
            })
            .catch((error) => {
                toast.error('Please Enter valid Credencial !')
            });
    }

    return (
        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center mb-4">
                            <a href="index.html" className="auth-logo mb-5 d-block">
                                <img src={DarkLogo} alt height={30} className="logo logo-dark" />
                                <img src={LightLogo} alt height={30} className="logo logo-light" />
                            </a>
                            <h4>Sign in</h4>
                            <p className="text-muted mb-4">Sign in to continue to Chatvia.</p>
                        </div>
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="p-3">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <div className="input-group bg-soft-light rounded-3  mb-3">
                                                <span className="input-group-text text-muted" id="basic-addon5">
                                                    <i className="ri-mail-line" />
                                                </span>
                                                <input type="email" className="form-control form-control-lg bg-soft-light border-light" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon5" />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="float-end">
                                                <a href="auth-recoverpw.html" className="text-muted font-size-13">Forgot password?</a>
                                            </div>
                                            <label className="form-label">Password</label>
                                            <div className="input-group mb-3 bg-soft-light rounded-3">
                                                <span className="input-group-text text-muted" id="basic-addon4">
                                                    <i className="ri-lock-2-line" />
                                                </span>
                                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg border-light bg-soft-light" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon4" />
                                            </div>
                                        </div>
                                        <div className="form-check mb-4">
                                            <input type="checkbox" className="form-check-input" id="remember-check" />
                                            <label className="form-check-label" htmlFor="remember-check">Remember me</label>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" onClick={Login} type="button">Sign in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <p>Don't have an account ? <Link to='/register'>SignUp Now</Link> </p>
                            {/* <p>©  Chatvia. Crafted with <i className="mdi mdi-heart text-danger" /> by Themesbrand</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login