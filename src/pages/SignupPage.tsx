import Navbar from "../components/Authentication/Navbar";
import Signup from "../components/Authentication/Signup";

const SignupPage = () => {
  return (
    <div className="flex flex-col justify-center bg-black min-h-screen items-center overflow-x-hidden">
      <div
        className="w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('./Authentication/bg-img.png')",
        }}
      >
        <div className="w-full h-full">
          <Navbar buttonText="Signin" />
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
