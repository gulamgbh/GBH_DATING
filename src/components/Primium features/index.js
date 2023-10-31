import React from 'react'
import { AiFillStar } from 'react-icons/ai'


const Premiumfetures = () => {
    return (
        <>
            <div className="premium-section">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-sm-4 mx-2 text-center">
                            <b className='fs-1 fw-bold text-info'>Take It Up A Notch </b>
                            <p className='fs-4 text-dark my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos nostrum labore consequatur adipisci eum ad, dignissimos corrupti eius dolores!</p>
                            <button className='btn btn-danger text-light rounded-pill px-4 py-2 fw-bold fs-4 my-5'><link rel="stylesheet" href="" />Join Now</button>
                        </div>
                        <div className="col-sm-6 hover-effect-card">
                            <div className="wrapper">
                                <h1 className='text-danger'>Parallax Flipping Cards</h1>
                                <div className="cols">
                                    <div className="col" ontouchstart="this.classList.toggle('hover');">
                                        <div className="container">
                                            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/506/506/)' }}>
                                                <div className="inner">
                                                    <p className='text-info'>Tinder</p>
                                                    <span className='text-info'>Lorem ipsum</span>
                                                </div>
                                            </div>
                                            <div className="back">
                                                <div className="inner">
                                                    <p className='text-danger'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col" ontouchstart="this.classList.toggle('hover');">
                                        <div className="container">
                                            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/508/508/)' }}>
                                                <div className="inner">
                                                    <p className='text-info'>Sohanidd</p>
                                                    <span className='text-info'>Lorem ipsum</span>
                                                </div>
                                            </div>
                                            <div className="back">
                                                <div className="inner">
                                                    <p className='text-danger'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stand-out-section py-5" style={{background:'#f7f8f957'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="left-text-content">
                                <div className=' mt-5 mb-3 '>
                                    <h2 className=' bg-info fs-1 text-light mt-3'>< AiFillStar/></h2>
                                </div>
                                <b className='fs-2 text-warning'>Stand Out With A Super Like™</b>
                                <p className='fs-5 text-dark'>Increase your chances of matching by 3x and have convos that last 70% longer. All members get 1 free Super Like™ a month.</p>
                            </div>

                        </div>
                        <div className="col-sm-6">
                            <div className="right-data-image mt-5" style={{margin:'0px auto',textAlign:'center'}}>
                                <img src="..\images\primiumimg1.PNG" alt="not img" style={{height:'550px',width:'350px'}} ></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )


}

export default Premiumfetures;