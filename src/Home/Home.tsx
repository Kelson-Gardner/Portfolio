import TopPhotoTransition from "../components/TopPhotoTransition"
import SecondPhotoTransition from "../components/SecondPhotoTransition";
import ThirdPhotoTransition from "../components/ThirdPhotoTransition";

function Home(){
    return(
    <>
        <span style={{display: 'flex', flexDirection: 'column'}}>
        <TopPhotoTransition />
        <div style={{height: '550px'}}></div>
        <SecondPhotoTransition />
        <div style={{height: '350px'}}></div>
        <ThirdPhotoTransition />
        <div style={{height: '500px'}}></div>
        </span>
    </>
    )
}

export default Home;