// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // Implementasi Tailwind: flexbox, shadow, padding, dan warna
    <nav className="bg-white shadow-md p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">GadgetHub</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-blue-600 transition">
            Products
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition">
            Blog
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/register" className="text-gray-600 hover:text-blue-600 transition">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}