import Donate from "../components/organisems/Donate";
import Footer from "../components/organisems/Footer";
import Hero from "../components/organisems/Hero";

function Home() {
  return (
    <>
      <div className="landing-page">
        <Hero />
        <Donate />
        <Footer />
      </div>
    </>
  );
}

export default Home;
