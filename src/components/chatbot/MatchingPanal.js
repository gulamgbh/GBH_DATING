import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BsShield } from 'react-icons/bs';
import { BiGift } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';


const MatchingPanal = (props) => {
  return (
    <>
      <div className='row info-sec py-3'>
        <div className='col-md-5 d-flex justify-content-center px-2'>
          <img src={`http://localhost:8000/public/${props.data.profile.profile}`} className={`rounded mx-auto d-block rounded-pill  profile_img`} alt="..." width={50} height={50} />
          <h5 id="align-info-text">{props.data.profile.fullname}</h5>
        </div>
        <div className='col-md-7 d-flex justify-content-evenly '>
          <p id="align-info-text"><AiOutlineFileSearch size={30} /></p>
          <p id="align-info-text"><BsShield size={30} /></p>
          <p id="align-info-text"><BiGift size={30} /></p>
        </div>
      </div>
      <Link to="/box">
        <div className='row' style={{ margin: '10px 9px', backgroundColor: 'white', paddingTop: 6, border: "2px solid", borderRadius: 12 }}>
          <div className='col-md-2'>
            <img src={`http://localhost:8000/public/1697700143282-442466333vJtjBQnmAh-default-profile.png`} className={`rounded mx-auto d-block rounded-pill  profile_img`} alt="..." width={50} height={50} />
          </div>
          <div className='col-md-10'>
            <div className='row'>
              <div className='col-md-8'>
                <p className='fw-bold mb-0'>Nitin</p>
                <p style={{ fontSize: 14 }}>message</p>
              </div>
              <div className='col-md-4'>
                <p className='mb-0' style={{ fontSize: 12 }}>10:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* <div className="row">
        <ul className="navbar-nav flex-row pl-4 d-flex justify-content-around bg-dark chatbot_nav">
          <li className="nav-item">
            <NavLink className="nav-link " to="/chetbot/matches">Matches</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/chetbot/messages">Messages</NavLink>
          </li>
        </ul>
      </div> */}
      {/* <div className='row' >
        {
          props.child ? props.child : <div><div className="card" style={{ width: "18rem", margin: 34 }}>
            <div className="card-body">
              <h6 className="card-text p-2 fs-5 text-center" >
                You can click matchs to check <span><NavLink to="/chetbot/matches" style={{ textDecoration: 'none' }}>Matches</NavLink></span> people also click on <span><NavLink style={{ textDecoration: 'none' }} to="/chetbot/messages">Messages</NavLink></span> to
                check which people send massage for you.
              </h6>
            </div>
          </div>
            <div className='row justify-content-center'>
              <img src=".\images\uperarrow.png" alt="not " style={{ width: 200, height: 90 }}></img>
            </div>
          </div>
        }

      </div > */}
    </>

  )
}

export default MatchingPanal