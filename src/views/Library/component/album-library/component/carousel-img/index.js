import { Box, CardMedia, createStyles, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { createPortal } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
const useStyles = makeStyles(theme =>
  createStyles({
    modal: {
      position: 'fixed',
      backgroundColor: 'rgba(34, 42, 50, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      padding: 15,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        maxWidth: '80%'
      },
      '&:focus': {
        border: 'none',
        boxShadow: 'none',
        outline: 'none !important'
      }
    },
    img: {
      borderRadius: 6
    }
  })
);

const CarouselImg = ({ open, onClose, listImg, selectedItem }) => {
  const classes = useStyles();

  const onClickModal = () => {
    onClose instanceof Function && onClose();
  };

  return createPortal(
    <Modal open={open} className={classes.modal} onClose={onClickModal}>
      <Box className={classes.content}>
        <Carousel
          selectedItem={selectedItem}
          autoFocus={false}
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows
          className="presentation-mode">
          {Array.isArray(listImg) &&
            listImg.map((img, index) => {
              return (
                <Box key={index}>
                  <CardMedia
                    className={classes.img}
                    component="img"
                    image={img}
                    title=""
                  />
                </Box>
              );
            })}
        </Carousel>
      </Box>
    </Modal>,
    document.body
  );
};
export default CarouselImg;
