import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      // marginTop: 20,
      '& .MuiCardContent-root': {
        padding: 0
      }
    },
    imgBox: {
      marginRight: 16,
      width: 104,
      height: 104,
      flexShrink: 0,
      borderRadius: '50%'
    },
    img: {
      width: 104,
      height: 104,
      borderRadius: '50%'
    },
    type: {
      color: '#92BF1F',
      fontWeight: 600,
      textTransform: 'uppercase'
    },
    title: {
      margin: '8px 0',
      color: '#3A3A3A',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.25,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical'
    },
    time: {
      color: '#ACB5BB',
      fontSize: 13,
      height: '20px',
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      width: 12,
      height: 12,
      marginRight: 6
    }
  })
);

const NewsCard = ({ image, type, title, date }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea className={classes.imgBox} component="div">
        <CardMedia image={image} title={title} className={classes.img} />
      </CardActionArea>
      <CardContent>
        <Typography className={classes.type}>{type}</Typography>
        <Typography variant="h5" component="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography component="p" className={classes.time}>
          <AccessTime className={classes.icon} />
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
