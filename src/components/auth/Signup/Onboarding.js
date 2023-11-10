import React, { useState } from 'react';
import { ButtonComponents, FormInputModule, FormLabelModule } from '../../global commponents/FormComponents';
import { BsFillImageFill } from 'react-icons/bs';
import { createAccount } from '../../../redux/action/userAuth.action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Onboarding = () => {
  const auth = useSelector(state => state.userAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [showme, setShowme] = useState('');
  const [lookingFor, setLookingFor] = useState('');
  const [profile, setProfile] = useState([])
  const handleProfileImage = (e) => {
    setProfile([
      ...profile,
      e.target.files[0]
    ]);
  }
  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("showme", showme);
    formData.append("intent", lookingFor);
    for (let pic of profile) {
      formData.append("pics", pic);
    }
    dispatch(createAccount(formData));
  }
  if (auth.message) {
    setTimeout(() => {
      return navigate("/login");
    }, "3000");
  }
  return (

    <div className='row '>
      <div className='col-md-12'>
        <h2 className='text-center fw-bold p-4'>Create Account</h2>
      </div>
      {
        auth.message == "" ? <p className="text-danger fw-bold">{auth.errors}</p> : <p className="text-success fw-bold" >{auth.message}</p>
      }
      <form style={{ display: "contents" }} onSubmit={submitData}>
        <div className='col-md-6   '>
          <div className='row justify-content-center'>
            <div className='col-md-8 mx-5 my-2'>
              <div className="form-outline">
                <FormLabelModule cn="form-label fw-bold" title="Full Name" />
                <FormInputModule
                  typ="text"
                  cn="form-control form-control-lg"
                  nm="fullName"
                  required={true}
                  val={fullname}
                  onChange={e => setFullName(e.target.value)}
                />
              </div>
            </div>
            <div className='col-md-8 mx-5 my-2'>
              <div className="form-outline">
                <FormLabelModule cn="form-label fw-bold" title="Email Address" />
                <FormInputModule
                  typ="email"
                  cn="form-control form-control-lg"
                  nm="email"
                  required={true}
                  val={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className='col-md-8 mx-5 my-2'>
              <div className="form-outline">
                <FormLabelModule cn="form-label fw-bold" title="Birthday" />
                <FormInputModule
                  typ="date"
                  cn="form-control form-control-lg"
                  nm="dob"
                  required={true}
                  val={dob}
                  onChange={e => setDob(e.target.value)}
                />
              </div>
            </div>
            <div className='col-md-8 mx-5 my-2'>
              <div className="form-outline">
                <FormLabelModule cn="form-label fw-bold" title="Mobile number" />
                <FormInputModule
                  typ="number"
                  cn="form-control form-control-lg"
                  nm="number"
                  required={true}
                  val={number}
                  onChange={e => setNumber(e.target.value)}
                />
              </div>
            </div>
            <div className='col-md-8 mx-5 my-2'>
              <div className="form-outline">
                <FormLabelModule cn="form-label fw-bold pr-4" title="Gender" />
                <div>
                  <div className=" form-check">
                    <FormInputModule
                      typ="radio"
                      cn="form-check-input"
                      nm="gender"
                      val='women'
                      onChange={e => setGender(e.target.value)}
                    />
                    <FormLabelModule cn="form-check-label" title="Women" />
                  </div>
                  <div className="form-check">
                    <FormInputModule
                      typ="radio"
                      cn="form-check-input"
                      nm="gender"
                      val='men'
                      onChange={e => setGender(e.target.value)}
                    />
                    <FormLabelModule cn="form-check-label" title="Men" />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-8 mx-5 my-2'>
              <div className="form-outline">
                <FormLabelModule cn="form-label fw-bold pr-4" title="Show Me" />
                <div class="form-check">
                  <FormInputModule
                    typ="radio"
                    cn="form-check-input"
                    nm="showme"
                    val='women'
                    onChange={e => setShowme(e.target.value)}
                  />
                  <FormLabelModule cn="form-check-label" title="Women" />
                </div>
                <div class="form-check">
                  <FormInputModule
                    typ="radio"
                    cn="form-check-input"
                    nm="showme"
                    val='men'
                    onChange={e => setShowme(e.target.value)}
                  />
                  <FormLabelModule cn="form-check-label" title="Men" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6   '>
          <div className='row'>
            <div className='col-md-8 '>
              <div className="form-outline">
                <FormLabelModule cn="form-label fw-bold" title="Profile Photo" />
                <FormInputModule typ="file" cn="form-control form-control-lg" onChange={handleProfileImage} />
              </div>
            </div>
          </div>
          <div className='row'>
            {
              profile.length > 0 ? profile.map((pic, index) =>
                <div className='col-sm-6 col-md-3 col-lg-3 border mt-2' style={{ marginLeft: ".9rem" }}>
                  <div className='row'>
                    <div className='col-md-1 img-icon'>
                      <BsFillImageFill />
                    </div>
                    <div className='col-md-10'>
                      <div style={{ fontSize: 12 }} key={index}>{pic.name}</div>
                    </div>
                  </div>
                </div>
              ) : null
            }
          </div>
          <div className='col-md-8 my-2'>
            <div className="form-outline">
              <FormLabelModule cn="form-label fw-bold pr-4" title="Looking for(Relationship Intent)" />
              <div class="form-check">
                <FormInputModule
                  typ="radio"
                  cn="form-check-input"
                  nm="lookingfor"
                  val='Long-term partner'
                  onChange={e => setLookingFor(e.target.value)}
                />
                <FormLabelModule cn="form-check-label" title="Long-term partner" />
              </div>
              <div class="form-check">
                <FormInputModule
                  typ="radio"
                  cn="form-check-input"
                  nm="lookingfor"
                  val='Long-term, open to short'
                  onChange={e => setLookingFor(e.target.value)}
                />
                <FormLabelModule cn="form-check-label" title="Long-term, open to short" />
              </div>
              <div class="form-check">
                <FormInputModule
                  typ="radio"
                  cn="form-check-input"
                  nm="lookingfor"
                  val='Short-term, open to long'
                  onChange={e => setLookingFor(e.target.value)}
                />
                <FormLabelModule cn="form-check-label" title="Short-term, open to long" />
              </div>
              <div class="form-check">
                <FormInputModule
                  typ="radio"
                  cn="form-check-input"
                  nm="lookingfor"
                  val='New friends'
                  onChange={e => setLookingFor(e.target.value)}
                />
                <FormLabelModule cn="form-check-label" title="New friends" />
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-12 text-center'>
          <ButtonComponents typ="submit" btnname="Continue" cn="px-5 py-3 rounded-pill fw-bold" />
        </div>
      </form >
    </div>
  )
}

export default Onboarding