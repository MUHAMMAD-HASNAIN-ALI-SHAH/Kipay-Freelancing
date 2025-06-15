import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import CreatePasswordPage from "./pages/CreatePasswordPage";
import OnboardingPage from "./pages/OnboardingPage";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/create-password" element={<CreatePasswordPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>
    </div>
  );
}

export default App;
