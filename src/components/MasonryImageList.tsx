import { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CarlsonFam from '../assets/Photos/IMG_3012.jpeg';
import CarlsonFamBlur from '../assets/Photos/CarlsonFamBlur.jpeg';
import PiggyBack from '../assets/Photos/PiggyBack.jpeg';
import PiggyBackBlur from '../assets/Photos/PiggyBackBlur.jpeg';
import Seattle from '../assets/Photos/Seattle.jpeg';
import SeattleBlur from '../assets/Photos/Seattle copy.jpeg';
import Me from '../assets/Photos/Me.jpeg';
import MeBlur from '../assets/Photos/Me copy.jpeg';
import GardnerFam from '../assets/Photos/IMG_2952.jpeg';
import GardnerFamBlur from '../assets/Photos/IMG_2952 copy.jpeg';
import Dunk from '../assets/Photos/Dunk.jpeg';
import DunkBlur from '../assets/Photos/Dunk copy.png';
import Engaged from '../assets/Photos/Engaged.jpeg'
import EngagedBlur from '../assets/Photos/Engaged copy.jpeg'
import WhitAndI from '../assets/Photos/WhitAndI.jpeg';
import WhitAndIBlur from '../assets/Photos/WhitAndI copy.jpeg';
import Mexico from '../assets/Photos/Mexico.jpeg';
import MexicoBlur from '../assets/Photos/Mexico copy.jpeg';
import SisterWedding from '../assets/Photos/SisterWedding.jpeg';
import SisterWeddingBlur from '../assets/Photos/SisterWedding copy.jpeg';
import Antelope from '../assets/Photos/Antelope.jpeg';
import AntelopeBlur from '../assets/Photos/Antelope copy.jpeg';
import Reception from '../assets/Photos/Reception.jpg';
import ReceptionBlur from '../assets/Photos/Reception copy.jpg';
import Portland from '../assets/Photos/Portland.jpeg';
import PortlandBlur from '../assets/Photos/Portland copy.jpeg';
import Falls from '../assets/Photos/Falls.jpeg';
import FallsBlur from '../assets/Photos/Falls copy.jpeg';
import '../index.css';
import { Backdrop } from '@mui/material';

export default function MasonryImageList() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(Me);
  const [open, setOpen] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (img: any) => {
    console.log(img.target.src);
    setSelectedImage(img.target.src);
    setOpen(true);
  };

  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              onClick={handleOpen}
              onLoad={handleImageLoad}
              decoding='async'
              style={{
                backgroundImage: `url(${item.blur})`,
                backgroundSize: 'cover',
                animation: isLoading ? "flash .5s infinite" : "none",
                cursor: 'pointer'
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <Box
        component="img"
        src={selectedImage}
        sx={{
          height: '85%',
          width: 'auto'
        }}
        />
      </Backdrop>
    </Box>
  );
}

const itemData = [
  {
    img: CarlsonFam,
    title: 'Carlson Family',
    blur: CarlsonFamBlur
  },
  {
    img: PiggyBack,
    title: 'PiggyBack',
    blur: PiggyBackBlur
  },
  {
    img: Seattle,
    title: 'Seattle',
    blur: SeattleBlur
  },
  {
    img: Me,
    title: 'Me',
    blur: MeBlur
  },
  {
    img: SisterWedding,
    title: 'Sister\'s Wedding',
    blur: SisterWeddingBlur
  },
  {
    img: Antelope,
    title: 'Antelope',
    blur: AntelopeBlur
  },
  {
    img: GardnerFam,
    title: 'Gardner Family',
    blur: GardnerFamBlur
  },
  {
    img: Dunk,
    title: 'Dunk',
    blur: DunkBlur
  },
  {
    img: Engaged,
    title: 'Engaged',
    blur: EngagedBlur
  },
  {
    img: WhitAndI,
    title: 'Whit And I',
    blur: WhitAndIBlur
  },
  {
    img: Mexico,
    title: 'Mexico',
    blur: MexicoBlur
  },
  {
    img: Reception,
    title: 'Reception',
    blur: ReceptionBlur
  },
  {
    img: Portland,
    title: 'Portland',
    blur: PortlandBlur
  },
  {
    img: Falls,
    title: 'Falls',
    blur: FallsBlur
  }
];