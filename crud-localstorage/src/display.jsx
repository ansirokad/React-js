function Display(){
    const data = JSON.parse(localStorage.getItem("crud"));
    return (
 
       <div
            className="min-vh-100 d-flex justify-content-center align-items-center py-5"
            style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)"
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-5">

                        <div
                            className="card border-0 shadow-lg"
                            style={{
                                borderRadius: "25px",
                                overflow: "hidden"
                            }}
                        >

                            {/* Header */}
                            <div
                                className="text-center text-white py-5"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #4f46e5, #7c3aed)"
                                }}
                            >
                                <div
                                    className="bg-white text-primary rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3 shadow"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                        fontSize: "40px"
                                    }}
                                >
                                    👤
                                </div>

                                <h2 className="fw-bold mb-1">
                                    User Profile
                                </h2>

                                <p className="mb-0 opacity-75">
                                    Personal Information
                                </p>
                            </div>

                            {/* Body */}
                            <div className="card-body p-4">

                                {/* First Name */}
                                <div className="d-flex align-items-center p-3 mb-3 bg-light rounded-4">
                                    <div
                                        className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3"
                                        style={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                    >
                                        👤
                                    </div>

                                    <div>
                                        <small className="text-muted">
                                            FIRST NAME
                                        </small>

                                        <h5 className="mb-0 fw-bold">
                                            {data.fname}
                                        </h5>
                                    </div>
                                </div>

                                {/* Last Name */}
                                <div className="d-flex align-items-center p-3 mb-3 bg-light rounded-4">
                                    <div
                                        className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center me-3"
                                        style={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                    >
                                        🧑
                                    </div>

                                    <div>
                                        <small className="text-muted">
                                            LAST NAME
                                        </small>

                                        <h5 className="mb-0 fw-bold">
                                            {data.lname}
                                        </h5>
                                    </div>
                                </div>

                                {/* Age */}
                                <div className="d-flex align-items-center p-3 bg-light rounded-4">
                                    <div
                                        className="bg-danger text-white rounded-circle d-flex justify-content-center align-items-center me-3"
                                        style={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                    >
                                        🎂
                                    </div>

                                    <div>
                                        <small className="text-muted">
                                            AGE
                                        </small>

                                        <h5 className="mb-0 fw-bold">
                                            {data.age} Years
                                        </h5>
                                    </div>
                                </div>

                            </div>

                            {/* Footer */}
                            <div className="card-footer bg-white border-0 text-center pb-4">
                                <span className="badge bg-success px-3 py-2 rounded-pill">
                                    ✓ Profile Active
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Display;