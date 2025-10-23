import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-200 text-center text-sm text-gray-600">
      &copy; {new Date().getFullYear()} Paper Plane. All rights reserved.
    </footer>
  );
}
