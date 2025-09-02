import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Links from "./pages/Links";
import Navigation from "./pages/Navigation";
import Clients from "./pages/Clients";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        {/* Routes go here */}
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </>
  );
}

export default App;
