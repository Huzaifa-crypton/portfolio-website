import * as React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Chip, Avatar, Button } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import DefaultImage from "../../images/default-image.png";

export default function GenericCard({ image = null, title = null, description = null, techStack = null, githubUrl = null, liveUrl = null }) {
    return (
        <Card
            sx={{
                maxWidth: 350,
                minHeight: "100%",
                borderRadius: '16px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.13)',
                backdropFilter: 'blur(5px)',
                overflow: 'hidden',
                padding: 2,
                display: 'flex', // Makes the card a flex container
                flexDirection: 'column', // Arranges children vertically
            }}
        >
            {/* Project Image */}
            <CardMedia
                component="img"
                alt={title}
                height="180"
                image={image || DefaultImage}
                sx={{ objectFit: 'cover', backgroundColor:"rgb(0, 0, 0)", borderRadius: "10px" }}
            />

            {/* Content */}
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1, // Makes this section take available space
                    padding: 0,
                    marginTop: "20px",
                }}
            >
                {/* Title */}
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'bold', color: 'whitesmoke', padding: 0, margin: 0 }}
                >
                    {title}
                </Typography>

                {/* Description */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '8px' }}
                >
                    {description}
                </Typography>

                {/* Tech Stack */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        overflowX: 'auto',
                        marginBottom: '16px',
                        marginTop: '10px',
                        '&::-webkit-scrollbar': {
                            height: '1px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(255, 255, 255, 0.17)',
                            borderRadius: '0',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: 'transparent',
                        },
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(255, 255, 255, 0.17) transparent',
                    }}
                >
                    {techStack.map((tech, index) => (
                        <Chip
                            key={index}
                            avatar={<Avatar alt={tech.name} src={tech.icon} />}
                            label={tech.name}
                            sx={{
                                marginBottom:"10px",
                                fontSize: "11px",
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: 'whitesmoke',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}
                        />
                    ))}
                </Box>

                {/* Action Buttons */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        marginTop: 'auto', // Pushes this section to the bottom
                    }}
                >
                    <Button
                        variant="contained"
                        startIcon={<GitHub />}
                        href={githubUrl}
                        target="_blank"
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.22)',
                            color: 'rgb(177, 133, 14)',
                            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.9)' }
                        }}
                    >
                        GitHub
                    </Button>
                    {liveUrl && (
                        <Button
                            variant="contained"
                            startIcon={<Launch />}
                            href={liveUrl}
                            target="_blank"
                            sx={{
                                backgroundColor: 'rgba(0, 0, 0, 0.22)',
                                color: 'rgb(177, 133, 14)',
                                '&:hover': { backgroundColor: 'rgba(177, 134, 14, 0.27)' }
                            }}
                        >
                            Live
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>

    );
}
