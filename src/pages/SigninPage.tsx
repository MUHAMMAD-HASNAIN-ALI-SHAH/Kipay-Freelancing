import Navbar from "../components/Authentication/Navbar";
import Signin from "../components/Authentication/Signin";

const SigninPage = () => {
  return (
    <div className="flex flex-col justify-center bg-black min-h-screen items-center overflow-x-hidden">
      <div
        className="w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('./Authentication/bg-img.png')",
        }}
      >
        <div className="w-full h-full">
          <Navbar />
          <Signin />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
