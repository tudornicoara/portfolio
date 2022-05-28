import Background from "../Background/Background";
import {Box, Typography} from "@mui/material";
import React from "react";

interface Props {
    isMobile: boolean;
}

export default function Intro({isMobile}: Props) {
    return (
        <>
            <Background />
            <Box ml={isMobile ? '20vw' : '5vw'} height='100vh'>
                <Typography className="animate__animated animate__fadeIn" variant='h2' color='white' pt='30vh'>Hi</Typography>
                <Typography className="animate__animated animate__fadeIn animate__delay-1s" variant='h2' color='white'>I'm <b style={{color: '#dc5a21'}}>Tudor</b></Typography>
                <Typography className="animate__animated animate__fadeIn animate__delay-2s" variant='h2' color='white'>I'm a fullstack web developer</Typography>
            </Box>
        </>      
    )
}