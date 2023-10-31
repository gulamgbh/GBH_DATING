import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './index.css'
import { FormLabelModule, ButtonComponents, FormInputModule } from '../global commponents/FormComponents';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [mshow, setmShow] = useState(false);
    const handleMClose = () => setmShow(false);
    const handleMShow = () => setmShow(true);
    const [number, setNumber] = useState()

    useEffect(() => {
        if (mshow) {
            handleClose()
        }
    })
    function createAccount() {
        return (
            <Modal show={show} onHide={handleClose} >
                <Modal.Body >
                    <div className='row'>
                        <div className='col-md-10 text-center'>
                            <img src=".\images\logo-transparent.png" width={55} height={55} alt='logo' style={{ marginLeft: 67 }} />
                        </div>
                        <div className='col-md-1'>
                            <Modal.Header closeButton></Modal.Header>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h2>Create Account</h2>
                            <p className='mx-5 fw-900'>By clicking Log In, you agree to our Terms. Learn how to process your data in our Privacy Policy. and Cookie Policy.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col s12 m6 offset-m3 text-center border border-primary border-2 rounded-pill" >
                            <div className="oauth-container btn darken-4 white black-text" style={{ textTransform: "none" }}>
                                <img width="20px" style={{ marginRight: 8 }} alt="Google sign-in"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                <span>Login with Google</span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col s12 m6 offset-m3 text-center border border-dark border-2 rounded-pill" onClick={handleMShow} >
                            <div className="oauth-container btn darken-4 white black-text" style={{ textTransform: "none" }}>
                                Login with phone number
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col s12  text-center" >
                            Trable Logging In?
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }

    function getInput(e) {
        e.preventDefault();
        console.log('niiint',number);
        
    }
    function createAccountWithPhoneNumber() {
        return (

            <Modal show={mshow} onHide={handleMClose} >
                <Modal.Body >
                    <div className='row'>
                        <div className='col-md-10 text-center'>
                            <img src=".\images\logo-transparent.png" width={55} height={55} alt='logo' style={{ marginLeft: 67 }} />
                        </div>
                        <div className='col-md-1'>
                            <Modal.Header closeButton></Modal.Header>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h2>Enter your mobile number</h2>
                        </div>
                    </div>
                    <form onSubmit={getInput}>
                        <div className='row'>
                            <div className='col-md-12 ' style={{paddingLeft:53, fontSize:14}}>
                                {/* <FormLabelModule title="Country" /> */}
                                <FormLabelModule title="Phone number" style={{marginLeft:14}}/>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className="col-md-10 text-center number-reg" >
                                {/* <PhoneInput
                                    placeholder="Enter phone number"
                                    value={number}
                                    onChange={setNumber}
                                    style={{ border: "none" }}
                                    defaultCountry="in"
                                /> */}
                                <FormInputModule typ="number" cn="p-2 border" val={number} onChange={(e)=>setNumber(e.target.value)}/>
                            </div>
                        </div>
                        <div className='row m-2'>
                            <div className="s12 m6 offset-m3 text-center number-reg" >
                                <ButtonComponents btnname="Continue" cn="p-2 border rounded-pill px-5" />
                            </div>
                        </div>

                    </form>
                </Modal.Body>
            </Modal>
        )
    }
    return (
        <>
            <div className="deshboard-section" style={{ marginTop: '-99px' }} >
                <div className="container-fluid p-0">
                    <div className="bg-image">
                        <div className="creat-btn text-center">
                            <h1 className="text-center start-text ">Start somthing epic.</h1>
                            <button onClick={handleShow} className="btn btn-lg btn-gradiant rounded-pill text-light px-4 w-4" style={{ position: 'absolute', top: '63%', right: '41%', width: '250px', }}>Create account</button>
                            {createAccount()}
                            {createAccountWithPhoneNumber()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;