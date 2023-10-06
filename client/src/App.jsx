import { Outlet } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.jsx';
import { Container } from 'react-bootstrap';
import Landing from './components/Landing';

function App() {
  return (
    
      <section>
        <Navbar />
        <Landing/>
        <Outlet />
      </section>

  );
}

export default App
