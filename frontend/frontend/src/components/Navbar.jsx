import { useNavigate } from "react-router-dom";
import socket from "../services/socket";

function Navbar({ username }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    socket.disconnect();
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-start justify-between">

        {/* Left */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">
            💬 Simple Chat
          </h1>

          <p className="text-sm text-blue-100 mt-1">
            Welcome, <span className="font-semibold">{username}</span>
          </p>
        </div>

        {/* Right */}
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;