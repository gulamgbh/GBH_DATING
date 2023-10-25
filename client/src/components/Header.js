import React from "react";
import {BsTranslate} from "react-icons/bs";
import Premiumfetures from "./Primium features";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary p-0 sticky-top" style={{ backgroundColor: 'rgb(25 22 22 / 69%)', zIndex: 1 }}>
        <div class="container-fluid">
          <div className="navbar-logo">
            <Link to="/"> <img src=".\images\official-removebg-preview.png" alt="not " style={{ width: 200, height: 90 }}></img></Link>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menu fs-5 " id="navbarSupportedContent ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item dropend">
                <Link to="/products" className="nav-link dropdown" >
                  Products
                </Link>
                <ul className="dropdown-menu fs-5 fw-bold">
                  <li><Link className="dropdown-item" to='/Premiumfeatures'>Primum Features</Link></li>
                  <li><a className="dropdown-item" href="#">Saftey Tipes</a>
                  <ul style={{listStyle:"none"}}>
                  <li><a className="dropdown-item" href="#">Saftey & Policy</a></li>
                  <li><a className="dropdown-item" href="#">Saftey & Reporting</a></li>
                  <li><a className="dropdown-item" href="#">SubScription Tiers</a></li>
                  </ul></li>
                  
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/learn">Learn</Link>
              </li>
              <li className="nav-item dropend">
                <Link  to="/safety" className="nav-link dropdown"  >
                  Saftey
                </Link>
                <ul className="dropdown-menu fs-5 fw-bold">
                  <li><a className="dropdown-item" href="#">Community Gidellines</a></li>
                  <li><a className="dropdown-item" href="#">Saftey Tipes</a></li>
                  <li><a className="dropdown-item" href="#">Saftey & Policy</a></li>
                  <li><a className="dropdown-item" href="#">Saftey & Reporting</a></li>
                  <li><a className="dropdown-item" href="#">SubScription Tiers</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Support">Support</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/Download">Download</Link>
              </li>
            </ul>
            <div className="col">
              <div className="d-flex float-end text-white mx-4 " role="search">
                <h3 className=" px-4"><span className="fs-4"><BsTranslate/></span> Language</h3>
                <button type="button" className="btn bg-light rounded-pill px-4 px-4 login-btn "><a href="/login" className="text-dark">Log in</a></button>
                {/* <a href="/login" > type="button" className="btn btn-light rounded-pill px-4 login-btn mx-4"<button>Log in</button></a> */}
              </div>
            </div>
</div>
        </div>
      </nav>
    </>
  )
}


/* <div className="navbar-section bg-dark">
  <div className="container-fluid container-sec">
    <div className="row ">
      <div className="col-sm-2">
        <div className="logo text-center ">
          <img src=".\images\official-removebg-preview.png" alt=""></img>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="nav-menu d-flex">
          <NavLink to='/Products' activeStyle>
            Products
          </NavLink>
          <NavLink to='/Learn' activeStyle>
            Learn
          </NavLink>
          <NavLink to='/Saftey' activeStyle>
            Saftey
          </NavLink>
          <NavLink to='/Support' activeStyle>
            Support
          </NavLink>
          <NavLink to='/Download' activeStyle>
            Download
          </NavLink>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="left-login-btn">
          <i></i>
          <h3 className="text-white mt-4"> Language</h3>
          <Login />
        </div>
      </div>
    </div>
    
  </div>
</div> */



export default Header;