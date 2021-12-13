import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

//css
import './App.css';
//components
import { About, Header, Home, Login, Navbar, NotFound404, Register } from "./components";
import { AnimalAll, BarnAll, CreateAnimal, CreateBarn, CreateQurantines, Dashboard, QurantinesAll } from './components/admin';
import Admin from './components/admin/Admin';
//guards
import PrivatePath from './guards/PrivatePath';
//context
import { UserContext } from './contexts/UserContext';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ value, setValue }}>
          <header className="App-header">
            <Navbar />
            <Header />
          </header>
          <ToastContainer />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<PrivatePath><Register /></PrivatePath>} />
            <Route path="/login" element={<PrivatePath><Login /></PrivatePath>} />
            <Route path="/about" element={<About />} />

            <Route path="admin" element={<Admin />}>
              <Route index path="dashboard" element={<Dashboard />} />
              <Route path="animal-all" element={<AnimalAll />} />
              <Route path="create-animal" element={<CreateAnimal />} />
              <Route path="animal-all" element={<AnimalAll />} />
              <Route path="create-barn" element={<CreateBarn />} />
              <Route path="barn-all" element={<BarnAll />} />
              <Route path="qurantines-all" element={<QurantinesAll />} />
              <Route path="create-qurantines" element={<CreateQurantines />} />
            </Route>

            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export const BASE_URL_DB = 'http://localhost:5000/'
export default App;
