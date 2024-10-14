import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { Collapse, Typography } from '@mui/material';

export default function BasicTable(props: any) {
    const [rows, setRows] = useState<any[]>([]);
    function createData(
        language: string,
        years: number,
        level: string,
        experience: string,
      ) {
        return { language, years, level, experience };
      }

      useEffect(() => {
        switch(props.name){
            case "Languages.":
                setRows([
                    createData('JavaScript', 2, 'Expert', 'Work and School'),
                    createData('Python', 2, 'Intermediate', 'Just School'),
                    createData('Java', 2, 'Intermediate', 'Just School'),
                    createData('TypeScript', 1.5, 'Intermediate', 'School and Personal'),
                    createData('C++', .25 , 'Beginner', 'Just School'),
                    createData('C#', .5 , 'Beginner', 'Just Work'),
                    createData('html/css', 2 , 'Expert', 'School, work, and personal'),
                  ]);
                  break;
            case "Frameworks.":
                setRows([
                    createData('JavaScript', 2, 'Expert', 'Work and School'),
                    createData('Python', 2, 'Intermediate', 'Just School'),
                    createData('Java', 2, 'Intermediate', 'Just School'),
                    createData('TypeScript', 1.5, 'Intermediate', 'School and Personal'),
                    createData('C++', .25 , 'Beginner', 'Just School'),
                    createData('C#', .5 , 'Beginner', 'Just Work'),
                    createData('html/css', 2 , 'Expert', 'School, work, and personal'),
                  ]);
                  break;
            default:
                setRows([]); // Clear rows if no match
                break;
          }
      }, [props.name]);

    const [open, setOpen] = useState(false);
  return (
    <>
    <span 
    onClick={() => setOpen(!open)}
    style={{margin: 0, padding: 0}}
    >
    
    <Typography 
    sx={{
        fontWeight: 'bold', 
        fontSize: '50px',
        cursor: 'pointer',
        display: 'inline-flex',
        transition: 'font-size 0.3s ease',
        '&:hover': {
            fontSize: '60px',
        }
    }}
    >
        <span>
            {props.name}
        </span>
    </Typography>
    </span>
    <Collapse in={open}>
    <TableContainer component={Paper} 
    sx={{
        width: '60%',
        backgroundColor: 'rgb(255, 255, 255, .4)',
        marginLeft: '20%'
        }}>
      <Table sx={{ color: 'white', backgroundColor: 'rgb(255, 255, 255, .4)' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Language</TableCell>
            <TableCell align="left">Years of Experience</TableCell>
            <TableCell align="left">Skill Level</TableCell>
            <TableCell align="left">Place of Experience</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.language}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.language}
              </TableCell>
              <TableCell align="left">{row.years}</TableCell>
              <TableCell align="left">{row.level}</TableCell>
              <TableCell align="left">{row.experience}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Collapse>
    </>
  );
}
