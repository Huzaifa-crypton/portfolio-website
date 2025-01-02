import React, { useState } from 'react';
import { Grid, TextField, Button, Paper } from '@mui/material';
import ReactConfetti from 'react-confetti'; // Importing the confetti effect
import './ContactForm.css'; // Import the CSS for custom styling

const ContactForm = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Send the form data as a JSON payload
          })
            .then(response => response.json()) // Parse JSON response
            .then(data => {
              console.log('Success:', data);
              setIsSubmitted(true); // Trigger success effect
            })
            .catch((error) => {
              console.error('Error:', error);
              // Optionally show an error message to the user
            });
        
        setIsSubmitted(true);

    };

    return (
        <>
            <Paper elevation={3} sx={{ padding: '20px', borderRadius: '8px', position: 'relative' }} className="contact-form">
                {/* Confetti Animation */}
                {isSubmitted && <ReactConfetti recycle={false} height={300} onConfettiComplete={() => setIsSubmitted(false)} />}

                <form onSubmit={handleSubmit} style={{fontFamily: 'Poppins'}}>	
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
                        <Grid item xs={12} md={12} sm={12}>
                            <Button type="submit" variant="contained" sx={{ backgroundColor: 'black', color: 'white' }}>
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
