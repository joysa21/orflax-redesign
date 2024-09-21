import HomePage from './pages/Home/HomePage'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div/>} />
        <Route path="/services" element={<div/>} />
        <Route path="/contact" element={<div/>} />
      </Routes>
    </Router>
  )
}

export default App
