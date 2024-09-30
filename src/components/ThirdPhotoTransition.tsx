import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Logo from "../assets/SDL-LOGO2.png";

function ThirdPhotoTransition(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const topPosition = window.scrollY;
        console.log(topPosition);
        setIsVisible(topPosition >= 350);
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
            left: isVisible ? '100px' : '-100px',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.5s ease-in-out',
            width: '400px',
            height: 'auto',
            marginTop: '100px',
          }}
        />
      </div>
      <div>
          <Box
              sx={{
                  position: 'absolute',
                  right: isVisible ? '10%' : '-100px',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.25s ease-in-out',
                  width: '600px',
                  height: 'auto',
                  marginTop: '80px',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  }}
          >
              <Typography
                  sx={{
                      fontSize: '43px',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                  }}
              >I currently work as a student</Typography>
                          <Typography
                  sx={{
                      fontSize: '53px',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                  }}
              >Software Test Engineer</Typography>
                          <Typography
                  sx={{
                      fontSize: '35px',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                  }}
              >at Space Dynamics Laboratory.</Typography>
          </Box>
      </div>
      </>
    );

}

export default ThirdPhotoTransition;