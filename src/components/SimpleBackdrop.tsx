import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

import { Box } from '@mui/material';

export default function SimpleBackdrop(props: any) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Box 
        onClick={handleOpen}
        component="img"
        src={props.image}
        sx={{
          height: 'auto',
          width: '30rem',
          opacity: '1',
          cursor: 'pointer'
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
    </div>
  );
}
