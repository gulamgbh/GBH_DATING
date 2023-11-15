import React from 'react'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import { ButtonComponents, FormInputModule, FormLabelModule } from '../../global commponents/FormComponents'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { googleSigin, userLogin } from '../../../redux/action/userAuth.action'
import { GoogleLogin } from '@react-oauth/google';
const Login = () => {
    const auth = useSelector(state => state.userAuth);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [number, setNumber] = useState()

    function getInput(e) {
        e.preventDefault();
        const userNumber = {
            number
        }
        dispatch(userLogin(userNumber))
    }
    const handleClick = () => {
        dispatch(googleSigin())
    }
    if (auth.authenticate) {
        setTimeout(() => {
            return navigate("/chetbot");
        }, "3000");
    }
    return (
        <div className="container py-4">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{ borderRadius: "1rem", backgroundColor: "#f8f9fa" }}>
                        <div className="card-body p-5 ">
                            <h3 className="mb-3 text-center">Sign in</h3>
                            {/* {
                                auth.message == "" ? <p className="text-danger fw-bold">{User_Details.error}</p> : <p className="text-success fw-bold" >{User_Details.message}</p>
                            } */}
                            <form onSubmit={getInput}>
                                <div className="form-outline mb-4">
                                    <FormLabelModule cn="form-label" title="Enter mobile number" />
                                    <FormInputModule typ="number" cn="form-control form-control-lg" val={number} onChange={e => setNumber(e.target.value)} />
                                </div>
                                <div className='text-center'>
                                    <ButtonComponents
                                        typ="submit"
                                        cn="btn btn-block fs-5 fw-bold "
                                        btnname="Login"
                                    />
                                </div>
                            </form>
                            <div className='mt-3 text-center'>
                                <p>
                                    New to Gbh Dating?
                                    <Link to="/">
                                        <span> Create an account</span>
                                    </Link>
                                </p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <GoogleButton
                                    type='light'
                                    onClick={handleClick}
                                />
                            </div>
                            {/* <div className='d-flex justify-content-center'>
                                <GoogleLogin
                                    clientId="81334359658-v2656joi94689flu95e0t1denh6fdgft.apps.googleusercontent.com"
                                    onSuccess={credentialResponse => {
                                        console.log(credentialResponse);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login