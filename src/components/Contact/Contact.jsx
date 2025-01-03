import React from 'react'
import "./Contact.css"
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Fade } from "react-awesome-reveal";
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
                                or 
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
                        xs={12} md={4}>
                        <Socials />
                    </Grid>
                    <Grid item md={5} display={"flex"} justifyContent="start">
                        <ContactForm></ContactForm>
                    </Grid>
                </Grid>
            </Fade>
        </Box >

    );
}

export default Contact
