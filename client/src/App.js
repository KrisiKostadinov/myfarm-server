import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Header, Home, Login, Navbar, NotFound404, Register } from "./components";
import { UserContext } from './contexts/UserContext';

const App = () => {
  const [value, setValue] = useState('Hello from context');

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
          <Header />
        </header>
        <UserContext.Provider value={{ value, setValue }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export const BASE_URL_DB = 'http://localhost:5000/'
export default App;
