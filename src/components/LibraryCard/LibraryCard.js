import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
const useStyles = makeStyles(theme => ({
  root: {
    lineHeight: 1.5
  },
  button: {
    position: 'relative',
    paddingBottom: '60%'
  },
  img: {
    position: 'absolute',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  content: {
    padding: '15px 20px',
    height: 143,
    [theme.breakpoints.only('xs')]: {
      height: 'auto'
    }
  },
  title: {
    color: '#3A3A3A',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '25px',
    maxHeight: 75,
    overflow: 'hidden'
  },
  time: {
    color: '#929292',
    fontSize: 13,
    lineHeight: '20px'
  },
  wall: {
    height: 20,
    border: 'solid 1px #C4C4C4',
    margin: '0 5px'
  }
}));
const LibraryCard = ({ image, title, author, date }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.button}>
        <CardMedia
          className={classes.img}
          component="img"
          image={image}
          title={title}
        />
      </CardActionArea>
      <CardContent className={classes.content}>
        <Typography gutterBottom component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography component="p" className={classes.time}>
          {author} <span className={classes.wall}></span> {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

LibraryCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string
};

export default LibraryCard;
