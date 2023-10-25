import { FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Slider from "./slider";
const Footer = () => {
    return (
        <>
        <section className="slider-ft-section">
         <Slider/>
      
        </section>
            <footer className="section bg-footer mt-4" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className>
                                <h6 className="footer-heading text-uppercase text-white">Information</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <span className="fw-bold fs-4">Ligal</span>
                                    <li><a href>Privacy</a></li>
                                    <li><a href>Terms</a></li>
                                    <li><a href>Cookie Policy</a></li>
                                    <li><a href>Intellectual Property</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className>
                                <h6 className="footer-heading text-uppercase text-white">Ressources</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <span className="fw-bold fs-4">Carrers</span>
                                    <li><a href>Carrers Portal </a></li>
                                    <li><a href>Tech Blog</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className>
                                <h6 className="footer-heading text-uppercase text-white">Help</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <span className="fw-bold fs-4">Social</span>
                                    <ul className="list-inline d-flex gap-2 fs-3" >
                                        <li><a href> <FaTiktok /> </a></li>
                                        <li><a href><FaInstagram /></a></li>
                                        <li><a href> <FaYoutube /></a></li>
                                        <li><a href><FaTwitter /> </a></li>
                                        <li><a href><FaFacebook /></a></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className>
                                <h6 className="footer-heading text-uppercase text-white">Ressources</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <li><span>FAG</span></li>
                                    <li><a href>Destination </a></li>
                                    <li><a href>Press Room</a></li>
                                    <li><a href>Contact</a></li>
                                    <li><a href>PromoCode</a></li>
                                </ul>

                                {/* <div className="mt-5">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a href="#"><i className="fab facebook footer-social-icon fa-facebook-f" /></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab twitter footer-social-icon fa-twitter" /></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab google footer-social-icon fa-google" /></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab apple footer-social-icon fa-apple" /></a></li>
                                    </ul>

                            </div> */}
                            </div>

                        </div>
                    </div>
                    <div style={{ borderBottom: '1px solid #80686812', marginTop: '30px', boxShadow: '1px 1px' }}>

                    </div>
                    {/* <div className="text-center mt-5">
                        <p className="footer-alt mb-0 f-14">2019 © Anup, All Rights Reserved</p>
                    </div> */}
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
                            <div className="Fl(start)--ml My(8px) D(ib) W(100%)--s hover-list">
                                <a
                                    className="C($c-ds-text-brand-normal):h C($c-ds-text-brand-normal):a C($c-ds-text-secondary) focus-outline-style"
                                    href="/faq"
                                    itemProp="url"
                                >
                                    FAQ
                                </a>
                                <span className="D(ib) Mx(8px) C($c-ds-text-secondary)"> / </span>
                                <a
                                    className="C($c-ds-text-brand-normal):h C($c-ds-text-brand-normal):a C($c-ds-text-secondary) focus-outline-style"
                                    href="https://policies.tinder.com/safety?lang=en"
                                    itemProp="url"
                                >
                                    Safety Tips
                                </a>
                                <span className="D(ib) Mx(8px) C($c-ds-text-secondary)"> / </span>
                                <a
                                    className="C($c-ds-text-brand-normal):h C($c-ds-text-brand-normal):a C($c-ds-text-secondary) focus-outline-style"
                                    href="https://policies.tinder.com/terms?lang=en"
                                    itemProp="url"
                                >
                                    Terms
                                </a>
                                <span className="D(ib) Mx(8px) C($c-ds-text-secondary)"> / </span>
                                <a
                                    className="C($c-ds-text-brand-normal):h C($c-ds-text-brand-normal):a C($c-ds-text-secondary) focus-outline-style"
                                    href="https://policies.tinder.com/cookie-policy?lang=en"
                                    itemProp="url"
                                >
                                    Cookie Policy
                                </a>
                                <span className="D(ib) Mx(8px) C($c-ds-text-secondary)"> / </span>
                                    <a href="">Privacy Setting</a>
                            </div>
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
export default Footer;