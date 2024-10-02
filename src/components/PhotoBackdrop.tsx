import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/material';

export default function PhotoBackdrop(props: any) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [isLoading, setIsLoading] = React.useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <img 
        onClick={handleOpen}
        src={props.image}
        alt={props.title}
        loading="lazy"
        onLoad={handleImageLoad}
        style={{
            backgroundImage: `url(${props.blur})`,
            backgroundSize: 'cover',
            animation: isLoading ? "flash .25s infinite" : "none"
            }}
      />
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <Box
        component="img"
        src={props.image}
        sx={{
          height: 'auto',
          width: '75%'
        }}
        />
      </Backdrop>
    </>
  );
}
