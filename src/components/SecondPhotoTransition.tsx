import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Logo from "../assets/Utah-State-Aggies-logo.png"

function SecondPhotoTransition(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const topPosition = window.scrollY;
        console.log(topPosition);
        setIsVisible(topPosition >= 25 && topPosition <600);
      }

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
            right: isVisible ? '100px' : '-100px',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.5s ease-in-out',
            width: '400px',
            height: 'auto',
            marginTop: '80px',
          }}
        />
      </div>
      <div>
          <Box
              sx={{
                  position: 'absolute',
                  left: isVisible ? '10%' : '-100px',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.25s ease-in-out',
                  width: '600px',
                  height: 'auto',
                  marginTop: '70px',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
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