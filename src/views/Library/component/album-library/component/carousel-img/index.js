import { Box, Card, CardMedia, createStyles, Modal } from '@material-ui/core';
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
      margin: 15,
      position: 'relative',
      width: '100%',
      maxWidth: 945,
      '&:focus': {
        border: 'none',
        boxShadow: 'none',
        outline: 'none !important'
      }
    },
    img: {
      paddingBottom: '60%'
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
                <Card key={index}>
                  <CardMedia className={classes.img} image={img} />
                </Card>
              );
            })}
        </Carousel>
      </Box>
    </Modal>,
    document.body
  );
};
export default CarouselImg;
