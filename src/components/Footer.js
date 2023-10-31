import { FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Slider from "./slider";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <section className="slider-ft-section">
                <Slider />
            </section>
            <footer className="section bg-footer mt-4" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className>
                                <h6 className="footer-heading text-uppercase text-white">Information</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <span className="fw-bold fs-4">Ligal</span>
                                    <li><NavLink to="/">Privacy</NavLink></li>
                                    <li><NavLink to="/">Terms</NavLink></li>
                                    <li><NavLink to="/">Cookie Policy</NavLink></li>
                                    <li><NavLink to="/">Intellectual Property</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className>
                                <h6 className="footer-heading text-uppercase text-white">Ressources</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <span className="fw-bold fs-4">Carrers</span>
                                    <li><NavLink to="/">Careers Portal</NavLink></li>
                                    <li><NavLink to="/">Tech Blog</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className>
                                <h6 className="footer-heading text-uppercase text-white">Help</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <span className="fw-bold fs-4">Social</span>
                                    <ul className="list-inline d-flex gap-2 fs-3" >
                                        <li><NavLink to="/"><FaTiktok /></NavLink></li>
                                        <li><NavLink to="/"><FaInstagram /></NavLink></li>
                                        <li><NavLink to="/"><FaYoutube /></NavLink></li>
                                        <li><NavLink to="/"><FaTwitter /></NavLink></li>
                                        <li><NavLink to="/"><FaFacebook /></NavLink></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h6 className="footer-heading text-uppercase text-white">Ressources</h6>
                            <ul className="list-unstyled footer-link mt-4">
                                <li><span>FAG</span></li>
                                <li><NavLink to="/">Destination</NavLink></li>
                                <li><NavLink to="/">Press Room</NavLink></li>
                                <li><NavLink to="/">Contact</NavLink></li>
                                <li><NavLink to="/">PromoCode</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ borderBottom: '1px solid #80686812', marginTop: '30px', boxShadow: '1px 1px' }}>
                    </div>
                    <section className="google-logo d-flex mt-4 gap-3 mb-4">
                        <h2 className="mt-3">Get the app!</h2>
                        <img
                            loading="lazy"
                            alt=""
                            className='img-google-1 mt-3'
                            src="https://tinder.com/static/build/d256a5b510a685030be375c63a9010e9.webp"
                        ></img>
                        <div>
                            <img
                                loading="lazy"
                                alt=""
                                className="img-google-2 mt-1"
                                src="https://tinder.com/static/build/03aed264f8539c570e9bc80ba6b60d92.webp"
                            ></img>
                        </div>
                    </section>

                    <section className="Cntv(a) My(0)">
                        <p className="Typs(body-3-regular) C($c-ds-text-secondary) Mt(0) Mb(12px)">
                            Single people, listen up: If you’re looking for love, want to start
                            dating, or just keep it casual, you need to be on Tinder. With over 55
                            billion matches made, it’s the place to be to meet your next best match.
                            Let’s be real, the dating landscape looks very different today, as most
                            people are meeting online. With Tinder, the world’s most popular free
                            dating app, you have millions of other single people at your fingertips
                            and they’re all ready to meet someone like you. Whether you’re straight
                            or in the LGBTQIA community, Tinder’s here to bring you all the sparks.
                        </p>
                        <p className="Typs(body-3-regular) C($c-ds-text-secondary) Mt(0) Mb(12px)">
                            There really is something for everyone on Tinder. Want to get into a
                            relationship? You got it. Trying to find some new friends? Say no more.
                            New kid on campus and looking to make the most of your college
                            experience? Tinder U’s got you covered. Tinder isn’t your average dating
                            site — it’s the most diverse dating app, where adults of all backgrounds
                            and experiences are invited to make connections, memories, and
                            everything in between.
                        </p>
                    </section>
                    <div style={{ borderBottom: '1px solid #80686812', marginTop: '30px', boxShadow: '1px 1px' }}>

                    </div>
                    <section className=" mt-4">
                        <div className="fotter-bottom-list-menu">
                            <a>FAQ</a>
                            <span className="D(ib) Mx(8px) C($c-ds-text-secondary)"> / </span>
                            <NavLink to="/login">Login</NavLink>
                            <span className="D(ib) Mx(8px) C($c-ds-text-secondary)"> / </span>
                            <a>Terms</a>
                            <span className="D(ib) Mx(8px) C($c-ds-text-secondary)"> / </span>
                            <a>Cookie Policy</a>
                            <span className="D(ib) Mx(8px) C($c-ds-text-secondary)"> / </span>
                            <NavLink to="/">Privacy Setting</NavLink>
                            <div className="Fl(end)--ml My(8px) d-flext float-end">
                                © 2023 Match Group, LLC, All Rights Reserved.
                            </div>
                        </div>
                    </section>
                </div>
            </footer>

        </>
    )

}
export default Footer