import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import { ToastContainer } from "material-react-toastify";
import 'material-react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container" >
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
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
}

export default App;
