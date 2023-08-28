import React from 'react'
import "./Home.css"
import image from "../../images/MuhammadHuzaifaKhan.jpeg"
import { Grid, Box, Typography } from '@mui/material'
import ReactTyped from "react-typed";
// import image from "./pic.jfif"

const Home = ({ landscape }) => {
  return (
    <Box>
      <Grid spacing={3} container sx={{ marginTop: '90px', justifyContent: "center" }}>
        <Grid item md={6}>
          <Box className="main_panel">
            <Typography variant='h3'>Hi, I'm <strong>Muhammad Huzaifa Khan</strong>🙋‍♂️</Typography>
            <br />
            <Typography variant='h4' color="rgb(237, 177, 11)">

              <ReactTyped
                strings={["Software Developer", "Published Author", "Computer Science Student"]}
                typeSpeed={70}
                loop
                backSpeed={20}
                showCursor={true}
              />
            </Typography>
            <br />
            <Typography variant='h5'>Self-driven and determined individual with a passion for&nbsp;<strong>Software Engineering</strong>.
              Revolutionizing Healthcare by empowering the sector through &nbsp;<strong>Computer Vision</strong>&nbsp;and <strong>Machine Learning</strong>.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box className='main_image'>
            <img src={image} alt="" className={`myImage`} />
          </Box>
        </Grid>
      </Grid>

    </Box >

  )
}

export default Home