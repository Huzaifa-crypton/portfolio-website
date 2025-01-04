import React from "react";
import Linedin from "../../../images/Linkedin.png";
import "./Socials.css";
import Whatsapp from "../../../images/Whatsapp.png";
import Resume from "../../../images/resume.png";
import Gmail from "../../../images/gmail.png";
import { Paper, Grid, Typography } from "@mui/material";

const Socials = () => {
    return (
        <Grid container className='contact_list' display="flex" sx={{ marginTop: '0px', padding:"0px" }} 
            spacing={3}
            justifyContent="center"
            alignItems="center">
            {/* Linked in */}
            <Grid item xs={12} display={'flex'} justifyContent={"center"} alignItems={"center"}>
                <a style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/muhammad-huzaifa-khan-ab961b228/'>

                    <Paper elevation={1}

                        className='contact_item'
                        sx={
                            {
                                display: 'flex',
                                alignItems: "center",
                                height: "80px",
                                width: '300px',
                                maxWidth: '300px',
                                minWidth:"30px",
                                backgroundColor: 'rgb(225, 226, 246)',

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
            <Grid item xs={12} display={'flex'} justifyContent={"center"} alignItems={"center"}>
                {/* Gmail */}
                <a style={{ textDecoration: 'none' }} href="mailto:mhuzaifak.work@gmail.com?subject='Just wanted to leave a hello message'&body='Hey. I am emailing you through your website.'">
                    <Paper elevation={1}
                        className='contact_item'
                        sx={
                            {
                                display: 'flex',
                                alignItems: "center",
                                height: "80px",
                                width: '300px',
                                backgroundColor: 'rgb(242, 211, 212)',
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
            <Grid item xs={12} display={'flex'} justifyContent={"center"} alignItems={"center"}>
                <a
                    href={"https://drive.google.com/file/d/1uJOnd6izLJhPHiIJhZy3ShU04aEO09Mt/view"}
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
                                backgroundColor: 'rgb(241, 238, 211)',

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
            <Grid item xs={12} display={'flex'} justifyContent={"center"} alignItems={"center"}>

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

    );
}
export default Socials;