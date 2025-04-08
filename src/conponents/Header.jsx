import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import chronials from '../assets/img/chronialsNew-logo.png'
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import xlogo from '../assets/img/NewXlogo.png';
import telegram from '../assets/img/teleg.png';
import dexLogo from '../assets/img/DexLogo.png';

import { HashLink } from 'react-router-hash-link';


const Header =()=>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    return(
        <>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={chronials} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Collections</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>About</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://x.com/wolffREMUS"><img src={xlogo} alt="xChronialsgame" /></a>
                <a href="https://t.me/wolfREMUS"><img src={telegram} alt="tchronialsgame" /></a>
                <a href="https://pump.fun/coin/ "><img src={dexLogo} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}

export default Header;
