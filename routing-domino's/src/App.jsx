import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Home";
import CheeseVolconPage from "./components/CheeseVolcon";
import CheeseBurstPage from "./components/CheeseBurst";
import GarlicBreadPage from "./components/GarlicBread";
import BigPizzaPage from "./components/BigPizza ";
import DessertsPage from "./components/Desserts";

function App() {
  return (
    <section>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cheese-volcano" element={<CheeseVolconPage />} />
          <Route path="/cheese-burst" element={<CheeseBurstPage />} />
          <Route path="/garlic-bread" element={<GarlicBreadPage />} />
          <Route path="/big-pizza" element={<BigPizzaPage />} />
          <Route path="/desserts" element={<DessertsPage />} />
        </Routes>
      </main>
    </section>
  );
}

export default App;
