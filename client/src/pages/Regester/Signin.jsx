import { useState } from "react";
import sendDataToServer from "../../helpers/sendDataToServer";
import { useNavigate } from "react-router-dom";

const Signin = ({ setUser }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await sendDataToServer({ email, password }, "login");
    userData && localStorage.setItem("userData", JSON.stringify(userData));
    setEmail("");
    setPassword("");

    setUser(userData);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-gray-800 p-10 rounded-lg shadow-lg w-1/2 h-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-5 text-white">Login</h2>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 font-semibold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-sky-400 hover:bg-gray-700 text-white font-bold rounded-lg focus:outline-none focus:shadow-outline"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signin;
