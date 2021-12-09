import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, Home, Login, Navbar, NotFound404, Register } from "./components";

const App = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
