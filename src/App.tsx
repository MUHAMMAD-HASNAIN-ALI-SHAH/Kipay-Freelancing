import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
