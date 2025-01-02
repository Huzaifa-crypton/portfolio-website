import React, { useState, useEffect } from 'react';
import "./Footer.css";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";
import { Grid } from '@mui/material';
const Footer = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    let date = new Date();
    setDate(date.getFullYear());
  }, [])

  return (
    <footer>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="footerIcons">
            <a href='https://github.com/Huzaifa-crypton'>
              <FaGithub className='socialIcons'></FaGithub>
            </a>
            <a href='https://www.linkedin.com/in/huzaifa-khan-ab961b228/'>
              <FaLinkedin className='socialIcons' ></FaLinkedin>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{backgroundColor: 'black'}}>
          <h3>Copyright &copy; {date} Muhammad Huzaifa Khan </h3>
        </Grid>

      </Grid>
    </footer>

  )
}

export default Footer