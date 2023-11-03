import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './index.css'
import { FormLabelModule, ButtonComponents, FormInputModule } from '../global commponents/FormComponents';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
const Dashboard = () => {
    const [number, setNumber] = useState()


    return (
        <>
            <div className="deshboard-section" style={{ marginTop: '-99px' }} >
                <div className="container-fluid p-0">
                    <div className="bg-image">
                        <div className="creat-btn text-center">
                            <h1 className="text-center start-text ">Start somthing epic.</h1>
                            <Link to="/onboarding">
                                <button className="btn btn-lg btn-gradiant rounded-pill text-light px-4 w-4" style={{ position: 'absolute', top: '63%', right: '41%', width: '250px', }}>Create account</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Dashboard;