import { Card, CardContent, Typography } from '@material-ui/core';
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
      borderRadius: 10,
      backgroundColor: '#92BF1F',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15,
      flexShrink: 0
    },
    date: {
      color: '#ffffff',
      fontSize: 14,
      fontWeight: 'bold',
      whiteSpace: 'nowrap'
    },
    month: {
      color: '#ffffff',
      fontSize: 30,
      marginTop: 10
    },
    title: {
      color: '#3A3A3A',
      fontWeight: 500,
      overflow: 'hidden'
    }
  })
);
const EventCard = ({ day, month, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.img}>
        <Typography component="div">
          <Typography component="div" className={classes.date}>
            {day}
          </Typography>
          <Typography component="div" className={classes.month}>
            {month}
          </Typography>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h4" component="h4" className={classes.title}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;