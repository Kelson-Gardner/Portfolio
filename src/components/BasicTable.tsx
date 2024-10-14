import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  language: string,
  years: number,
  level: string,
  experience: string,
) {
  return { language, years, level, experience };
}

const rows = [
  createData('JavaScript', 2, 'Expert', 'Work and School'),
  createData('Python', 2, 'Intermediate', 'Just School'),
  createData('Java', 2, 'Intermediate', 'Just School'),
  createData('TypeScript', 1.5, 'Intermediate', 'School and Personal'),
  createData('C++', .25 , 'Beginner', 'Just School'),
  createData('C#', .5 , 'Beginner', 'Just Work'),
  createData('html/css', 2 , 'Expert', 'School, work, and personal'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{width: '50%', backgroundColor: 'rgb(255, 255, 255, .4)'}}>
      <Table sx={{ minWidth: '50%', color: 'white', backgroundColor: 'rgb(255, 255, 255, .4)' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Language</TableCell>
            <TableCell align="left">Years of Experience</TableCell>
            <TableCell align="left">Skill Level</TableCell>
            <TableCell align="left">Actual Work</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
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
  );
}
