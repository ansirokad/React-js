import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleData=()=>{
     localStorage.setItem("token", "1234");
    navigate("/dashboard");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login</h2>

            <form>
              <div className="mb-3">
                <label className="form-label" >Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username} onChange={(e)=>{setUsername(e.target.value)}}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100" onClick={handleData}>
                Login
              </button>
            </form>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;