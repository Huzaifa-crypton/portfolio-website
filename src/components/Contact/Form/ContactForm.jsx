import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Paper } from '@mui/material';
import ReactConfetti from 'react-confetti'; // Importing the confetti effect
import './ContactForm.css'; // Import the CSS for custom styling
import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () => {
    const [state, handleSubmit] = useForm("xovvpelj");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    useEffect(() => {
        if (state.succeeded) {
            setIsSubmitted(true);
        }
    }, [state.succeeded]);

    return (
        <>
            <Paper elevation={3} sx={{ padding: '20px', borderRadius: '8px', position: 'relative', minWidth: "40vw" }} className="contact-form">
                {/* Confetti Animation */}
                {isSubmitted && <ReactConfetti recycle={false} height={300} onConfettiComplete={() => setIsSubmitted(false)} />}

                <form onSubmit={handleSubmit} style={{ fontFamily: 'Poppins' }}>
                    <Grid container spacing={3} display="flex" direction="row" alignItems="center">
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                type="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                        <Grid item xs={12} md={12} sm={12}>
                            <Button
                                type="submit"
                                disabled={state.submitting}
                                variant="contained"
                                sx={{
                                    "&:hover": { backgroundColor: "#ffc70f" , color:"black" }, // Correct syntax for hover
                                    backgroundColor: 'black',
                                    color: 'white',
                                    width: '100%',
                                    borderRadius: '50px',
                                    boxShadow: '0px 0px 20px 0px rgb(129, 129, 129)'
                                }}
                            >
                                Send Message
                            </Button>

                            {isSubmitted &&
                                (<div className="success-message">
                                    Message Sent Successfully!
                                </div>)}
                        </Grid>
                    </Grid>
                </form>

            </Paper>
        </>
    );
};

export default ContactForm;
