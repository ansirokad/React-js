import { Route,Routes, useNavigate } from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"



function ProtectedRouter({child}){
  const navigate = useNavigate();
  if(!localStorage.getItem("token")){
    navigate("/");
  }
  return child;

}
function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={
        <ProtectedRouter>
          <Dashboard/>
        </ProtectedRouter>
      }/>
    </Routes>
   </>
  )
}

export default App
