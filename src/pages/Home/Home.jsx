import About from "../../components/About";
import Button from "../../components/Button";
import DestinationCard from "../../components/DestinationCard";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import ServicesCard from "../../components/ServicesCard";

const Home = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <Hero />
      </header>
      <About />
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-card-wrapper">
            <ServicesCard
              title="WorldWide Tours"
              description="Explore the world with our exclusive, guided tours to the most sought-after destinations. From cultural landmarks to off-the-beaten-path adventures, we offer tailor-made itineraries to suit all interests and preferences."
            />
            <ServicesCard
              title="Hotel Reservation"
              description="Find and book the perfect stay for your trip. We partner with a wide range of hotels, from luxury resorts to cozy boutique accommodations, ensuring you always have a comfortable and convenient place to rest."
            />
            <ServicesCard
              title="Travel Guides"
              description="Our expert travel guides provide in-depth insights into the best destinations, attractions, dining spots, and hidden gems around the globe. Get personalized recommendations to make your trip unforgettable."
            />
            <ServicesCard
              title="Event Management"
              description="Planning a special event while traveling? Let us take care of everything from venue selection to catering, entertainment, and logistics. Whether it's a corporate retreat or a destination wedding, we ensure a seamless experience."
            />
          </div>
        </div>
      </section>

      <section className="destination">
        <div className="container">
          <h2>Destination</h2>
          <div className="destination-card-wrapper">
            <DestinationCard
              image="labuan-bajo.png"
              title="Labuan Bajo"
              description="Labuan Bajo merupakan sebuah surga tersembunyi yang ada di Indonesia Bagian Timur.Desa ini terletak di Kecamatan Komodo, Kabupaten Manggarai Barat,Provinsi Nusa Tenggara Timur.Labuan Bajo adalah salah satu dari lima Destinasi Super Prioritas yang sedang dikembangkan di indonesia.

"
            />
            <DestinationCard
              image="bali.png"
              title="Bali"
              description="Siapa pun tak ada yang bisa menyangkal keindahan yang ditawarkan Pulau Dewata. Baru-baru ini, Bali didapuk menjadi destinasi paling populer di dunia versi Tripadvisor Travellers, Choice tahun 2021. Tentu saja, bentangan alamnya yang indah berpadu sempurna dengan kearifan lokalnya yang istimewa menjadikan Bali sebagai destinasi #DiTravelKuy yang patut Sobat kunjungi setidaknya sekali seumur hidup!

"
            />
            <DestinationCard
              image="lombok.png"
              title="Lombok"
              description="Dengan pantai-pantai nan memesona, Gunung Rinjani yang indah, serta pemandangan bawah laut yang spektakuler, Lombok di Nusa Tenggara Barat akan memanjakan mata Sobat Travelers baik saat berada di darat maupun di air. Tidak heran, jika pulau kecil ini menjelma menjadi destinasi paling populer di Nusa Tenggara Barat.

"
            />
            <DestinationCard
              image="belitung.png"
              title="Belitung"
              description="Sobat Pesona pernah nonton film Laskar Pelangi, kan? Indah banget kan latar filmnya? Nah, film yang masuk ke dalam box office Indonesia tersebut berlatar di Pulau Belitung, lho! Jika Sobat Travelers punya rencana liburan #DiTravelKuyAja, bisa banget memasukkan Pulau Belitung ke dalam bucket-list! Ya, pulau yang terletak di Provinsi Kepulauan Bangka Belitung ini punya jutaan wisata yang siap membuat Sobat TravelKuy berdecak kagum karena keindahannya.

"
            />
          </div>
          <Button text="Selengkapnya" />
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form
            className="contact-form"
            action="https://formsubmit.co/liefalzaa@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
