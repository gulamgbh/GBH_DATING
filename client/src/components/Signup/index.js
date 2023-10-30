import React, { useState } from 'react';

const Signup = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isPhoneLogin, setPhoneLogin] = useState(false);
    const [phoneValue, setPhoneValue] = useState('');

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setPhoneLogin(false);
    };

    const openPhoneLogin = () => {
        setPhoneLogin(true);
    };

    const handlePhoneInputChange = (e) => {
        setPhoneValue(e.target.value);
        console.log(setPhoneValue);
    };

    const handleSubmit = () => {
        if (isPhoneLogin) {
            fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone: phoneValue }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('API request failed');
                    }
                })
                .then((data) => {
                    console.log('API response:', data);
                    console.log(data);
                })
                .catch((error) => {
                    console.error('API error:', error);
                });
        }
    };
                                            
    return (
        <div className="container">
            <button
                type="button"
                className="btn btn-info btn-lg"
                onClick={openModal}
                data-bs-toggle="modal"
                data-bs-target="#myModal"
            >
                Open Large Modal
            </button>
            <div className={`modal fade ${isModalOpen ? 'show' : ''}`} id="myModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <form>
                    <div className="modal-dialog modal-dialog-centered modal-md">
                        <div className="modal-content mt-4">
                            <img src=".././img/logo.png" alt="logo" width={100} style={{ margin: "auto" }} />
                            <div className="modal-header">
                                <h2 className="modal-title" style={{ marginLeft: "auto" }} id="exampleModalLabel">
                                    {isPhoneLogin ? 'Enter Your Mobile Number' : 'Create Account'}
                                </h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal} />
                            </div>
                            <div className="modal-body">
                                {isPhoneLogin ? (
                                    <div>
                                        <label htmlFor="phone" className='text-secondary bg-transparent fw-bolder'>Phone Number</label><br />
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            className='form-control'
                                            value={phoneValue}
                                            onChange={handlePhoneInputChange}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <p>
                                            By clicking Log in, you agree to our <a href="/terms">Terms</a>. Learn <br />
                                            how we process your data in our <a href="/privacy policy">Privacy Policy</a> and <br />
                                            <a href="/cookie policy">Cookie Policy</a>
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="text-center">
                                {isPhoneLogin ? (
                                    <div className='mx-auto fw-bolder w-75'>
                                       <button>Submit</button>
                                    </div>
                                ) : (
                                    <button className="btn btn-primary rounded-pill fs-5 m-2 text-white fw-bolder" onClick={openPhoneLogin}>
                                        Log in with a phone number
                                    </button>
                                )}
                            </div>
                            <div className='text-center mt-2'>
                                <a href="/Trouble Logging in">Trouble Logging in</a>
                            </div>
                            <p className="fw-bold m-4">Get the app!</p>
                            <div className="img container-fluid">
                                <div className="d-inline p-4">
                                    <a href=""><img src=".././img/App_store.webp" alt="" width="150px" /></a>
                                </div>
                                <div className="d-inline p-4">
                                    <a href=""><img src=".././img/Google play.webp" alt="" width="200px" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
