import CreatePassword from "../components/Authentication/CreatePassword";
import Navbar from "../components/Authentication/Navbar";

const CreatePasswordPage = () => {
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
          <CreatePassword />
        </div>
      </div>
    </div>
  );
};

export default CreatePasswordPage;
