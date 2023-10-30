const UserDetails = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="fs-2 text-center fw-bold p-4 ">Create Account</div>
                <div className="col-sm-12 col-md-6 col-lg-4 ms-5 ps-5" >
                    <form className="p-4 ms-4">
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label fw-bolder">First Name</label>
                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-bolder">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputBirthday" className="form-label fw-bolder">Birthday</label>
                            <div className="d-flex">
                                <input type="number" className="form-control text-center
text-center form-control-s m-3" id="exampleInputBirthday" placeholder="DD" />
                                <input type="number" className="form-control text-center
text-center form-control-s m-3" id="exampleInputBirthday" placeholder="MM" />
                                <input type="number" className="form-control text-center
text-center form-control-s m-3" id="exampleInputBirthday" placeholder="YYYY" />
                            </div>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputGender" className="form-label fw-bolder">Gender</label>
                            <div className="d-flex">
                                <input type="text" className="form-control text-center form-control-s m-3 rounded-pill" id="exampleInputGender" placeholder="Man" readOnly />
                                <input type="text" className="form-control text-center form-control-s m-3 rounded-pill" id="exampleInputGender" placeholder="Woman" readOnly />
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label " htmlFor="exampleCheck1">Show my gender on my profile</label>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputGender" className="form-label fw-bolder">Show me</label>
                            <div className="d-flex">
                                <input type="text" className="form-control text-center
text-center form-control m-3 rounded-pill" id="exampleInputGender" placeholder="Man" readOnly />
                                <input type="text" className="form-control text-center
text-center form-control m-3 rounded-pill" id="exampleInputGender" placeholder="Woman" readOnly />
                                <input type="text" className="form-control text-center
text-center form-control m-3 rounded-pill" id="exampleInputGender" placeholder="Everyone" readOnly />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputLoog=kingfor" className="fw-bolder">Looking For</label><br />
                            <input type="radio" name="" id="" className="m-3" /> &nbsp; Long time Partner
                        </div>
                        <hr className="m-5 w-full" />Optional
                        <div className="btn text-center">
                            <button type="submit" className="btn btn-lg rounded-pill  btn-danger">Continue</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}
export default UserDetails;

