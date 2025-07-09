import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/home" /> : <Login onLogin={() => setLoggedIn(true)} />} />
        <Route path="/home" element={loggedIn ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
