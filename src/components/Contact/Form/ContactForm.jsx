import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Paper } from '@mui/material';
import ReactConfetti from 'react-confetti';
import './ContactForm.css';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit , reset] = useForm("xovvpelj");
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
    console.log(state.succeeded)

    useEffect(() => {
        if (state.succeeded) {
            setIsSubmitted(true);
        }
        else{
            
        }
    }, [state.succeeded]);

    return (
            <Paper
                elevation={3}
                sx={{
                    padding: '20px',
                    borderRadius: '8px',
                    margin:0,
                    position: 'relative',
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                className="contact-form"
            >

                <form  onSubmit={handleSubmit} style={{ fontFamily: 'Poppins', margin:0, padding:0 }}>
                {isSubmitted && <ReactConfetti recycle={false} height={300} onConfettiComplete={() => {setIsSubmitted(false);reset()}} />}
                    <Grid container spacing={3} display="flex" direction="row" alignItems="center"  sx={{padding:"0", margin:0}}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.05)", // Lighter background than form
                                    borderRadius: "5px", // Rounded corners
                                    '& .MuiInputBase-root': {
                                        fontSize: '12px', // Text size
                                        border: 'none', // No border by default
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'grey', // Text color
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            border: 'none', // Remove default border
                                        },
                                        '&:hover fieldset': {
                                            border: 'none', // Keep no border on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            border: '2px solid #ffc70f', // Yellow border when focused
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'grey', // Label color
                                        fontSize: '12px', // Text size
                                    },
                                    '& .Mui-focused .MuiInputLabel-root': {
                                        color: '#ffc70f', // Label color when focused
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                type="email"
                                sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: "5px",
                                    '& .MuiInputBase-root': {
                                        border: 'none',
                                        fontSize: '12px', // Text size
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'grey',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            border: 'none',
                                        },
                                        '&:hover fieldset': {
                                            border: 'none',
                                        },
                                        '&.Mui-focused fieldset': {
                                            border: '2px solid #ffc70f',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'grey',
                                        fontSize: '12px', // Text size
                                    },
                                    '& .Mui-focused .MuiInputLabel-root': {
                                        color: '#ffc70f',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
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
                                sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: "5px",
                                    '& .MuiInputBase-root': {
                                        fontSize: '12px', // Text size
                                        border: 'none',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'grey',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            border: 'none',
                                        },
                                        '&:hover fieldset': {
                                            border: 'none',
                                        },
                                        '&.Mui-focused fieldset': {
                                            border: '2px solid #ffc70f',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'grey',
                                        fontSize: '12px', // Text size
                                    },
                                    '& .Mui-focused .MuiInputLabel-root': {
                                        color: '#ffc70f',
                                    },
                                }}
                            />
                        </Grid>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                disabled={state.submitting}
                                variant="contained"
                                fullWidth
                                sx={{
                                    borderRadius: '50px',
                                    boxShadow: '0px 0px 10px 1px rgb(177, 133, 14)',
                                    backgroundColor: "rgb(177, 133, 14)",
                                    color: "whitesmoke",
                                    "&:hover": {
                                      backgroundColor: "rgb(150, 113, 12)", // Darker shade on hover
                                    }
                                  }}
                            >
                                Send Message
                            </Button>

                            {isSubmitted && (
                                <div className="success-message" style={{ color: '#ffc70f', fontSize: '18px', marginTop: '10px' }}>
                                    Message Sent Successfully!
                                </div>
                            )}
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        
    );
};

export default ContactForm;
