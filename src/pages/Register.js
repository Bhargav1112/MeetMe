import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../Firebase/auth';

const Register = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [userName, setUserName] = useState()
    const navigate = useNavigate();
    const SignUp = () => {
        console.log('data', email, password, userName);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                const ref = setDoc(doc(db, "users", userCredential.user.uid), {
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    password: password,
                    userName: userName
                });
                if (ref) {
                    localStorage.setItem("userInfo", JSON.stringify(user))
                    toast.success('Register Successfully')
                    navigate('/chat')
                }
            })
            .catch((error) => {
                toast.error('All Field Required !')
            });
    }
    return (
        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center mb-4">
                            <a href="index.html" className="auth-logo mb-5 d-block">
                                <img src="assets/images/logo-dark.png" alt height={30} className="logo logo-dark" />
                                <img src="assets/images/logo-light.png" alt height={30} className="logo logo-light" />
                            </a>
                            <h4>Sign up</h4>
                            <p className="text-muted mb-4">Get your Chatvia account now.</p>
                        </div>
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="p-3">
                                    <form method='post'>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <div className="input-group bg-soft-light rounded-3  mb-3">
                                                <span className="input-group-text text-muted" id="basic-addon5">
                                                    <i className="ri-mail-line" />
                                                </span>
                                                <input type="email" className="form-control form-control-lg bg-soft-light border-light" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon5" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            <div className="input-group bg-soft-light mb-3 rounded-3">
                                                <span className="input-group-text border-light text-muted" id="basic-addon6">
                                                    <i className="ri-user-2-line" />
                                                </span>
                                                <input type="text" className="form-control form-control-lg bg-soft-light border-light" onChange={(e) => setUserName(e.target.value)} placeholder="Enter Username" aria-label="Enter Username" aria-describedby="basic-addon6" />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Password</label>
                                            <div className="input-group bg-soft-light mb-3 rounded-3">
                                                <span className="input-group-text border-light text-muted" id="basic-addon7">
                                                    <i className="ri-lock-2-line" />
                                                </span>
                                                <input type="password" className="form-control form-control-lg bg-soft-light border-light" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon7" />
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" onClick={SignUp} type="button">Sign up</button>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <p className="text-muted mb-0">By registering you agree to the MeetMe <span className="text-primary">Terms of Use</span></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <p>Already have an account ? <Link to='/'>SignIn Now</Link> </p>
                            {/* <p>©  Chatvia. Crafted with <i className="mdi mdi-heart text-danger" /> by Themesbrand</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register