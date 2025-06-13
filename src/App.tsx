import Home from "./pages/Home/Home";
import Oversight from "./pages/Home/Oversight/Oversight";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#0A0311] text-white">
      <Home />
      <Oversight />
    </div>
  );
}

export default App;
