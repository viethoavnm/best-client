import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      marginTop: 15,
      '& .MuiCardContent-root': {
        padding: 5
      }
    },
    img: {
      width: 105,
      height: 105,
      borderRadius: '50%',
      marginRight: 15,
      flexShrink: 0
    },
    type: {
      color: '#92BF1F',
      fontWeight: 600,
      textTransform: 'uppercase'
    },
    title: {
      color: '#3A3A3A',
      fontWeight: 500,
      padding: '8px 0',
      lineHeight: 1.25,
      maxHeight: 56,
      overflow: 'hidden'
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
      <CardMedia
        className={classes.img}
        component="img"
        image={image}
        alt={title}
        title={title}
      />
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
