import { Box, Typography } from "@mui/material";
import MasonryImageList from "../components/MasonryImageList";

function About(){
    return(
        <>
        <div style={{display:'flex', flexDirection:'row'}}>
        <Box
        sx={{
            marginLeft: '255px',
            marginTop: '75px',
            display: 'flex',
            textAlign: 'left',
            flexDirection: 'column',
            width: '400px',
            marginBottom: '20px'
        }}
        >
            <Typography sx={{
                fontSize: '80px', 
                fontWeight: 'bold',
                marginBottom: '25px'
            }}
                >
                about.
            </Typography>
            <Typography>
            I’m Kelson Gardner, and I was born and raised in Clearfield, Utah. I’m currently a senior at Utah State University, where I’m studying computer science and preparing to graduate in the spring of 2025. Alongside my studies, I work as a student software test engineer at Space Dynamics Laboratory. This role has been an incredible opportunity for me to gain real-world experience in software testing and development, and it’s helped me build a strong foundation for my future career in tech.
            </Typography>
            <Typography>
            When I’m not immersed in coding or working, I have a few passions that keep me balanced and energized. I love playing basketball, hitting the gym for a good lift, and losing myself in music. Spending quality time with family is also incredibly important to me, especially with my wife, Whitney, who I married last year. These experiences and relationships help me stay grounded and motivated as I pursue my goals in both my personal life and my journey to becoming a skilled software engineer.
            </Typography>
        </Box>
        <Box         
        sx={{
            marginLeft: '50px',
            marginTop: '150px',
            display: 'flex',
            textAlign: 'left',
            flexDirection: 'column',
            width: '400px'
        }}>
            <MasonryImageList />
        </Box>
        </div>
        </>
    )
}

export default About;