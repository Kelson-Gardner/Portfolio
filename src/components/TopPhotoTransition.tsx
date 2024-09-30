import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ProfilePic from '../assets/ProfilePic.jpg';

function TopPhotoTransition(){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("I am happening");
    console.log(window.scrollY);
    const handleScroll = () => {
      const topPosition = window.scrollY;
      console.log(topPosition);
      setIsVisible(topPosition < 300);
    }
    setIsVisible(true);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div> 
      <Box
        component="img"
        src={ProfilePic}
        alt="Transitioning Image"
        sx={{
          position: 'absolute',
          left: isVisible ? '100px' : '-100px',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.5s ease-in-out',
          width: '300px',
          height: 'auto',
          marginTop: '100px'
        }}
      />
    </div>
    <div>
        <Box
            sx={{
                position: 'absolute',
                right: isVisible ? '100px' : '-100px',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.25s ease-in-out',
                width: '600px',
                height: 'auto',
                marginTop: '200px',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left'
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