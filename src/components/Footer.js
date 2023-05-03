import React from 'react';
import '../styles/Footer.css'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export default function Footer() {
  return (
    <div className = "footer">
       <a href="https://github.com/alylmeier">
        <GitHubIcon className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/aly-meier-67376351/">
        <LinkedInIcon className="icon" />
      </a>
      <a href = "https://stackoverflow.com/users/21809232/aly">
        <MiscellaneousServicesIcon className="icon" />
      </a>
      <h5>Made with ❤️ </h5>
 
    </div>
  );
}
