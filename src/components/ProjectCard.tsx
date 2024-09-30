import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import SimpleBackdrop from './SimpleBackdrop';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function ProjectCard(props: any) {
  const [expanded, setExpanded] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 550, marginBottom: '30px', backgroundColor: 'rgb(255, 255, 255, .9)'}}>
        {props.subheader}
      {/* <Box
        component="img"
        src={props.mainSrc}
        sx={{
            height: 'auto',
            width: '30rem',
            opacity: '1'
        }}
      /> */}
      <SimpleBackdrop image={props.mainSrc}/>
      <CardContent sx={{ opacity: 1 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary',  opacity: 1 }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <a href={props.github} target="_blank"
        style={{
            marginLeft: '10px',
            cursor: 'pointer',
            color: '#c50900',
            opacity: 1,
            backgroundColor: isHovered ? 'rgba(100, 100, 100, 0.08)' : '',
            borderRadius: '50%',
            height: '40px',
            width: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <CodeIcon fontSize='medium'/>
            </a>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      {props.cardContent}
      </Collapse>
    {expanded ? <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> : <></> }
    </Card>
  );
}
