import { useState } from 'react';

const OnBoarding = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        email_address: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: "man",
        gender_interest: "woman",
        url: "",
        about: "",
        matches: [],
    });

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="onboarding">
            <h2 className='text-center fw-bold '>Create Account</h2>
            <form>
                <section>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        type='text'
                        name="first_name"
                        placeholder="First Name"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                    <label htmlFor="email_address">Email Address</label>
                    <input
                        id="email_address"
                        type='email'
                        name="email_address"
                        placeholder="Email Address"
                        required={true}
                        value={formData.email_address}
                        onChange={handleChange}
                    />
                    <label>Birthday</label>
                    <div className="multiple-input-container">
                        <input
                            id="dob_day"
                            type="number" // Change type to "number"
                            name="dob_day"
                            placeholder="DD"
                            required={true}
                            value={formData.dob_day}
                            onChange={handleChange}
                        />
                        <input
                            id="dob_month"
                            type="number" // Change type to "number"
                            name="dob_month"
                            placeholder="MM"
                            required={true}
                            value={formData.dob_month}
                            onChange={handleChange}
                        />
                        <input
                            id="dob_year"
                            type="number" // Change type to "number"
                            name="dob_year"
                            placeholder="YYYY"
                            required={true}
                            value={formData.dob_year}
                            onChange={handleChange}
                        />
                    </div>

                    <label>Gender</label>
                    <div className="multiple-input-container">
                        <input
                            id="man-gender-identity"
                            type="radio"
                            name="gender_identity"
                            value="man"
                            onChange={handleChange}
                            checked={formData.gender_identity === "man"}
                        />
                        <label htmlFor="man-gender-identity">Man</label>
                        <input
                            id="woman-gender-identity"
                            type="radio"
                            name="gender_identity"
                            value="woman"
                            onChange={handleChange}
                            checked={formData.gender_identity === "woman"}
                        />
                        <label htmlFor="woman-gender-identity">Woman</label>
                        <input
                            id="more-gender-identity"
                            type="radio"
                            name="gender_identity"
                            value="more"
                            onChange={handleChange}
                            checked={formData.gender_identity === "more"}
                        />
                        <label htmlFor="more-gender-identity">More</label>
                    </div>
                    <label htmlFor="show-gender">
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={formData.show_gender}
                        />&nbsp;&nbsp;Show Gender on my Profile</label>

                    <label>Show Me</label>
                    <div className="multiple-input-container">
                        <input
                            id="man-gender-interest"
                            type="radio"
                            name="gender_interest"
                            value="man"
                            onChange={handleChange}
                            checked={formData.gender_interest === "man"}
                        />
                        <label htmlFor="man-gender-interest">Man</label>
                        <input
                            id="woman-gender-interest"
                            type="radio"
                            name="gender_interest"
                            value="woman"
                            onChange={handleChange}
                            checked={formData.gender_interest === "woman"}
                        />
                        <label htmlFor="woman-gender-interest">Woman</label>
                        <input
                            id="everyone-gender-interest"
                            type="radio"
                            name="gender_interest"
                            value="everyone"
                            onChange={handleChange}
                            checked={formData.gender_interest === "everyone"}
                        />
                        <label htmlFor="everyone-gender-interest">Everyone</label>
                    </div>
                    <hr />
                    <label htmlFor="about">About me</label>
                    <input
                        id="about"
                        type="text"
                        name="about"
                        required={true}
                        placeholder="I like long walks..."
                        value={formData.about}
                        onChange={handleChange}
                    />
                    <input type="submit" />
                </section>
                <section>
                    <label htmlFor="Profile photo" className='fw-bolder mt-2'>Profile photo</label>
                    <div className="multiple-input-container">
                        <ul className="Py(8px) Px(4px) M(0) Pos(r) W(100%) Ov(h) Ovy(s)--xs" style={{ height: '310.013px', padding: '8px 4px' }}>
                            <li className="Pb(8px) Px(4px) Pos(a) List(n) Bdrs(8px)" style={{ width: '109.333px', height: '146.507px', left: 4, top: 8 }}>
                                <div className="Pos(r) H(100%) C($c-ds-text-primary-overlay)">
                                    <span className="Cur(p) focus-button-style" tabIndex={0} role="button" >
                                        <div className="StretchedBox">
                                            <div className="StretchedBox Ov(h) Bgc($c-ds-background-tertiary) Bdrs(8px) focus-button-style Bdw(4px) Bds(da) Bdc($c-ds-border-secondary) Cur(p)" />
                                            <div className="Pos(a) B(0) End(0) Bdrs(50%) Translate(25%,25%) M(2px)" style={{ opacity: 1 }}>
                                                <button type="button" className="button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Ell Bdrs(50%) P(0) Fw($semibold) focus-button-style Pos(r) Sq(28px) Va(b) Bd focus-button-style C($c-ds-icon-icon-button-primary) Bdc($c-ds-border-overlay) Bgi($g-ds-background-button-primary)" draggable="false">
                                                    <span className="Pos(r) Z(1) Expand CenterAlign" style={{ backgroundColor: "crimson" }}>
                                                        <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px" className="Sq(16px)">
                                                            <path d="M12 0C10.8954 0 10 0.89543 10 2V10H2C0.895431 10 0 10.8954 0 12C0 13.1046 0.895431 14 2 14H10V22C10 23.1046 10.8954 24 12 24C13.1046 24 14 23.1046 14 22V14H22C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10H14V2C14 0.895431 13.1046 0 12 0Z" />
                                                        </svg>
                                                        <span className="Hidden"><span>Add media</span><span>1/6</span></span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </li>
                            <div>
                                <li className="Pb(8px) Px(4px) Pos(a) List(n) Bdrs(8px)" style={{ left: '113.333px', top: 8, width: '109.333px', height: '146.507px' }}>
                                    <div className="Pos(r) H(100%) C($c-ds-text-primary-overlay)">
                                        <span className="Cur(p) focus-button-style" tabIndex={0} role="button">
                                            <div className="StretchedBox">
                                                <div className="StretchedBox Ov(h) Bgc($c-ds-background-tertiary) Bdrs(8px) focus-button-style Bdw(4px) Bds(da) Bdc($c-ds-border-secondary) Cur(p)" />
                                                <div className="Pos(a) B(0) End(0) Bdrs(50%) Translate(25%,25%) M(2px)" style={{ opacity: 1 }}>
                                                    <button type="button" className="button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Ell Bdrs(50%) P(0) Fw($semibold) focus-button-style Pos(r) Sq(28px) Va(b) Bd focus-button-style C($c-ds-icon-icon-button-primary) Bdc($c-ds-border-overlay) Bgi($g-ds-background-button-primary)" draggable="false">
                                                        <span className="Pos(r) Z(1) Expand CenterAlign" style={{ backgroundColor: "crimson" }}>
                                                            <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px" className="Sq(16px)">
                                                                <path d="M12 0C10.8954 0 10 0.89543 10 2V10H2C0.895431 10 0 10.8954 0 12C0 13.1046 0.895431 14 2 14H10V22C10 23.1046 10.8954 24 12 24C13.1046 24 14 23.1046 14 22V14H22C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10H14V2C14 0.895431 13.1046 0 12 0Z" />
                                                            </svg>
                                                            <span className="Hidden">
                                                                <span>Add media</span>
                                                                <span>2/6</span>
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                                <li className="Pb(8px) Px(4px) Pos(a) List(n) Bdrs(8px)" style={{ left: '222.667px', top: 8, width: '109.333px', height: '146.507px' }}>
                                    <div className="Pos(r) H(100%) C($c-ds-text-primary-overlay)">
                                        <span className="Cur(p) focus-button-style" tabIndex={0} role="button">
                                            <div className="StretchedBox">
                                                <div className="StretchedBox Ov(h) Bgc($c-ds-background-tertiary) Bdrs(8px) focus-button-style Bdw(4px) Bds(da) Bdc($c-ds-border-secondary) Cur(p)" />
                                                <div className="Pos(a) B(0) End(0) Bdrs(50%) Translate(25%,25%) M(2px)" style={{ opacity: 1 }}>
                                                    <button type="button" className="button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Ell Bdrs(50%) P(0) Fw($semibold) focus-button-style Pos(r) Sq(28px) Va(b) Bd focus-button-style C($c-ds-icon-icon-button-primary) Bdc($c-ds-border-overlay) Bgi($g-ds-background-button-primary)" draggable="false">
                                                        <span className="Pos(r) Z(1) Expand CenterAlign" style={{ backgroundColor: "crimson" }}>
                                                            <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px" className="Sq(16px)">
                                                                <path d="M12 0C10.8954 0 10 0.89543 10 2V10H2C0.895431 10 0 10.8954 0 12C0 13.1046 0.895431 14 2 14H10V22C10 23.1046 10.8954 24 12 24C13.1046 24 14 23.1046 14 22V14H22C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10H14V2C14 0.895431 13.1046 0 12 0Z" />
                                                            </svg>
                                                            <span className="Hidden">
                                                                <span>Add media</span>
                                                                <span>3/6</span>
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                                <li className="Pb(8px) Px(4px) Pos(a) List(n) Bdrs(8px)" style={{ left: 4, top: '154.507px', width: '109.333px', height: '146.507px' }}>
                                    <div className="Pos(r) H(100%) C($c-ds-text-primary-overlay)">
                                        <span className="Cur(p) focus-button-style" tabIndex={0} role="button">
                                            <div className="StretchedBox">
                                                <div className="StretchedBox Ov(h) Bgc($c-ds-background-tertiary) Bdrs(8px) focus-button-style Bdw(4px) Bds(da) Bdc($c-ds-border-secondary) Cur(p)" />
                                                <div className="Pos(a) B(0) End(0) Bdrs(50%) Translate(25%,25%) M(2px)" style={{ opacity: 1 }}>
                                                    <button type="button" className="button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Ell Bdrs(50%) P(0) Fw($semibold) focus-button-style Pos(r) Sq(28px) Va(b) Bd focus-button-style C($c-ds-icon-icon-button-primary) Bdc($c-ds-border-overlay) Bgi($g-ds-background-button-primary)" draggable="false">
                                                        <span className="Pos(r) Z(1) Expand CenterAlign" style={{ backgroundColor: "crimson" }}>
                                                            <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px" className="Sq(16px)">
                                                                <path d="M12 0C10.8954 0 10 0.89543 10 2V10H2C0.895431 10 0 10.8954 0 12C0 13.1046 0.895431 14 2 14H10V22C10 23.1046 10.8954 24 12 24C13.1046 24 14 23.1046 14 22V14H22C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10H14V2C14 0.895431 13.1046 0 12 0Z" />
                                                            </svg>
                                                            <span className="Hidden">
                                                                <span>Add media</span>
                                                                <span>4/6</span>
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                                <li className="Pb(8px) Px(4px) Pos(a) List(n) Bdrs(8px)" style={{ left: '113.333px', top: '154.507px', width: '109.333px', height: '146.507px' }}>
                                    <div className="Pos(r) H(100%) C($c-ds-text-primary-overlay)">
                                        <span className="Cur(p) focus-button-style" tabIndex={0} role="button">
                                            <div className="StretchedBox">
                                                <div className="StretchedBox Ov(h) Bgc($c-ds-background-tertiary) Bdrs(8px) focus-button-style Bdw(4px) Bds(da) Bdc($c-ds-border-secondary) Cur(p)" />
                                                <div className="Pos(a) B(0) End(0) Bdrs(50%) Translate(25%,25%) M(2px)" style={{ opacity: 1 }}>
                                                    <button type="button" className="button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Ell Bdrs(50%) P(0) Fw($semibold) focus-button-style Pos(r) Sq(28px) Va(b) Bd focus-button-style C($c-ds-icon-icon-button-primary) Bdc($c-ds-border-overlay) Bgi($g-ds-background-button-primary)" draggable="false">
                                                        <span className="Pos(r) Z(1) Expand CenterAlign" style={{ backgroundColor: "crimson" }}>
                                                            <svg focusable="false" aria-hidden="true" role-presentation viewBox="0 0 24 24" width="24px" height="24px" className="Sq(16px)">
                                                                <path d="M12 0C10.8954 0 10 0.89543 10 2V10H2C0.895431 10 0 10.8954 0 12C0 13.1046 0.895431 14 2 14H10V22C10 23.1046 10.8954 24 12 24C13.1046 24 14 23.1046 14 22V14H22C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10H14V2C14 0.895431 13.1046 0 12 0Z" />
                                                            </svg>
                                                            <span className="Hidden">
                                                                <span>Add media</span>
                                                                <span>5/6</span>
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                                <li className="Pb(8px) Px(4px) Pos(a) List(n) Bdrs(8px)" style={{ left: '222.667px', top: '154.507px', width: '109.333px', height: '146.507px' }}>
                                    <div className="Pos(r) H(100%) C($c-ds-text-primary-overlay)">
                                        <span className="Cur(p) focus-button-style" tabIndex={0} role="button">
                                            <div className="StretchedBox">
                                                <div className="StretchedBox Ov(h) Bgc($c-ds-background-tertiary) Bdrs(8px) focus-button-style Bdw(4px) Bds(da) Bdc($c-ds-border-secondary) Cur(p)" />
                                                <div className="Pos(a) B(0) End(0) Bdrs(50%) Translate(25%,25%) M(2px)" style={{ opacity: 1 }}>
                                                    <button type="button" className="button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Ell Bdrs(50%) P(0) Fw($semibold) focus-button-style Pos(r) Sq(28px) Va(b) Bd focus-button-style C($c-ds-icon-icon-button-primary) Bdc($c-ds-border-overlay) Bgi($g-ds-background-button-primary)" draggable="false">
                                                        <span className="Pos(r) Z(1) Expand CenterAlign" style={{ backgroundColor: "crimson" }}>
                                                            <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px" className="Sq(16px)">
                                                                <path d="M12 0C10.8954 0 10 0.89543 10 2V10H2C0.895431 10 0 10.8954 0 12C0 13.1046 0.895431 14 2 14H10V22C10 23.1046 10.8954 24 12 24C13.1046 24 14 23.1046 14 22V14H22C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10H14V2C14 0.895431 13.1046 0 12 0Z" />
                                                            </svg>
                                                            <span className="Hidden">
                                                                <span>Add media</span>
                                                                <span>6/6</span>
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </section>
                


            </form>
        </div>
    );
};

export default OnBoarding;
