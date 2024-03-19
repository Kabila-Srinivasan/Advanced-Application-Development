import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import TermsAndConditions from './pages/TermsAndConditions'
import Testimonials from './pages/Testimonials'
import Faq from './pages/Faq'
import Aboutus from './pages/Aboutus'
import FeedbackForm from './pages/FeedbackForm'
import Footer from './pages/Footer'
import Navbar from './pages/Navbar'
import Trip from './pages/Trip'
import Booking from './pages/Booking'
import Home from './pages/Home'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Booknow from './pages/Booknow'
import ServiceBooked from './pages/Booked'
import Profile from './pages/user/Profile'
import Settings from './pages/user/Settings'
function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
      <Route path="/terms" element={<TermsAndConditions/>}></Route>
      <Route path="/testimonials" element={<Testimonials/>}></Route>
      <Route path="/faq" element={<Faq/>}></Route>
      <Route path="/about" element={<Aboutus/>}></Route>
      <Route path="/feedback" element={<FeedbackForm/>}></Route>
      <Route path="/trip" element={<Trip/>}></Route>
      <Route path="/book" element={<Booking/>}></Route>
      <Route path='/main' element={<MainDash/>}></Route>
    <Route path='/right' element={<RightSide/>}></Route>
    <Route path='/booknow' element={<Booknow/>}></Route>
      <Route path='/booked' element={<ServiceBooked/>}></Route>
      <Route path='/edit' element={<Profile/>}></Route>
      <Route path='/set' element={<Settings/>}></Route>
     
      

    </Routes>
    <Footer/>
    </>
  )
}

export default App
