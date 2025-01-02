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
import Socials from './Socials/Socials';
import ContactForm from './Form/ContactForm';
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
                        <Typography variant='h2' fontSize='3rem'>
                            Have a 
                            <span style={
                                { color: "rgb(237, 177, 11)" }
                            }>
                                &nbsp;Project&nbsp;
                            </span>
                                or a 
                                <span style={
                                { color: "rgb(237, 177, 11)" }
                            }>
                                &nbsp;Question&nbsp;
                            </span>
                                for me?
                        </Typography>


                    </Grid>
                    <Grid item
                        xs={12}
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Typography fontSize='1.1rem'>
                        I'd love to hear from you! Feel free to reach out to me with any inquiries
                        </Typography>
                    </Grid>
                    <Grid item
                        xs={12} md={3}>
                        <Socials />
                    </Grid>
                    <Grid item xs={0} md={3} display={"flex"} justifyContent="start">
                        <ContactForm></ContactForm>
                    </Grid>
                </Grid>
            </Fade>
        </Box >

    );
}

export default Contact
