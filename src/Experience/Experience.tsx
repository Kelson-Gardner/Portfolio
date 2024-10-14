import { Typography } from "@mui/material";
import BasicTable from "../components/BasicTable";

function Experience(){

    return(
        <>
        <div style={{marginTop: '100px', display:'flex', justifyContent: 'flex-start'}}>
            <Typography
            sx={{
                fontWeight: 'bold', 
                fontSize: '50px',
                marginLeft: '20%'
            }}
            >Languages.</Typography>
        </div>
        <div style={{marginLeft: '20%'}}>
            <BasicTable />
        </div>
        </>
    )
}

export default Experience;