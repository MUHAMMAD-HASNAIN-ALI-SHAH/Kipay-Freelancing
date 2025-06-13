import AllInOne from "./pages/Home/AllInOne/AllInOne";
import Footer from "./pages/Home/Footer/Footer";
import Home from "./pages/Home/Home";
import Oversight from "./pages/Home/Oversight/Oversight";
import Seamless from "./pages/Home/Seamless/Seamless";
import Smarter from "./pages/Home/Smarter/Smarter";
import Trusted from "./pages/Home/Truted/Trusted";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#0A0311] text-white">
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
