import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './conponents/Header'
import Banner from './conponents/Banner'
import Skills from './conponents/Skills';
import Projects from './conponents/Projects';
import Footer from './conponents/Footer';
import LandingPage from './conponents/LandingPage';
import { ChronialsHome } from './conponents/ChronialsHome';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<ChronialsHome/>} />
        </Routes>
    </Router>
  )
}

export default App
