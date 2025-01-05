import React from 'react'
import "./Home.css"
import image from "../../images/grid.png"
import { Grid, Box, Typography, Chip, css, Button, Paper } from '@mui/material'
import Slider from "react-slick";
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <Box
      sx={{ // Full height of the viewport
        display: "flex", // Flexbox layout
        justifyContent: "center", // Center the content horizontally
        overflow: "hidden", // Ensures content doesn't exceed the box boundaries
        backdropFilter: "blur(70px)", // Blur effect for the content insid
        alignItems:"center",
        "::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          boxSizing:'border-box',
          height: "100%",
          backgroundImage: `url(${image})`, // Combine black overlay and image
          backgroundSize: "20% 50%",
          backgroundRepeat: "repeat",
          zIndex: -1,
          transform: "skewX(0deg) skewY(0deg) rotate(20deg) translateZ(10)",
          opacity: 0.1,
        },
      }}
    >

      <Grid container sx={{marginTop:"90px",}} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={0} spacing={2}>
        {/* Chip */}
        <Grid item xs={11} margin={0} padding={0} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Chip
            label="👋 Hi, I'm Huzaifa"
            sx={{
              borderRadius: '50px',
              maxWidth: "300px",
              color: "grey",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              border: "1px solid grey",
              fontSize: "1.1rem",
              padding: '10px',
              paddingTop: "20px",
              paddingBottom: "20px"
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={11} md={8} marginTop={0} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography margin={0} lineHeight={1} textAlign="center" variant="h1" fontSize={"3.2rem"} fontWeight="bold" sx={{ marginTop: '0px', color: 'whitesmoke' }}>
            Crafting{' '}
            <Box component="span" sx={{ marginTop: "0px", color: "rgb(177, 133, 14)" }}>
              Enterprise Solutions
            </Box>{' '}
            as a Software Engineer
          </Typography>

        </Grid>
        <Grid item xs={11} display={"flex"} sx={{ margin: '0px', padding: '0px' }} margin={0} padding={0} justifyContent={"center"} alignItems={"center"}>
          <Typography margin={0} lineHeight={1} textAlign={'center'} padding={0} sx={{ margin: '0px', padding: '0px' }} variant="h6" fontSize={"1.3rem"} color="rgb(143, 143, 143)">
            Engineering dynamic, user-centric, and scalable solutions.
          </Typography>
        </Grid>
        <Grid item xs={11} display={"flex"} sx={{ margin: '0px', padding: '0px' }} justifyContent={"center"} alignItems={"center"}>
          <Button
            variant="contained"
            sx={{
              marginRight: '10px',
              borderRadius: '50px',
              boxShadow: '0px 0px 10px 1px rgb(177, 133, 14)',
              backgroundColor: "rgb(177, 133, 14)",
              padding:1,
              fontSize:'0.8rem',
              fontFamily:"Roboto, Helvetica, Arial, sans-serif",
              width:"200px",
              color: "whitesmoke",
              "&:hover": {
                backgroundColor: "rgb(150, 113, 12)", // Darker shade on hover
              }
            }}
          >
            View Projects
          </Button>

          <Button
            variant="contained"
            href="#contact"
            sx={{
              marginY: "0px",
              marginLeft: '10px',
              borderRadius: '50px',
              boxShadow: '0px 0px 10px 1px rgb(177, 133, 14)',
              backgroundColor: "rgb(177, 133, 14)",
              color: "whitesmoke",
              padding:1,
              fontFamily:"Roboto, Helvetica, Arial, sans-serif",
              fontSize:'0.8rem',
              width:"200px",
              "&:hover": {
                backgroundColor: "rgb(150, 113, 12)", // Darker shade on hover
              }
            }}
          >
            Contact Me
          </Button>

        </Grid>
        {/* Slider */}
        <Grid marginTop={5} item xs={11} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box sx={{ width: "100%" }}>
            <Slider {...settings}>
              {[
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Python",
                "Django",
                "Scikit-Learn",
                "Numpy",
                "Pandas",
                "Matplotlib",
                "Angular",
                "Bootstrap",
                "Web Development",
                "Node JS",
                "Express JS",
                "SQL",
              ].map((skill, index) => (
                <div key={index}>
                  <Chip
                    label={skill}
                    variant="outlined"
                    size="medium"
                    sx={{ color: "white", minWidth: "80px", marginLeft: "10px", border: "2px solid grey" }}
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap" // Ensures items wrap on smaller screens
        >
          <Paper
            sx={{
              borderRadius: "10px",
              width: { xs: "40%", sm: "45%", md: "170px" },
              margin: { xs: "10px 10px", sm: "10px" },
              color: "whitesmoke",
              padding: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.12)",
              border: "2px solid rgba(255,255,255,0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography textAlign="center" variant="h4" fontWeight="bold">
              3
              <Box component="span" sx={{ color: "rgb(177, 133, 14)", fontWeight: "bold" }}>
                .
              </Box>
              94
            </Typography>
            <Typography textAlign="center" variant="h5" fontSize="13px">
              CGPA
            </Typography>
          </Paper>

          <Paper
            sx={{
              borderRadius: "10px",
              width: { xs: "40%", sm: "45%", md: "170px" },
              margin: { xs: "10px 10px", sm: "10px" },
              color: "whitesmoke",
              padding: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.12)",
              border: "2px solid rgba(255,255,255,0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography textAlign="center" variant="h4" fontWeight="bold">
              1
              <Box component="span" sx={{ color: "rgb(177, 133, 14)", fontWeight: "normal" }}>
                +
              </Box>
            </Typography>
            <Typography textAlign="center" variant="h6" fontSize="13px">
              Years of Experience
            </Typography>
          </Paper>

          <Paper
            sx={{
              borderRadius: "10px",
              width: { xs: "40%", sm: "45%", md: "170px" },
              margin: { xs: "10px 10px", sm: "10px" },
              color: "whitesmoke",
              padding: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.12)",
              border: "2px solid rgba(255,255,255,0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography textAlign="center" variant="h4" fontWeight="bold">
              SWE
            </Typography>
            <Typography textAlign="center" variant="h6" fontSize="13px">
              Current Position
            </Typography>
          </Paper>

          <Paper
            sx={{
              borderRadius: "10px",
              width: { xs: "40%", sm: "45%", md: "170px" },
              margin: { xs: "10px 10px", sm: "10px" },
              color: "whitesmoke",
              padding: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.12)",
              border: "2px solid rgba(255,255,255,0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography textAlign="center" variant="h4" fontWeight="bold">
              1🥇
            </Typography>
            <Typography textAlign="center" variant="h5" fontSize="13px">
              Gold Medal
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Home