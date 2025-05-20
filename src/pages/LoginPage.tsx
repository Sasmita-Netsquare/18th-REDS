import { LoginForm } from "../components";

const LoginPage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/login_bg.jpg')" }}
    >
      {/* Overlay for glassmorphism effect */}
      <div className="absolute inset-0 bg-black/15 bg-opacity-50 backdrop-blur-md"></div>

      <div
        className="relative z-10 max-w-4xl w-full mx-4 rounded-xl overflow-hidden border border-white border-opacity-20 backdrop-filter p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-left bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/login_bg.jpg')" }}
      >
        {/* Left Side - could be empty or additional branding */}
        <div className="hidden md:flex items-center justify-center">
          {/* You can place additional image or branding here */}
        </div>

        {/* Right Side - Form Container */}
        <div className="backdrop-blur-sm  bg-black/25 p-6 rounded-lg flex flex-col border border-white border-opacity-20 py-8">
          <h1 className="text-3xl font-semibold mb-8 text-center text-white">
            Welcome to <br /> Management Panel
          </h1>
          {/* Form Inputs */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
