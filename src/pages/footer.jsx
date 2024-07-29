import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PrivacyModal from './PrivacyModal'; 
import './Footer.css'; 

export default function Footer() {
  return (
    <Box className="footer-container">
  <Typography variant="body1" className="item1">© 2024 Elysian</Typography>
  <Box className="item2">
    <IconButton aria-label="facebook" color="inherit" component="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} />
    </IconButton>
    <IconButton aria-label="twitter" color="inherit" component="a" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} />
    </IconButton>
    <IconButton aria-label="instagram" color="inherit" component="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} />
    </IconButton>
    <IconButton aria-label="linkedin" color="inherit" component="a" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </IconButton>
  </Box>

      <Box className="item3">
        <PrivacyModal />
      </Box>
    </Box>
  );
}
