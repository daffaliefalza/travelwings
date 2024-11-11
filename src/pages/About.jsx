import AboutTravel from "../components/AboutTravel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/about/about.css";

const About = () => {
  return (
    <>
      <div className="banner">
        <Navbar />
        <div className="info-title">
          <h1>/about</h1>
        </div>
      </div>
      <AboutTravel />
      <Footer />
    </>
  );
};
export default About;
