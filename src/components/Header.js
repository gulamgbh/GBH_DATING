import React from "react";
import { BsTranslate } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { ButtonComponents } from "./global commponents/FormComponents";
import { signout } from "../redux/action/userAuth.action";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const auth = useSelector(state => state.userAuth);
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(signout())
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 sticky-top" style={{ backgroundColor: 'rgb(25 22 22 / 69%)', zIndex: 1 }}>
        <div className="container-fluid">
          <div className="navbar-logo">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            > <img src=".\images\DATING-APP-LOGO-ORIGINAL.png" alt="not " style={{ width: 200, height: 90 }}></img></NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menu fs-5 " id="navbarSupportedContent ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item dropend">
                <NavLink to="/products" className="nav-link dropdown" >
                  Products
                </NavLink>
                <ul className="dropdown-menu fs-5 fw-bold">
                  <li><NavLink className="dropdown-item" to='/Premiumfeatures'>Primum Features</NavLink></li>
                  <li>
                    <NavLink className="dropdown-item" to="#">Saftey Tipes</NavLink>
                    <ul style={{ listStyle: "none" }}>
                      <li><NavLink className="dropdown-item" to="#">Saftey & Policy</NavLink></li>
                      <li><NavLink className="dropdown-item" to="#">Saftey & Reporting</NavLink></li>
                      <li><NavLink className="dropdown-item" to="#">SubScription Tiers</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/learn">Learn</NavLink>
              </li>
              <li className="nav-item dropend">
                <NavLink to="/safety" className="nav-link dropdown"  >
                  Saftey
                </NavLink>
                <ul className="dropdown-menu fs-5 fw-bold">
                  <li><NavLink className="dropdown-item" to="#">Community Gidellines</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Saftey Tipes</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Saftey & Policy</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Saftey & Reporting</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">SubScription Tiers</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/support">Support</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/download">Download</NavLink>
              </li>
            </ul>
            <div className="col">
              <div className="d-flex float-end text-white ">
                <h5 className=" px-4"><span className="fs-4"><BsTranslate /></span> Language</h5>

                {
                  auth.authenticate ? <ButtonComponents
                    typ="button"
                    cn="btn btn-block fs-5 fw-bold "
                    btnname="Logout"
                    onClick={logout}
                  /> : <NavLink className="nav-link" to="login">
                    <ButtonComponents
                      typ="button"
                      cn="btn btn-block fs-5 fw-bold "
                      btnname="Login"
                    />
                  </NavLink>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}


export default Header;