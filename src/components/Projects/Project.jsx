import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import "./Project.css";
import GenericCard from '../Cards/Cards';
import ReactIcon from "../../images/React.png";
import Angular from "../../images/Angular.png";
import CSharp from "../../images/C#.png";
import Python from "../../images/Python.png";
import Django from "../../images/Django.png";
import Figma from "../../images/Figma.png";
import Firebase from "../../images/Firebase.png";
import MaterialUI from "../../images/Material UI.png";
import Matplotlib from "../../images/Matplotlib.png";
import MongoDB from "../../images/MongoDB.png";
import NETCore from "../../images/NET core.png";
import NodeJS from "../../images/Node.js.png";
import Numpy from "../../images/NumPy.png";
import Pandas from "../../images/Pandas.png";
import PostgreSQL from "../../images/PostgresSQL.png";
import ScikitLearn from "../../images/scikit-learn.png";
import Selenium from "../../images/Selenium.png";
import SQLite from "../../images/SQLite.png";
import { Fade } from 'react-awesome-reveal';

function Project() {
    const projects = [
        {
            image: "",
            title: "Car Data Analysis",
            description: "A project analyzing vehicle data using Python and Pandas for insights.",
            techStack: [
                { name: "Pandas", icon: Pandas },
                { name: "Python", icon: Python },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/Pandas-Learning",
        },
        {
            image: "",
            title: "Numpy Learning",
            description: "Comprehensive learning of Numpy arrays and mathematical operations in Python.",
            techStack: [
                { name: "Numpy", icon: Numpy },
                { name: "Python", icon: Python },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/Numpy-Learning",
        },
        {
            image: "",
            title: "Smart Nursing Portal",
            description: "A portal for nurses integrating AI and user-friendly design for better management.",
            techStack: [
                { name: "Python", icon: Python },
                { name: "PyQt5", icon: Python },
                { name: "Django", icon: Django },
                { name: "React", icon: ReactIcon },
                { name: "Material-UI", icon: MaterialUI },
                { name: "PostgreSQL", icon: PostgreSQL },
                { name: "Figma", icon: Figma },
            ],
        },
        {
            image: "",
            title: "Image Search",
            description: "A React app for searching images using API integration.",
            techStack: [
                { name: "React", icon: ReactIcon },
                { name: "API Integration", icon: "💻" },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/react-search-images",
        },
        {
            image: "",
            title: "React Components",
            description: "A project showcasing reusable React components for liking animal photos.",
            techStack: [
                { name: "React", icon: ReactIcon },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/react-animal-likes",
        },
        {
            image: "",
            title: "N Tier Architecture",
            description: "A multi-tier CRUD app with robust API and layered architecture.",
            techStack: [
                { name: ".NET", icon: NETCore },
                { name: "API", icon: "💻" },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/ASP.NET-Multi-Tier-Architecture-Project",
        },
        {
            image: "",
            title: "Heart Disease Prediction",
            description: "A machine learning project predicting heart disease using Python libraries.",
            techStack: [
                { name: "Python", icon: Python },
                { name: "Scikit-Learn", icon: ScikitLearn },
                { name: "Pandas", icon: Pandas },
                { name: "Matplotlib", icon: Matplotlib },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/heart-disease-prediction-project",
        },
        {
            image: "",
            title: "Understanding Scikit-Learn",
            description: "Learning Scikit-Learn library for efficient machine learning workflows.",
            techStack: [
                { name: "Python", icon: Python },
                { name: "Scikit-Learn", icon: ScikitLearn },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/Scikit-learn-learning",
        },
        {
            image: "",
            title: "Kaam Kaaj",
            description: "A job portal built with Angular, Node.js, and MongoDB for easy hiring.",
            techStack: [
                { name: "Angular", icon: Angular },
                { name: "Node.js", icon: NodeJS },
                { name: "MongoDB", icon: MongoDB },
                { name: "Figma", icon: Figma },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/Kaam-Kaaj-FrontEnd",
        },
        {
            image: "",
            title: "Attendance Management System",
            description: "A mobile app for managing attendance using React Native and SQLite.",
            techStack: [
                { name: "React Native", icon: ReactIcon },
                { name: "SQLite", icon: SQLite },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/Attendance-Management-System",
        },
        {
            image: "",
            title: "Netflix Clone",
            description: "A Netflix-like application with React and Firebase for streaming.",
            techStack: [
                { name: "React", icon: ReactIcon },
                { name: "Node", icon: NodeJS },
                { name: "Firebase", icon: Firebase },
            ],
            liveUrl: "https://netflix-clone-d4680.web.app/",
            githubUrl: "https://github.com/Huzaifa-crypton/Netflix-Clone",
        },
        {
            image: "",
            title: "Spotify Clone",
            description: "A Spotify clone with Material-UI and Firebase integration for music streaming.",
            techStack: [
                { name: "React", icon: ReactIcon },
                { name: "Node.js", icon: NodeJS },
                { name: "Firebase", icon: Firebase },
                { name: "Material-UI", icon: MaterialUI },
            ],
            liveUrl: "https://spotify-clone-6373a.web.app/",
            githubUrl: "https://github.com/Huzaifa-crypton/Spotify-Clone",
        },
        {
            image: "",
            title: "Ambulance Management System",
            description: "A desktop application for managing ambulances using data structures.",
            techStack: [
                { name: ".NET", icon: NETCore },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/AmbulanceServiceSystem",
        },
        {
            image: "",
            title: "Bouncy Douncy",
            description: "A fun game developed using C# and object-oriented programming principles.",
            techStack: [
                { name: "C#", icon: CSharp },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/BouncyDouncy",
        },
        {
            image: "",
            title: "Web Scraping and Algorithm Analyzer",
            description: "An algorithm visualizer using Selenium and PyQt5 for sorting and searching.",
            techStack: [
                { name: "PyQt5", icon: Python },
                { name: "Selenium", icon: Selenium },
            ],
            githubUrl: "https://github.com/Huzaifa-crypton/Searching-and-Sorting-Algorithm-Visualizer",
        },
    ];

    const [visibleCount, setVisibleCount] = useState(6); // State to track visible projects

    const handleShowMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 6, projects.length));
    };

    const handleShowLess = () => {
        setVisibleCount(6);
    };

    return (
        <Fade direction='up' triggerOnce={true}>
        <Grid container spacing={1} className='contact_section' style={{ padding: 0 }} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Typography variant='h3' color={"whitesmoke"} fontSize={"2.8rem"} fontWeight="bold">
                    My&nbsp;
                </Typography>
                <Typography variant='h3' fontSize={"2.8rem"} fontWeight="bold">
                    <span style={{ color: "rgb(237, 177, 11)" }}>Projects</span>
                </Typography>
            </Grid>
            <Grid item xs={11} display="flex" justifyContent="center" alignItems="center">
                <Typography fontSize='1.1rem' color={"grey"} textAlign={"center"}>
                    Check out some of my recent projects that I have worked on
                </Typography>
            </Grid>
            <Grid item container display={"flex"} columnGap={4} rowGap={4} marginTop={3} justifyContent={"center"} maxWidth={"82rem"}>
                {projects.slice(0, visibleCount).map((project, index) => (
                    <Grid 
                        item 
                        xs={12} 
                        md={3} 
                        display="flex" 
                        justifyContent="center" 
                        alignItems="center" 
                        key={index}
                    >
                        <GenericCard {...project} />
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" marginTop={3}>
                {visibleCount < projects.length ? (
                    <button onClick={handleShowMore} style={buttonStyle}>
                        Show More
                    </button>
                ) : (
                    <button onClick={handleShowLess} style={buttonStyle}>
                        Show Less
                    </button>
                )}
            </Grid>
        </Grid>
        </Fade>
    );
}

const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "rgba(237, 177, 11, 0.69)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
};

export default Project;
