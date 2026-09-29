import { Route,Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Login from "./Login"
import Logout from "./Logut"
import Register from "./Register"

function App() {

  return (
    <>
      <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/" element={<Logout/>} />
      <Route path="/" element={<Register/>} />
    </Routes>
    </>
  )
}

export default App
