import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Docs from './Pages/Docs';
import Components from './Pages/Components';

function App() {
  return (
    <Router>
      <header className="header">
        <div className="logo">React-comp</div>
        <nav>
          <ul className="nav">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/docs">Docs</Link></li>
            <li className="nav-item"><Link to="/components">Components</Link></li>
            <li className="nav-item"><Link to="/github">GitHub</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/components" element={<Components />} />
          <Route path="/github" element={<Home />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;
