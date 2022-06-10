import Background from "../Background/Background";
import {Box, Grid, Typography} from "@mui/material";
import React from "react";

interface Props {
    isMobile: boolean;
}

export default function Intro({isMobile}: Props) {
    return (
        <>
            <Background isMobile={isMobile} />
            <Box ml={isMobile ? '5vw' : '10vw'} height='100vh'>
                <Grid container pt='30vh'>
                    <Grid item xs={12} sm={8}>
                            <Typography className="animate__animated animate__fadeIn" variant='h2' color='white'>Hi</Typography>
                            <Typography className="animate__animated animate__fadeIn animate__delay-1s" variant='h2' color='white'>I'm <b style={{color: '#dc5a21'}}>Tudor</b></Typography>
                            <Typography className="animate__animated animate__fadeIn animate__delay-2s" variant='h2' color='white'>I'm a fullstack web developer</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <svg className="animate__animated animate__fadeIn animate__delay-1s" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{width: '300px'}}>
                            <defs>
                                <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                                    <image href={require('../../assets/avatar.png')} x="-43" width="180" height="100" />
                                </pattern>
                            </defs>
                            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" stroke='#dc5a21' strokeWidth='1px'/>
                        </svg>
                    </Grid>
                </Grid>
            </Box>
        </>      
    )
}