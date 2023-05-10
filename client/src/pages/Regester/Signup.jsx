import { useState } from "react";
import sendDataToServer from "../../helpers/sendDataToServer";
import { useNavigate } from "react-router-dom";

function Register({ setUser }) {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentCardId, setStudentCardId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await sendDataToServer(
      { name, email, password, studentCardId },
      "register"
    );

    userData && localStorage.setItem("userData", JSON.stringify(userData));
    setUser(userData);

    setName("");
    setEmail("");
    setPassword("");
    setStudentCardId("");

    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
      <form
        className="p-10 bg-gray-800 rounded-lg shadow-md w-1/2"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-white">
          Sign up
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="idStudentCard"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Student Card ID
          </label>
          <input
            type="number"
            id="StudentCardId"
            name="StudentCardId"
            value={studentCardId}
            onChange={(e) => setStudentCardId(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-sky-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
