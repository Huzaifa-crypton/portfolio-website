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
      <Grid container spacing={4} marginTop={1} marginBottom={1} marginLeft={5} marginRight={1} justifyContent={"center"}>  {/* Complete Footer Container */}
        <Grid item xs={12} container> {/* Upper Container */}
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
                <Typography sx={{marginBottom:"8px"}} variant='h2' color={"white"} fontSize={26} fontWeight={"bold"}>Huzaifa Khan</Typography>
                <Typography sx={{marginBottom:"8px"}} variant='h2' fontSize={18}>Software Engineer</Typography>
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
          <Grid item container spacing={5} xs={12} md={6}>{/* Right Container with pages */}
            <Grid item md={4}>
              <Typography variant='h6' color={'white'} fontWeight="bold">Let's Connect</Typography>
              <Typography>LinkedIn</Typography>
              <Typography>GitHub</Typography>
              <Typography>Whatsapp</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant='h6' color={'white'} fontWeight="bold">Explore</Typography>
              <Typography>About</Typography>
              <Typography>Experience</Typography>
              <Typography>Projects</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant='h6' color={'white'} fontWeight="bold">Have an Idea?</Typography>
              <Typography>Contact</Typography>
              <Typography>Hire Me</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} container> {/* Lower Container */}
          <Grid item xs={12} sm={12} md={5} style={{ backgroundColor: 'black' }}>
            <Typography variant='body1' fontSize={15} color={"white"}>&copy;{date} Huzaifa. All rights reserved. </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} display={"flex"} justifyContent={"end"} >
            <Typography variant='body1' fontSize={15} color={"white"}>Made with ❤️ by Huzaifa</Typography>
          </Grid>
        </Grid>

      </Grid>
    </footer>

  )
}

export default Footer