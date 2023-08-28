import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <section id="home" className="landing_section">
        <Home landscape={true}></Home>
      </section>
      <section id="skills" className="skills">
      </section>
      <section id="portfolio" className="portfolio">
      </section>
      <section id="contact" className="contact">
        <Contact></Contact>
      </section>
      <div className="main_page">
        {/* <Routes>
        <Route path="/" element={<Home landscape= {true}></Home> } />
        <Route path="/blogs" element={ <Blogs></Blogs> } />
        </Routes> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
