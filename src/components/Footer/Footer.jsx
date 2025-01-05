import React, { useState, useEffect } from 'react';
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Grid, Typography } from '@mui/material';
import MuhammadHuzaifaKhan from "../../images/MuhammadHuzaifaKhan.jpeg";
const Footer = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    let date = new Date();
    setDate(date.getFullYear());
  }, [])

  return (
    <footer>
      <Grid container spacing={4} justifyContent={"center"} style={{paddingLeft:0,marginLeft:0}}>  {/* Complete Footer Container */}
        <Grid item xs={12} container spacing={2}> {/* Upper Container */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}> {/* Left Container for image and social links */}
            <Grid container spacing={2}>
              <Grid item> {/* Image Container */}
                <img
                  src={MuhammadHuzaifaKhan}
                  alt="Profile"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '2px solid white',
                    width: '130px',
                    height: '130px'
                  }}
                />
              </Grid>
              <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}> {/* Text Container */}
                <Typography component="a" sx={{ textDecoration: 'none', marginBottom: "8px" }} href='' variant='h2' color={"white"} fontSize={26} fontWeight={"bold"}>Huzaifa Khan</Typography>
                <Typography sx={{ marginBottom: "8px" }} variant='h2' fontSize={18}>Software Engineer</Typography>
                <Grid container spacing={2} className="footerIcons" style={{ display: 'flex', justifyContent: 'start' }}>
                  <Grid item>
                    <a href='https://github.com/Huzaifa-crypton'>
                      <FaGithub className='socialIcons'></FaGithub>
                    </a>
                  </Grid>
                  <Grid item>
                    <a href='https://www.linkedin.com/in/huzaifa-khan-ab961b228/'>
                      <FaLinkedin className='socialIcons' ></FaLinkedin>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={6} spacing={4}>{/* Right Container with pages */}
            <Grid item xs={6} md={4}>
              <Typography variant='h6' color={'white'} fontWeight="bold">Let's Connect</Typography>
              <Typography component="a" sx={{ textDecoration: 'none', color:"inherit" }} href="https://www.linkedin.com/in/muhammad-huzaifa-khan-ab961b228/">LinkedIn</Typography><br/>
              <Typography component="a" sx={{ textDecoration: 'none', color:"inherit" }} href="https://github.com/Huzaifa-crypton">GitHub</Typography><br/>
              <Typography component="a" sx={{ textDecoration: 'none', color:"inherit" }} href="https://api.whatsapp.com/send/?phone=923431544033">Whatsapp</Typography>
          </Grid>
          <Grid item md={4} xs={6}>
            <Typography variant='h6' color={'white'} fontWeight="bold">Explore</Typography>
            <Typography>About</Typography>
            <Typography>Experience</Typography>
            <Typography>Projects</Typography>
          </Grid>
          <Grid item md={4} xs={6}>
            <Typography variant='h6' color={'white'} fontWeight="bold">Have an Idea?</Typography>
            <Typography component={'a'} sx={{ textDecoration: 'none', color:"inherit" }} href="#contact">Contact</Typography>
            <Typography>Hire Me</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={2}> {/* Lower Container */}
        <Grid item xs={12} sm={12} md={5}>
          <Typography variant='body1' fontSize={15} color={"white"}>&copy;{date} Huzaifa. All rights reserved. </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} display={"flex"} justifyContent={{md:"end", xs:"start"}} >
          <Typography variant='body1' fontSize={15} color={"white"}>Made with ❤️ by <Typography component="a" sx={{ textDecoration: 'underline', color:"inherit"}} href=''>Huzaifa</Typography></Typography>
        </Grid>
      </Grid>

    </Grid>
    </footer >

  )
}

export default Footer