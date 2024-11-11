import "../styles/home/home.css";
const AboutTravel = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="image-wrapper">
          <img src="./daffa.jpg" alt="daffa" />
        </div>

        <div className="about-headline">
          <div className="headline-message">
            <h2>About Us</h2>
            <p>
              At TravelWings, we’re dedicated to turning your travel dreams into
              reality. Imagine soaking up the sun on exotic beaches, exploring
              vibrant cityscapes, or unwinding in cozy mountain
              retreats—whatever your ideal destination, we’re here to make it
              happen. Our platform brings you expertly curated travel guides,
              hidden gems, and personalized recommendations, along with seamless
              booking options for flights, hotels, and tours. With user-friendly
              planning tools, top-notch customer support, and tips to make every
              trip memorable, we’re committed to creating an easy, enjoyable,
              and inspiring travel experience. Let TravelWings be your guide,
              and start your journey to unforgettable destinations today!
            </p>
            <span>- Andi Daffa Liefalza | CEO TravelWings</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutTravel;
