import { Box, Typography } from "@mui/material";

function Consultation(){

    return(
        <>
        <Box
        sx={{
            marginTop: '200px',
            width: '400px'
        }}
        >
            <Typography
            sx={{
                fontSize: '75px',
                fontWeight: 'bold',

            }}
            >
                Looking to build your own website?
            </Typography>
        </Box>
        </>
    )
}

export default Consultation;