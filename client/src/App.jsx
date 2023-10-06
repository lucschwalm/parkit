import { Outlet } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
}

export default App
