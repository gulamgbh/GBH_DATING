import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isPhoneLogin, setPhoneLogin] = useState(false);
    const [phoneValue, setPhoneValue] = useState('');
    const navigate = useNavigate();
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
    };
    const handleSubmit = () => {
        if (isPhoneLogin) {
            const apiUrl = 'YOUR_API_ENDPOINT';
            axios.post(apiUrl, { phone: phoneValue }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => {
                    if (response.status === 200) {
                        console.log('API response:', response.data);
                        navigate('/userDetails');
                    } else {
                        throw new Error('API request failed');
                    }
                })
                .catch((error) => {
                    console.error('API error:', error);
                });
        }
    };
    return (
        <div className="dashboard-section" style={{ marginTop: '-99px' }}>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col">
                        <div className="bg-image">
                            <img src="" alt="" />
                            <div className="create-btn text-center">
                                <h1 className="text-center start-text">Start something epic.</h1>
                                <button
                                    type="button"
                                    className="btn btn-danger btn-lg rounded-pill text-light px-4 w-4"
                                    onClick={openModal}
                                    data-bs-toggle="modal"
                                    data-bs-target="#myModal"
                                    style={{ position: 'absolute', top: '63%', right: '41%', width: '250px' }}
                                >
                                    Create account
                                </button>
                            </div>
                        </div>
                        <div className={`modal fade ${isModalOpen ? 'show' : ''}`} id="myModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <form>
                                <div className="modal-dialog modal-dialog-centered modal-md">
                                    <div className="modal-content mt-4">
                                        <img src=".././img/logo.png" alt="logo" width={100} style={{ margin: "auto" }} />
                                        <div className="modal-header">
                                            <h2 className="modal-title" style={{ marginLeft: "auto" }}>
                                                {isPhoneLogin ? 'Enter Your Mobile Number' : 'Create Account'}
                                            </h2>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal} />
                                        </div>
                                        <div className="modal-body">
                                            {isPhoneLogin ? (
                                                <div className='text-center p-4'>
                                                    <label htmlFor="phone" className='text-secondary bg-transparent fw-bolder p-2'>Phone Number</label><br />
                                                    <input

                                                        type="tel"
                                                        name="phone"
                                                        id="phone"
                                                        className='form-control w-75 ms-5 '
                                                        value={phoneValue}
                                                        onChange={handlePhoneInputChange}
                                                    />
                                                </div>
                                            ) : (
                                                <div className='text-center'>
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
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                                        Submit
                                                    </button>
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
                                        <p className="fw-bold m-4 text-center">Get the app!</p>
                                        <div className="img container-fluid">
                                            <div className="d-inline p-4">
                                                <a href="/"><img src=".././img/App_store.webp" alt="" width="150px" /></a>
                                            </div>
                                            <div className="d-inline p-4">
                                                <a href="/"><img src=".././img/Google play.webp" alt="" width="200px" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
