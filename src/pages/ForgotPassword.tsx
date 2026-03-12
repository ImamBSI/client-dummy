import React, { useState } from 'react';
import { authApi } from '../hooks/express_api';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailExists, setEmailExists] = useState<boolean | null>(null);

  const handleCheckEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await authApi.checkEmail(email);
      if (response.exists) {
        setEmailExists(true);
        setMessage('');
      } else {
        setEmailExists(false);
      }
    } catch (error) {
      console.error("Error checking email:", error);
      setMessage("Terjadi kesalahan saat memeriksa email.");
    }
  };

  const handleSetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Password has been successfully updated.');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleCheckEmail}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Check Email
          </button>
        </form>

        {emailExists === true && (
          <form onSubmit={handleSetPassword} className="mt-4">
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="border rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                required
                className="border rounded w-full p-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Set Password
            </button>
          </form>
        )}

        {emailExists === false && (
          <div className="text-center mt-4">
            <p className="text-red-500 mb-4">Email not found. Would you like to register?</p>
            <button
              className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
              onClick={() => alert('Redirecting to registration...')}
            >
              Register
            </button>
          </div>
        )}

        {message && (
          <p className="text-green-500 text-center mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;