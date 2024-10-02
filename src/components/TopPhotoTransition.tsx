import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ProfilePic from '../assets/ProfilePic.jpg';
import Blur from '../assets/ProfilePic copy.jpg';
import '../index.css';

function TopPhotoTransition(){
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {

    let throttleTimeout: any = null;
  
    const handleScroll = () => {
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        const topPosition = window.scrollY;
        setIsVisible(topPosition < 300);
        throttleTimeout = null;
      }, 100);
    };

    setIsVisible(true);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(throttleTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div> 
        <Box
          component="img"
          src={ProfilePic}
          alt="Transitioning Image"
          loading="lazy"
          onLoad={handleImageLoad}
          sx={{
            position: 'absolute',
            left: 0,
            transform: isVisible ? 'translateX(100px)' : 'translateX(-100px)', 
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
            width: '300px',
            height: 'auto',
            marginTop: '100px',
            willChange: 'transform, opacity',
            backgroundImage: `url(${Blur})`,
            backgroundSize: 'cover',
            animation: isLoading ? 'flash .25s infinite' : 'none'
          }}
        />
      </div>
      <div>
          <Box
              sx={{
                  position: 'absolute',
                  right: 0,
                  transform: isVisible ? 'translateX(-100px)' : 'translateX(100px)', 
                  opacity: isVisible ? 1 : 0,
                  transition: 'transform 0.25s ease-in-out, opacity 0.25s ease-in-out',
                  // width: '600px',
                  width: '50%',
                  height: 'auto',
                  marginTop: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  paddingRight: '20px',
                  willChange: 'transform, opacity',
              }}
          >
              <Typography
                  sx={{
                      fontSize: '55px',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                  }}
              >I'm Kelson Gardner.</Typography>
              <Typography
                  sx={{
                      fontSize: '53px',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                  }}
              >A Software Engineer</Typography>
              <Typography
                  sx={{
                      fontSize: '50px',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                  }}
              >based in Utah.</Typography>
          </Box>
      </div>
    </>
  );
};

export default TopPhotoTransition;
