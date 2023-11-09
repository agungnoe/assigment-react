import hero from "../../../assets/images/hero-image-kucing.jpg";
import Navbar from "../../molecules/Navbar";

function Hero() {
  return (
    <>
      <section className="landing-hero pt-5">
        <div className="header__bg"></div>
        <div className="container mx-auto relative">
          <Navbar />
          <div className="flex items-center pt-10 px-5 md:px-0">
            <div className="w-1/2">
              <h1 className="text-4xl text-white mb-5">
                We help <u className="hero-underline">you</u> to <br />
                Adopt a pet <br />
                for your best a pet
              </h1>
              <p className="text-white text-xl font-light mb-8">
                lets find your pet in the website
              </p>
              <button className="block bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 text-xl rounded-full">
                Find a pet
              </button>
            </div>
            <div className="w-1/2 flex justify-center ">
              <img src={hero} alt="" className="rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
