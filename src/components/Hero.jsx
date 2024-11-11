import "../styles/hero.css";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Mau Liburan? <br /> Di <span className="colored">T</span>ravelWings
          Aja!
        </h1>
        <Button text="Explore" />
      </div>
    </section>
  );
};
export default Hero;
