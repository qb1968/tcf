import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 py-8 border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex space-x-6 text-sm font-medium text-gray-300">
          <li>
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white transition">
              Author
            </Link>
          </li>
          <li>
            <Link to="/book" className="hover:text-white transition">
              About The Book
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
