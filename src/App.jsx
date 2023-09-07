import "normalize.css";
import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import BodyPage from "./components/BodyPage";
import ReservationPage from "./components/ReservationPage";
import MenuPage from "./components/MenuPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BodyPage />} />
        <Route path="/reserve" element={<ReservationPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
