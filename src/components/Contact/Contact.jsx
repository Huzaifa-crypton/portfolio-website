import React from 'react'
import "./Contact.css"
import { Box, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Whatsapp from "../../images/Whatsapp.png";
import Resume from "../../images/resume.png";
import Gmail from "../../images/gmail.png";
import { Fade } from "react-awesome-reveal";
import Linedin from "../../images/Linkedin.png";
import Person from "../../images/contact_illustration.png"
import PDF from "../../files/Muhammad_Huzaifa_Khan_Latest_Resume.pdf"
const Contact = () => {
    return (
        <Box sx={
            { flexGrow: 1, marginTop: '0px' }
        }>
            <Fade direction='up' triggerOnce={true}>
                <Grid container
                    spacing={3}
                    className='contact_section' justifyContent={"center"}>
                    <Grid item
                        xs={12}
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Typography variant='h3'>
                            <span style={
                                { color: "rgb(237, 177, 11)" }
                            }>Connect&nbsp;
                            </span>
                        </Typography>
                        <Typography variant='h3'>
                            with me
                        </Typography>


                    </Grid>
                    <Grid item
                        xs={12} md={3}>
                        <Grid container className='contact_list' display="flex" flexDirection="column"
                            spacing={3}
                            justifyContent="end"
                            alignItems="center">
                            {/* Linked in */}
                            <Grid item>
                                <a style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/muhammad-huzaifa-khan-ab961b228/'>

                                    <Paper elevation={1}
                                        onClick={{}}
                                        className='contact_item'
                                        sx={
                                            {
                                                display: 'flex',
                                                alignItems: "center",
                                                height: "80px",
                                                width: '300px',
                                                backgroundColor: 'rgb(225, 226, 246)'
                                            }
                                        }>
                                        <Grid container>
                                            <Grid item
                                                xs={3}
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="center">
                                                <img src={Linedin}
                                                    alt="linkedin_icon"
                                                    style={
                                                        {
                                                            objectFit: 'contain',
                                                            height: '70px'
                                                        }
                                                    }></img>
                                            </Grid>
                                            <Grid item display="flex" justifyContent="center" alignItems="center">
                                                <Typography variant='caption'>
                                                    Let's Connect
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </a>

                            </Grid>
                            <Grid item>
                                {/* Gmail */}
                                <a style={{ textDecoration: 'none' }} href="mailto:huzaifa18072002@gmail.com?subject='Just wanted to leave a hello message'&body='Hey. I am emailing you through your website.'">
                                    <Paper elevation={1}
                                        className='contact_item'
                                        sx={
                                            {
                                                display: 'flex',
                                                alignItems: "center",
                                                height: "80px",
                                                width: '300px',
                                                backgroundColor: 'rgb(242, 211, 212)'
                                            }
                                        }>
                                        <Grid container>
                                            <Grid item
                                                xs={3}
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="center">
                                                <img src={Gmail}
                                                    alt="gmail_icon"
                                                    style={
                                                        {
                                                            objectFit: 'contain',
                                                            height: '40px'
                                                        }
                                                    }></img>
                                            </Grid>
                                            <Grid item display="flex" justifyContent="center" alignItems="center">
                                                <Typography variant='caption'>
                                                    Email Me
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </a>

                            </Grid>
                            {/* Resume */}
                            <Grid item>
                                <a
                                    href={PDF}
                                    // download="Huzaifa_Khan_Resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Paper elevation={1}
                                        className='contact_item'
                                        sx={
                                            {
                                                display: 'flex',
                                                alignItems: "center",
                                                height: "80px",
                                                width: '300px',
                                                backgroundColor: 'rgb(241, 238, 211)'
                                            }
                                        }>

                                        <Grid container>
                                            <Grid item
                                                xs={3}
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="center">
                                                <img src={Resume} alt="resume_icon"
                                                    style={
                                                        {
                                                            objectFit: 'contain',
                                                            height: '70px'
                                                        }
                                                    }></img>
                                            </Grid>
                                            <Grid item display="flex" justifyContent="center" alignItems="center">
                                                <Typography variant='caption'>
                                                    Download Resume
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </a>
                            </Grid>
                            <Grid item>

                                {/* Whatsapp */}
                                <a href='https://api.whatsapp.com/send/?phone=923431544033' style={{ textDecoration: 'none' }}>

                                    <Paper elevation={1}
                                        className='contact_item'
                                        sx={
                                            {
                                                display: 'flex',
                                                alignItems: "center",
                                                height: "80px",
                                                width: '300px',
                                                backgroundColor: 'rgb(211, 242, 210)'
                                            }
                                        }>
                                        <Grid container>
                                            <Grid item
                                                xs={3}
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="center">
                                                <img src={Whatsapp}
                                                    alt="whatsapp_icon"
                                                    style={
                                                        {
                                                            objectFit: 'contain',
                                                            height: '50px'
                                                        }
                                                    }></img>
                                            </Grid>
                                            <Grid item display="flex" justifyContent="center" alignItems="center">
                                                <Typography variant='caption'>
                                                    Text Me
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={0} md={3} display={"flex"} justifyContent="start">

                        <a href="https://www.freepik.com/free-ai-image/view-3d-businessman-taking-selfie_59994349.htm#query=3d%20illustration%20standing&position=30&from_view=search&track=ais">
                            <img alt="person_illustration" src={Person} style={{ objectFit: 'contain', maxHeight: '25rem' }}></img>
                        </a>
                    </Grid>
                </Grid>
            </Fade>
        </Box >

    );
}

export default Contact
