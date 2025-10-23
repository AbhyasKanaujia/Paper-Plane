import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="p-4 bg-gray-200 flex items-center justify-between">
      <Link to="/" className="font-bold text-lg">
        Paper Plane
      </Link>
      <div className="flex space-x-4">
        {/* Navigation links to be added later */}
      </div>
    </nav>
  );
}
