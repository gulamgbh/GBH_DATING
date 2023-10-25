import React from "react"
const Dashboard = () => {
    return (
        <>
            <div className="deshboard-section" style={{ marginTop: '-99px' }} >
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col">
                            <div className="bg-image">
                                <img src="" alt=""></img>
                                <div className="creat-btn text-center">
                                    <h1 className="text-center start-text ">Start somthing apic.</h1>
                                    <button type="button" className="btn btn-danger btn-lg  rounded-pill text-light px-4 w-4" style={{ position: 'absolute', top: '63%', right: '41%',width:'250px' }}>Create account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;