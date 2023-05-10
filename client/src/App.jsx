import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Events from "./pages/Events/Events";
import Event from "./pages/Event/Event";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/Regester/Signup";
import Signin from "./pages/Regester/Signin";

function App() {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("userData")) || ""
  );

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/events" element={<Events user={user} />} />
        <Route path="/events/:id" element={<Event user={user} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/signin" element={<Signin setUser={setUser} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
