import React from 'react'
import "./Contact.css"
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Fade } from "react-awesome-reveal";
import Socials from './Socials/Socials';
import ContactForm from './Form/ContactForm';
const Contact = () => {
    return (
        <Fade direction='up' triggerOnce={true}>
            <Grid container
                padding={0}
                className='contact_section' justifyContent={"center"}>
                <Grid
                    item
                    xs={11}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    padding={2}
                >
                    <Typography
                        variant="h3"
                        textAlign="center"// Responsive font size
                        color="whitesmoke"   
                        lineHeight={1}
                    >
                        Have a {""}
                        <span
                            style={{
                                color: "rgb(237, 177, 11)",
                            }}
                        >
                            Project
                        </span>
                        {" "}or {" "}
                        <span
                            style={{
                                color: "rgb(237, 177, 11)",
                            }}
                        >
                            Question{" "}
                        </span>
                        for me?
                    </Typography>
                </Grid>

                <Grid item
                    xs={11}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography fontSize='1.1rem' color={"grey"} textAlign={"center"}>
                        I'd love to hear from you! Feel free to reach out to me with any inquiries
                    </Typography>
                </Grid>
                <Grid container display={"flex"} justifyContent={"center"} sx={{padding:0, margin:0, marginTop:2}} spacing={3}>
                    <Grid item justifyContent={"center"} sx={{padding:0, margin:0}}
                        xs={11} md={4} >
                        <Socials />
                    </Grid>
                    <Grid item justifyContent={"center"}  sx={{padding:0, margin:0}}
                        xs={11} md={4}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Grid>
        </Fade>

    );
}

export default Contact
