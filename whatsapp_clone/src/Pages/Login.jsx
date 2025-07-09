import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === '1234') {
      onLogin();
    } else {
      alert('Invalid OTP. Use 1234');
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#111b21] text-white">
      <form onSubmit={handleSubmit} className="bg-[#202c33] p-6 rounded-lg space-y-4 w-full max-w-sm">
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 rounded bg-[#2a3942] placeholder-gray-400 focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Enter OTP (1234)"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 rounded bg-[#2a3942] placeholder-gray-400 focus:outline-none"
          required
        />
        <button type="submit" className="w-full bg-green-500 py-2 rounded font-semibold">Login</button>
      </form>
    </div>
  );
}
