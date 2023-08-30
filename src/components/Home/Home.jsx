import React from 'react'
import "./Home.css"
import image from "../../images/MuhammadHuzaifaKhan.jpeg"
import { Grid, Box, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation';
import { Fade } from "react-awesome-reveal";

const Home = ({ landscape }) => {
  return (
    <Box>
      <Grid spacing={3} container sx={{ marginY: "90px" }} justifyContent={"center"}>
        <Grid item lg={5} md={5} sm={10} xs={10} style={{ paddingTop: '0', marginTop: "10px" }}>
          <Fade direction="left" triggerOnce={true}>

            <Box className="main_panel">
              <Typography variant='h4'>Hi, I'm <strong>Muhammad Huzaifa Khan</strong>🙋‍♂️</Typography>
              <br />

              <Typography variant='h5' color="rgb(237, 177, 11)">
                <TypeAnimation
                  sequence={["Software Developer", 100, "Published Author", 100, "Computer Science Student", 100]}
                  wrapper="span"
                  speed={20}
                  deletionSpeed={20}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </Typography>
              <br />
              <Typography variant='h6'>Self-driven and determined individual with a passion for&nbsp;<strong>Software Engineering</strong>.
                Revolutionizing Healthcare by empowering the sector through&nbsp;<strong>Computer Vision</strong>&nbsp;and <strong>Machine Learning</strong>.
              </Typography>
            </Box>
          </Fade>
        </Grid>
        <Grid item lg={3} md={3} sm={10} xs={10} justifyContent={"center"} style={{ paddingTop: '0', marginTop: "10px" }}>
          <Fade direction="right" triggerOnce={true}>
            <Box className='main_image' display={"flex"} justifyContent={"center"}>
              <img loading='lazy' src={image} alt="" className={`myImage`} />
            </Box>
          </Fade>
        </Grid>
      </Grid>

    </Box >

  )
}

export default Home