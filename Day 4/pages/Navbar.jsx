import  { useState } from 'react';
import '../assets/css/Navbar.css';
import '../pages/Sidebar';
import '../pages/Footer';
import ButtonAppBar from '../pages/Sidebar';
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    setSearchActive(false);
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    setMenuActive(false);
  };

  return (
    <div>
      <nav>
      <div className='navi'>
     <ButtonAppBar/>
     </div> 
        <div className={`menu-icon ${menuActive ? 'hide' : ''}`} onClick={toggleMenu}>
          <span className="fas fa-bars"></span>
        </div>
        <div className="logomi">
       Dreamy House Boat Voyages
        </div>
        <div className={`nav-items ${menuActive ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login/Register</a></li>
          <li><a href="/about">About</a></li>
          
          <li><a href="/contact">Contact</a></li>
          <li><a href="/feedback">Feedback</a></li>
          <li><a href="/book">Services</a></li>
        </div>
        <div className={`search-icon ${searchActive ? 'hide' : ''}`} onClick={toggleSearch}>
          <span className="fas fa-search"></span>
        </div>
        <div className={`cancel-icon ${searchActive ? 'show' : ''}`} onClick={toggleSearch}>
          <span className="fas fa-times"></span>
        </div>
        <form action="#">
  <input type="search" className={`search-data ${searchActive ? 'active' : ''}`} placeholder="Search" required />
 
</form>

      </nav>
      
    <br/>
      
    </div>
  );
};

export default Navbar;
