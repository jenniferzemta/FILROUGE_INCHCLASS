import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Etudiants from './pages/Etudiants';
import Sidebar from './components/layouts/Sidebar';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';
import Contact from './pages/public/Contact';
import About from './pages/public/About';
import Home from './pages/public/Home';
import HomePage from './pages/public/HomePage';
import Services from './pages/public/Services';

function App() {
  return (


    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/sidebar" element = {<Sidebar/>} />
          <Route path="/etudiants" element = {<Etudiants/>} />
          <Route path="/dashboard" element = {<Dashboard/>} />
          <Route path="/test" element = {<Test/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/services" element = {<Services/>} />
        </Routes>
      
    </Router>
  
  );
}

export default App;