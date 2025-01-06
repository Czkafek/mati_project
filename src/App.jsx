import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import HomePage from './pages/homepage/HomePage.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/onas" element={<About/>}/>
        <Route path="/kontakt" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
