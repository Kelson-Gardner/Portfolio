import { Box, CardContent, CardHeader, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import UrDoneMain from '../assets/UrDone/UrDoneMain.png';
import UrDoneLogin from '../assets/UrDone/UrDoneLogin.png';
import UrDoneProfile from '../assets/UrDone/UrDoneProfile.png';
import QuizletMain from '../assets/Quizlet/QuizletMain.png';
import QuizletLogin from '../assets/Quizlet/QuizletLogin.png';
import EntriesMain from '../assets/Entries/EntriesMain.png';
import EntriesDownload from '../assets/Entries/EntriesDownloader.png';
import EntriesApp from '../assets/Entries/EntriesApp.png';
import PowerPlayProfile from '../assets/PowerPlay/PowerPlayProfile.png';
import PowerPlayWebProfile from '../assets/PowerPlay/PowerPlayWebProfile.png';
import PowerPlayEdit from '../assets/PowerPlay/PowerPlayEdit.png';
import TypingTest from '../assets/TypingTest.png';

function Projects(){
    const urDoneSubHeader = <CardHeader title="UrDone" subheader="Social Media Application"/>
    const quizletSubHeader = <CardHeader title="Quizlet" subheader="Quizlet Replica" />
    const entriesSubHeader = <CardHeader title="Entries" subheader="Random Entries Winner" />
    const powerPlaySubHeader = <CardHeader title="PowerPlay" subheader="Hockey League Management System" />
    const typingTestSubHeader = <CardHeader title="Typing Test" subheader="Virtual Keyboard Typing Test" />
    const urDoneContent = <CardContent>
    <Typography sx={{ marginBottom: 2 }}>Tech Stack:</Typography>
    <Typography sx={{ marginBottom: 2 }}>
      React-Vite frontend with a Django-Python backend. 
    </Typography>
    <Typography sx={{ marginBottom: 2 }}>
    UrDone is a social media program allows you to create an account and profile that other
users can see to learn more about you. You can make posts that your friends and
family can like and comment on. You are free to edit your bio and profile
information when you want. Looking at others accounts allows you access to their
bio and available posts.
    </Typography>

    <Typography sx={{ marginBottom: 2 }}>
        Login Page
    </Typography>
    <Box
    component="img"
    src={UrDoneLogin}
    sx={{
        height: 'auto',
        width: '30rem'
    }}/>
    <Typography sx={{ marginBottom: 2 }}>
      Profile Page
    </Typography>
    <Box
    component="img"
    src={UrDoneProfile}
    sx={{
        height: 'auto',
        width: '30rem'
    }}/>
    <Typography sx={{ marginBottom: 2 }}>
      I'm currently working towards adding more features such as as being able to follow other users, share posts, post images, and allow users to have profile pictures. I am also in the process of dockerizing the application.
    </Typography>
  </CardContent>

  const quizletContent = <CardContent>
  <Typography sx={{ marginBottom: 2 }}>Tech Stack:</Typography>
  <Typography sx={{ marginBottom: 2 }}>
    React-Vite frontend with a Django-Python backend.
  </Typography>
  <Typography sx={{ marginBottom: 2 }}>
  An ongoing project aimed at creating a custom version of Quizlet for personal use,
providing access to Quizlet-like features without advertisements. The application is
built using a React-Vite frontend, a Django-Python backend, and leverages the MUI
CSS library for a modern, responsive design. I currently have the skeleton design for 
the side and top nav bars. My focus is currently on creating the home and library pages as with
adding the ability to create a flashcard deck.
  </Typography>

  <Typography sx={{ marginBottom: 2 }}>
      Login Page
  </Typography>
  <Box
  component="img"
  src={QuizletLogin}
  sx={{
      height: 'auto',
      width: '30rem'
  }}/>
  <Typography sx={{ marginBottom: 2 }}>
    I'm currenlty working towards adding the ability to actually create,
    view, and edit decks of flashcards. The future goal is to be able to 
    replicate every function available on the actual quizlet website along 
    with the design.
  </Typography>
</CardContent>

const entriesContent = <CardContent>
<Typography sx={{ marginBottom: 2 }}>Tech Stack:</Typography>
<Typography sx={{ marginBottom: 2 }}>
  React-Vite frontend.
</Typography>
<Typography sx={{ marginBottom: 2 }}>
A Progressive Web App (PWA) I created for a company to streamline the process of
selecting random winners from CSV files. The app allows users to upload a CSV file
containing names and the number of entries for each person, then automatically
processes the data and selects a winner at random. Built using React and deployed
on GitHub Pages, the PWA leverages service workers for offline capabilities and
ensures an efficient, user-friendly experience. I also created a Docker container for
it as well.
</Typography>

<Typography sx={{ marginBottom: 2 }}>
    Download The App From Your Browser
</Typography>
<Box
component="img"
src={EntriesDownload}
sx={{
    height: 'auto',
    width: '30rem'
}}/>
<Typography sx={{ marginBottom: 2 }}>
  You can download the entries app from your browser. It utilizes 
  a service worker that caches important files that provide functionality
  to the application offline or in low-connectivity environments. You also
  define a manifest file that holds the metadata for the application. You 
  can download the app to your computer or your phone. 
</Typography>
<Typography sx={{ marginBottom: 2 }}>
    Application
</Typography>
<Box
component="img"
src={EntriesApp}
sx={{
    height: 'auto',
    width: '30rem'
}}/>
<Typography sx={{ marginBottom: 2}}>
    Check out the website <a href="https://kelson-gardner.github.io/Entries/" target="_blank">here!</a>
</Typography>
</CardContent>

const powerPlayContent = <CardContent>
<Typography sx={{ marginBottom: 2 }}>Tech Stack:</Typography>
<Typography sx={{ marginBottom: 2 }}>
  Vue-TypeScript frontend with the Quasar CSS library. Go backend with Postgres database. Cypress unit testing and Pinia Store.
  Containerized with docker compose.
</Typography>
<Typography sx={{ marginBottom: 2 }}>
An open-source sports league tracking system developed to manage a City Hockey
League. I contributed to the mobile development of the project, leveraging Vue,
Pinia Store, the Quasar CSS library, and Axios. The project remains under active
development, with ongoing enhancements to improve functionality and user
experience. The application allows users to see their team schedules, score, rosters, standings, and much more.
</Typography>

<Typography sx={{ marginBottom: 2 }}>
    Edit Profile Page
</Typography>
<Box
component="img"
src={PowerPlayEdit}
sx={{
    height: 'auto',
    width: '30rem'
}}/>
<Typography sx={{ marginBottom: 2 }}>
  I contributed to the user profile page in the mobile development department.
I created the main profile page that allows users to see the teams and leagues that they play in.
I also created the edit user profile page that allows users to change the information that is 
portrayed on their profile page.
</Typography>
<Typography sx={{ marginBottom: 2 }}>
    Profile Page
</Typography>
<Box
component="img"
src={PowerPlayProfile}
sx={{
    height: 'auto',
    width: '30rem'
}}/>
</CardContent>

    return(
        <>
            {/* <Box
    sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw', 
        height: 'fit-content',
        background: 'linear-gradient(to right, #273db4 250px, #ed7845 0%, #c50900 50%, #f95ca4 100%)',
    }}
    > */}
        <div style={{marginTop: '100px', display: 'flex', justifyContent: 'space-evenly', flexFlow: 'wrap'}}>
            <div>
                <ProjectCard 
                title="UrDone" 
                description="UrDone is a social media application I created. It is similar to X, formerly known as twitter."
                mainSrc={UrDoneMain}
                subheader={urDoneSubHeader}
                cardContent={urDoneContent}
                github="https://github.com/Kelson-Gardner/UrDone"/>
            </div>
            <div>
            <ProjectCard
                title="Quizlet"
                description="A full quizlet replica. The application will replicate the same user interface design and functionality as the actual Quizlet website."
                mainSrc={QuizletMain}
                subheader={quizletSubHeader}
                cardContent={quizletContent}
                github="https://github.com/Kelson-Gardner/Quizlet"/>
            </div>
            <div>
            <ProjectCard
                title="Entries"
                description="A PWA that allows users to select a random winner from a pool of entries."
                mainSrc={EntriesMain}
                subheader={entriesSubHeader}
                cardContent={entriesContent}
                github="https://github.com/Kelson-Gardner/Entries"
                />
            </div>
            <div>
                <ProjectCard
                title="PowerPlay"
                description="An open source hockey league manangement application."
                mainSrc={PowerPlayWebProfile}
                subheader={powerPlaySubHeader}
                cardContent={powerPlayContent}
                github="https://github.com/jak103/powerplay"/>
            </div>
            {/* <div>
                <ProjectCard
                title="Typing Test"
                description="An interactive typing test with a virtual keyboard."
                mainSrc={TypingTest}
                subheader={typingTestSubHeader}
                github="https://github.com/Kelson-Gardner/TypingTest"/>
                
            </div> */}
            </div>
            {/* </Box> */}
        </>
    )
}

export default Projects;