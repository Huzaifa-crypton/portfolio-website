import React from 'react'

import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import Fade from 'react-reveal/Fade';
import "./Project.css"
function Project() {
    return (
        <Box sx={
            { flexGrow: 1 }
        }>
            <Fade bottom>
                <Grid container
                    spacing={3}
                    className='contact_section'>
                    <Grid item
                        xs={12}
                        display="flex"
                        justifyContent="center"
                        alignItems="center">

                        <Typography variant='h3'>
                            My&nbsp;
                        </Typography>
                        <Typography variant='h3'>
                            <span style={
                                { color: "rgb(237, 177, 11)" }
                            }>Projects
                            </span>
                        </Typography>

                    </Grid>
                    <Grid item
                        xs={12}>
                    </Grid>
                </Grid>
            </Fade>
        </Box>

    )
}

export default Project