import "../styles/hero.css";
import Button from "./Button";

const Hero = (props) => {
  const { pageTitle } = props;
  return (
    <section className="hero">
      <div className="container">
        <h1>{pageTitle}</h1>
        <Button text="Explore" to="/destination" />
      </div>
    </section>
  );
};
export default Hero;
