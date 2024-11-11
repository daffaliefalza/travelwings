import AboutTravel from "../components/AboutTravel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/about/about.css";

const Destination = () => {
  return (
    <>
      <div className="banner">
        <Navbar />
        <div className="info-title">
          <h1>/Destination</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Destination;
