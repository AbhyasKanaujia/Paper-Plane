import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import apiClient from "./api/client"

import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  const [backendHealth, setBackendHealth] = useState("Loading...");

  useEffect(() => {
    apiClient.get("/health")
      .then((res) => {
        setBackendHealth(res.data);
      })
      .catch(() => setBackendHealth("Backend not reachable"));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>Welcome to the minimal React Vite Tailwind React Router app.</p>
      <p className="text-gray-600">
        Backend Health: <span className="font-semibold">{backendHealth}</span>
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
