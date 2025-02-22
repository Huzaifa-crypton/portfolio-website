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
                    <Typography margin={0} lineHeight={1} textAlign="center" variant="h1" fontSize={"2.8rem"} fontWeight="bold" sx={{ marginTop: '0px', color: 'whitesmoke' }}
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
                <Grid container display={"flex"} justifyContent={"center"} style={{ paddingLeft: 0, margin: 0, marginTop: 2 }} spacing={3} rowGap={4} columnGap={5}>
                    <Grid item justifyContent={"center"} style={{paddingLeft: 0, paddingRight:"20px"}} sx={{  margin: 0 }}
                        xs={11} md={4} >
                        <Socials />
                    </Grid>
                    <Grid item justifyContent={"center"} style={{paddingLeft: 0}} sx={{ margin: 0 }}
                        xs={11} md={4}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Grid>
        </Fade>

    );
}

export default Contact
