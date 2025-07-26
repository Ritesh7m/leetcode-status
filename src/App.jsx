import React, { useState, useRef } from 'react';
import UserForm from './components/UserForm';
import UserStats from './components/UserStatus'; 
import Navbar from './components/Navbar';
import axios from 'axios';


const App = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const statsRef = useRef(null); 

  

  const fetchUserStatus = async (username) => {
    setLoading(true);
    setError("");
    setStatus(null);

    try {
      const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
      if (response.data.status === "success") {
        setStatus({ username, ...response.data });
      } else {
        setError("User not found or API failed.");
      }
    } catch (err) {
      setError("An error occurred. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar/>

      <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-indigo-200 via-sky-200 to-violet-300 dark:from-indigo-900 dark:via-sky-900 dark:to-violet-900">
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 mt-20">
          <UserForm onSubmit={fetchUserStatus} />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          {loading && <p className="text-lg text-blue-600">Loading...</p>}
          {error && <p className="text-lg text-red-600">{error}</p>}
          {status && (
            <div ref={statsRef}>
              <UserStats status={status} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
