import { Box } from '@mui/material';
import './App.css'
import NavBar from './components/NavBar'

function App(props: any) {

  const pageContent = props.contents;

  return (
    <>
    <NavBar />
    <Box
    sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw', 
        height: 'fit-content',
        background: 'linear-gradient(to right, #273db4 250px, #ed7845 0%, #c50900 50%, #f95ca4 100%)',
        overflowX: 'hidden'
    }}
    >
    {pageContent}
    </Box>
    </>
  )
}

export default App
