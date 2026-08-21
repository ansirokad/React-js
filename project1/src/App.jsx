import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

const cssdata = {
  color: "skyblue",
  fontSize: "50px",
};

const fname = "Sita";
function App() {
  return (
    // {/* Parent Element */}
    // <div>
    //   <Header />
    //   <Home />
    //   <Footer />
    // </div>

    // {/* Fragment */}
    <>
      <Header />
      <Home />
      <Footer />

      <h1 style={cssdata}>Hello {fname}</h1>
      <h2
        style={{ color: "pink", fontFamily: "cursive" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "skyblue")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "pink")}
      >
        Hello World
      </h2>
    </>
  );
}

export default App;
