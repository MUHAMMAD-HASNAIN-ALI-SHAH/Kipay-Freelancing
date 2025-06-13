import Desktop from "./Hero/Desktop";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <section className="w-full relative">
      <img
        src="./Ellipse-navbar-top.png"
        alt=""
        className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-100 [mask-image:radial-gradient(circle,white_5%,transparent_80%)]"
      />
      <Navbar />
      <Hero />
      <Desktop />
    </section>
  );
};

export default Home;
