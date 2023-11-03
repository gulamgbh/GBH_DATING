import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BsShield } from 'react-icons/bs';
import { BiGift } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';


const MatchingPanal = () => {
  const userInfo = useSelector(state => state.userProfile);
  const userPics = useSelector(state => state.userProfile.profile.pics);
  if (userInfo.loading) {
    return <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  }
  ;

  return (
    <>
      <div className='row info-sec py-3'>
        <div className='col-md-4 d-flex justify-content-center px-2'>
          {
            userPics.map((item) =>
              <img src={`http://localhost:8000/public/${item.img}`} className="rounded mx-auto d-block rounded-pill" alt="..." width={50} height={50} />
            )
          }
          {/* <img src={`http://localhost:8000/public/${profile.img}`} className="rounded mx-auto d-block rounded-pill" alt="..." width={50} height={50} /> */}
          {/* <img src="https://d1.awsstatic.com/aws-key-pages/homepage-key-pages/customer-stories-logo/BMW.31714f523d4004c87fb0f4e59f4a1a747cd3ef76.jpg" className="rounded mx-auto d-block rounded-pill" alt="..." width={50} height={50} /> */}
          <h5 id="align-info-text">{userInfo.profile.fullname}</h5>
        </div>
        <div className='col-md-8 d-flex justify-content-evenly '>
          <p id="align-info-text"><AiOutlineFileSearch size={30} /></p>
          <p id="align-info-text"><BsShield size={30} /></p>
          <p id="align-info-text"><BiGift size={30} /></p>
        </div>
      </div>
      <div className="row">
        <ul className="navbar-nav flex-row pl-4 d-flex justify-content-around bg-dark">
          <li className="nav-item">
            <NavLink className="nav-link " to="/matches">Matches</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/messages">Messages</NavLink>
          </li>
        </ul>
      </div>
    </>

  )
}

export default MatchingPanal