import AllInOne from "./components/Home/AllInOne";
import Footer from "./components/Home/Footer";
import Home from "./pages/Home/Home";
import Oversight from "./components/Home/Oversight";
import Seamless from "./components/Home/Seamless";
import Smarter from "./components/Home/Smarter";
import Trusted from "./components/Home/Trusted";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#0A0311] text-white overflow-x-hidden">
      <Home />
      <Oversight />
      <Smarter />
      <Seamless />
      <Trusted />
      <AllInOne />
      <Footer />
    </div>
  );
}

export default App;
