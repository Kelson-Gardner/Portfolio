import { Box } from "@mui/material";
import TopPhotoTransition from "../components/TopPhotoTransition"
import SecondPhotoTransition from "../components/SecondPhotoTransition";
import ThirdPhotoTransition from "../components/ThirdPhotoTransition";

function Home(){
    return(
    <>
    {/* <Box
    sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw', 
        height: '200vh',
        background: 'linear-gradient(to right, #273db4 250px, #ed7845 0%, #c50900 50%, #f95ca4 100%)',
        overflowY: 'auto',
        overflowX: 'hidden'
    }}
    > */}
        <TopPhotoTransition />
        <div style={{height: '550px'}}></div>
        <SecondPhotoTransition />
        <div style={{height: '350px'}}></div>
        <ThirdPhotoTransition />
        <div style={{height: '500px'}}></div>
    {/* </Box> */}
    </>
    )
}

export default Home;