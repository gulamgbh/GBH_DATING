import React, { useState } from 'react';
import { ButtonComponents, FormInputModule, FormLabelModule } from '../global commponents/FormComponents';
const Onboarding = () => {
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
    <div className='row '>
      <div className='col-md-12'>
        <h2 className='text-center fw-bold p-4'>Create Account</h2>
      </div>
      <div className='col-md-6   '>
        <div className='row justify-content-center'>
          <div className='col-md-8 mx-5 my-2'>
            <div className="form-outline">
              <FormLabelModule cn="form-label fw-bold" title="Full Name" />
              <FormInputModule typ="text" cn="form-control form-control-lg" />
            </div>
          </div>
          <div className='col-md-8 mx-5 my-2'>
            <div className="form-outline">
              <FormLabelModule cn="form-label fw-bold" title="Email Address" />
              <FormInputModule typ="email" cn="form-control form-control-lg" />
            </div>
          </div>
          <div className='col-md-8 mx-5 my-2'>
            <div className="form-outline">
              <FormLabelModule cn="form-label fw-bold" title="Birthday" />
              <FormInputModule typ="date" cn="form-control form-control-lg" />
            </div>
          </div>
          <div className='col-md-8 mx-5 my-2'>
            <div className="form-outline">
              <FormLabelModule cn="form-label fw-bold" title="Gender" />
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
            </div>
          </div>
        </div>
        
      </div>
      <div className='col-md-6   '>
        <div className='row border justify-content-center'>
          <div className='col-md-8 m-5 '>
            <div className="form-outline">
              <FormLabelModule cn="form-label fw-bold" title="Profile Photo" />
              <FormInputModule typ="file" cn="form-control form-control-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="onboarding">
    //   <h2 className='text-center fw-bold '>Create Account</h2>
    //   <form>
    //     <section>
    //       <label htmlFor="first_name">First Name</label>
    //       <input
    //         id="first_name"
    //         type='text'
    //         name="first_name"
    //         placeholder="First Name"
    //         required={true}
    //         value={formData.first_name}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor="email_address">Email Address</label>
    //       <input
    //         id="email_address"
    //         type='email'
    //         name="email_address"
    //         placeholder="Email Address"
    //         required={true}
    //         value={formData.email_address}
    //         onChange={handleChange}
    //       />
    //       <label>Birthday</label>
    //       <div className="multiple-input-container">
    //         <input
    //           id="dob_day"
    //           type="number" // Change type to "number"
    //           name="dob_day"
    //           placeholder="DD"
    //           required={true}
    //           value={formData.dob_day}
    //           onChange={handleChange}
    //         />
    //         <input
    //           id="dob_month"
    //           type="number" // Change type to "number"
    //           name="dob_month"
    //           placeholder="MM"
    //           required={true}
    //           value={formData.dob_month}
    //           onChange={handleChange}
    //         />
    //         <input
    //           id="dob_year"
    //           type="number" // Change type to "number"
    //           name="dob_year"
    //           placeholder="YYYY"
    //           required={true}
    //           value={formData.dob_year}
    //           onChange={handleChange}
    //         />
    //       </div>

    //       <label>Gender</label>
    //       <div className="multiple-input-container">
    //         <input
    //           id="man-gender-identity"
    //           type="radio"
    //           name="gender_identity"
    //           value="man"
    //           onChange={handleChange}
    //           checked={formData.gender_identity === "man"}
    //         />
    //         <label htmlFor="man-gender-identity">Man</label>
    //         <input
    //           id="woman-gender-identity"
    //           type="radio"
    //           name="gender_identity"
    //           value="woman"
    //           onChange={handleChange}
    //           checked={formData.gender_identity === "woman"}
    //         />
    //         <label htmlFor="woman-gender-identity">Woman</label>
    //         <input
    //           id="more-gender-identity"
    //           type="radio"
    //           name="gender_identity"
    //           value="more"
    //           onChange={handleChange}
    //           checked={formData.gender_identity === "more"}
    //         />
    //         <label htmlFor="more-gender-identity">More</label>
    //       </div>
    //       <label htmlFor="show-gender">
    //         <input
    //           id="show-gender"
    //           type="checkbox"
    //           name="show_gender"
    //           onChange={handleChange}
    //           checked={formData.show_gender}
    //         />&nbsp;&nbsp;Show Gender on my Profile</label>

    //       <label>Show Me</label>
    //       <div className="multiple-input-container">
    //         <input
    //           id="man-gender-interest"
    //           type="radio"
    //           name="gender_interest"
    //           value="man"
    //           onChange={handleChange}
    //           checked={formData.gender_interest === "man"}
    //         />
    //         <label htmlFor="man-gender-interest">Man</label>
    //         <input
    //           id="woman-gender-interest"
    //           type="radio"
    //           name="gender_interest"
    //           value="woman"
    //           onChange={handleChange}
    //           checked={formData.gender_interest === "woman"}
    //         />
    //         <label htmlFor="woman-gender-interest">Woman</label>
    //         <input
    //           id="everyone-gender-interest"
    //           type="radio"
    //           name="gender_interest"
    //           value="everyone"
    //           onChange={handleChange}
    //           checked={formData.gender_interest === "everyone"}
    //         />
    //         <label htmlFor="everyone-gender-interest">Everyone</label>
    //       </div>
    //       <hr />
    //       <label htmlFor="about">About me</label>
    //       <input
    //         id="about"
    //         type="text"
    //         name="about"
    //         required={true}
    //         placeholder="I like long walks..."
    //         value={formData.about}
    //         onChange={handleChange}
    //       />
    //     </section>
    //     <section>
    //       <FormLabelModule title="Profile photo" />
    //       <FormInputModule typ='file' />
    //     </section>

    //   </form>
    // </div>
  )
}

export default Onboarding