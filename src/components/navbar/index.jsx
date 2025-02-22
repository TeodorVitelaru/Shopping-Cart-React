import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const isActive = (path) => location.pathname===path

  return (
    <nav className="sticky top-0 bg-gray-200 p-6 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-center items-center space-x-8">
        <div className="relative">
        <Link to="/" className="text-blue-600 text-xl font-medium hover:text-blue-800 hover:shadow-lg transition-all duration-300 rounded-xl p-2">
          Home
        </Link>
        {isActive("/") && <hr className="absolute bottom-0 left-0 right-0 top-8 border-blue-600 border-2" />}
        </div>
        <div className="relative">
        <Link to="/products" className="text-blue-600 text-xl font-medium hover:text-blue-800 hover:shadow-lg transition-all duration-250 rounded-xl p-2">
          Shop
          {isActive("/products") && <hr className="absolute bottom-0 left-0 right-0 top-8 border-blue-600 border-2" />}
        </Link>
        </div>
        <div className="relative">
        <Link to="/cart" className="text-blue-600 text-xl font-medium hover:text-blue-800 hover:shadow-lg transition-all duration-250 rounded-xl p-2">
          Cart
          {isActive("/cart") && <hr className="absolute bottom-0 left-0 right-0 top-8 border-blue-600 border-2" />}
        </Link>
        </div>
      </div>
      
    </nav>
  );
}
