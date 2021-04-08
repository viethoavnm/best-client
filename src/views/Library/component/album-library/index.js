import {
  Button,
  CardActionArea,
  CardMedia,
  createStyles,
  Divider,
  Grid,
  makeStyles
} from '@material-ui/core';
import {
  AccessTime,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter
} from '@material-ui/icons';
import ShareSocial from 'components/ShareSocial';
import { useState } from 'react';
import useStylesLibrary from 'views/Library/style';
import NewsEvent from 'views/Search/component/news-event';
import useStylesDetailVideo from '../detail-video/style';
import CarouselImg from './component/carousel-img';

const useStyles = makeStyles(() =>
  createStyles({
    imageBox: {
      position: 'relative',
      paddingBottom: '77%'
    },
    image: {
      position: 'absolute',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: 4
    }
  })
);

const AlbumLibrary = () => {
  const classes = useStyles();
  const classesDetailVideo = useStylesDetailVideo();
  const classesLibrary = useStylesLibrary();

  const [openCarousel, setOpenCarousel] = useState(false);

  return (
    <Grid container spacing={4} style={{ padding: '25px 0' }}>
      <Grid item xs={12} md={8}>
        <div className={classesDetailVideo.title}>
          Ảnh Biomass Gasification{' '}
        </div>
        <div className={classesDetailVideo.shareBox}>
          <Button className={classesDetailVideo.libraryBtn}>THƯ VIỆN</Button>
          <div className={classesDetailVideo.time}>
            <AccessTime className={classesDetailVideo.timeIcon} />
            <div>30/12/2020</div>
          </div>
          <ShareSocial>
            <Button>
              <Facebook />
            </Button>
            <Button>
              <Twitter />
            </Button>
            <Button>
              <Instagram />
            </Button>
            <Button>
              <LinkedIn />
            </Button>
          </ShareSocial>
        </div>
        <CarouselImg
          open={openCarousel}
          onClose={() => setOpenCarousel(false)}
        />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <CardActionArea
              className={classes.imageBox}
              onClick={() => setOpenCarousel(true)}>
              <CardMedia
                className={classes.image}
                component="img"
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardActionArea
              className={classes.imageBox}
              onClick={() => setOpenCarousel(true)}>
              <CardMedia
                className={classes.image}
                component="img"
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardActionArea
              className={classes.imageBox}
              onClick={() => setOpenCarousel(true)}>
              <CardMedia
                className={classes.image}
                component="img"
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardActionArea className={classes.imageBox}>
              <CardMedia
                className={classes.image}
                component="img"
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Grid>
        </Grid>
        <div className={classesDetailVideo.author}>Nguyen Hong</div>
        <Divider className={classesDetailVideo.divider} />
      </Grid>
      <Grid item xs={12} md={4} className={classesLibrary.rightSidebar}>
        <NewsEvent />
      </Grid>
    </Grid>
  );
};
export default AlbumLibrary;
