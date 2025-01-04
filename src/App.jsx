import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <section id="home" className="landing_section">
        <Home></Home>
      </section>
      <section id="skills" className="skills">
        {/* <Skills></Skills> */}
      </section>
      <section id="portfolio" className="portfolio">
        {/* <Project></Project> */}
      </section>
      <section id="contact" className="contact" style={{paddingTop: '50px'}}>
        <Contact></Contact>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
