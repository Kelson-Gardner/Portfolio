import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import LinkedIn from '../assets/LinkedInLogo.webp';
import GitHub from '../assets/GitHubLogo.png';

const NavBar = () => {
  return (
    <AppBar
            sx={{width: "100vw", left: 0, top: 0, position: "fixed", backgroundColor: "black"}}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
      }}>
      <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}><Box
        component="img"
        src={logo}
        sx={{
            marginTop: '5px',
            height: '50px',
            widht: '50px'
        }}
        /></Link>
        <div style={{width: '0px'}}></div>
        <div style={{width: '0px'}}></div>
        <div style={{width: '0px'}}></div>
        <div style={{width: '0px'}}></div>
        <div style={{width: '0px'}}></div>
        <div style={{width: '0px'}}></div>
    <div 
        >
      <Link to={"/projects"} style={{ textDecoration: 'none', color: 'inherit', marginLeft: '30px' }}>Projects</Link>
      <Link to={"/experience"} style={{ textDecoration: 'none', color: 'inherit', marginLeft: '30px' }}>Experience</Link>
      <Link to={"/consultation"} style={{ textDecoration: 'none', color: 'inherit', marginLeft: '30px' }}>Consultation</Link>
      <Link to={"/about"} style={{ textDecoration: 'none', color: 'inherit', marginLeft: '30px' }}>About</Link>
    </div>
        <div>
      <a href="https://github.com/Kelson-Gardner" target="_blank">
      <img height="40px" width="40px" src={GitHub} style={{marginBottom: '5px'}}/>
      </a>
      <a href="https://www.linkedin.com/in/kelson-gardner-bbbbb6294/" target="_blank">
      <img height="51px" width="51px" src={LinkedIn} style={{marginTop: '5px'}}/>
      </a>
      </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;