import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Logo from "../assets/Utah-State-Aggies-logo.png";

function SecondPhotoTransition(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const topPosition = window.scrollY;
        setIsVisible(topPosition >= 25 && topPosition < 600);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <>
      <div>
        <Box
          component="img"
          src={Logo}
          alt="Transitioning Image"
          sx={{
            position: 'absolute',
            right: 0,
            transform: isVisible ? 'translateX(-100px)' : 'translateX(100px)', // Slide in from the right
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
            width: '400px',
            height: 'auto',
            marginTop: '80px',
            willChange: 'transform, opacity',
          }}
        />
      </div>
      <div>
          <Box
              sx={{
                  position: 'absolute',
                  left: 0,  
                  transform: isVisible ? 'translateX(100px)' : 'translateX(-100px)', 
                  opacity: isVisible ? 1 : 0,
                  transition: 'transform 0.25s ease-in-out, opacity 0.25s ease-in-out',
                  width: '50%',
                  height: 'auto',
                  marginTop: '70px',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  paddingLeft: '20px', 
                  willChange: 'transform, opacity',
              }}
          >
              <Typography
                  sx={{
                      fontSize: '50px',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                  }}
              >I'm a senior at</Typography>
              <Typography
                  sx={{
                      fontSize: '50px',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                  }}
              >Utah State University</Typography>
              <Typography
                  sx={{
                      fontSize: '40px',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                  }}
              >pursuing a degree in</Typography>
              <Typography
                  sx={{
                      fontSize: '56px',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                  }}
              >Computer Science.</Typography>
          </Box>
      </div>
      </>
    );
}

export default SecondPhotoTransition;
