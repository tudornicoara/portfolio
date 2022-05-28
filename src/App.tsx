import React from 'react';
import './App.css';
import {Box, Typography, useMediaQuery} from "@mui/material";
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useTheme } from '@mui/material/styles';
import Intro from "./components/Intro/Intro";

function App() {
    const theme = useTheme();
    const isMobile = !useMediaQuery(theme.breakpoints.down('sm'));
    
  return (
      <>
          <Intro isMobile={isMobile} />
          <div className='spacer layer1'/>
          <Box bgcolor='#1e1f1e' height='100vh'>
              <AnimationOnScroll animateIn="animate__fadeIn">
                  <Typography variant='h2' textAlign='center' color='white' pt={20}>Hello</Typography>
              </AnimationOnScroll>
          </Box>
          <Box bgcolor='#1e1f1e'>
              <AnimationOnScroll animateIn="animate__fadeIn">
                  <Typography variant='h2' textAlign='center' color='white' pt={20}>Hello</Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn">
                  <Typography variant='h2' textAlign='center' color='white' pt={20}>Hello</Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn">
                  <Typography variant='h2' textAlign='center' color='white' pt={20}>Hello</Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn">
                  <Typography variant='h2' textAlign='center' color='white' pt={20}>Hello</Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn">
                  <Typography variant='h2' textAlign='center' color='white' pt={20}>Hello</Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn">
                  <Typography variant='h2' textAlign='center' color='white' pt={20}>Hello</Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn">
                  <Typography variant='h2' textAlign='center' color='white' pt={20}>Hello</Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn">
                  <Typography variant='h2' textAlign='center' color='white' pt={20}>Hello</Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn">
                  <Typography variant='h2' textAlign='center' color='white' pt={20}>Hello</Typography>
              </AnimationOnScroll>
          </Box>
      </>
  );
}

export default App;
