import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <Home data1="Data1" data2="Data2" data3="Data3" />
      <Home data1="Data1" data3="Data3" />
      <About fname="Sita" lname="Patel" age={12} />
    </>
  );
}

export default App;
