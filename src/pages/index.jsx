// Falcon Trader v2 - Phase 1: Login System + UI Skeleton

import { useState } from "react";

export default function FalconTrader() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded demo credentials
  const allowedUsers = {
    "falcon123": "pass123",
    "demo": "demo123",
  };

  const handleLogin = () => {
    if (allowedUsers[userId] === password) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid ID or Password");
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-80">
          <h1 className="text-xl font-bold mb-4">Falcon Trader 🦅</h1>
          <input
            className="w-full p-2 rounded bg-slate-700 mb-2"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-2 rounded bg-slate-700 mb-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-emerald-500 hover:bg-emerald-600 w-full p-2 rounded text-white"
          >
            Login
          </button>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Falcon Trader 🦅</h1>
      <p>Trading dashboard coming in next module...</p>
    </div>
  );
}
