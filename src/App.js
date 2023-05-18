import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home'
import { Projects } from './pages/Projects';
import { Contacts } from './pages/Contacts';
import { Project } from './pages/Project';
import ScrollToTop from './utils/scrollToTop';
import './styles/style.css'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/project/:id' element={<Project />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
