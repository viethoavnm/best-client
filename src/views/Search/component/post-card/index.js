import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
const useStyles = makeStyles(theme => ({
  root: {
    lineHeight: 1.5
  },
  button: {
    paddingBottom: '70%'
  },
  img: {
    position: 'absolute'
  },
  time: {
    marginTop: 10,
    color: '#ACB5BB',
    fontSize: 13,
    height: '20px',
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    width: 14,
    height: 14,
    marginRight: 10
  },
  container: {
    position: 'relative',
    '& .MuiCardContent-root': {
      padding: '0 15px'
    },
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '17.5%'
    }
  },
  content: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute'
    }
  },
  description: {
    marginTop: 15,
    fontSize: 16,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 73px)'
    }
  },
  line: {
    borderBottom: 'solid 1px #C4C4C4',
    margin: '15px 0'
  }
}));
const PostCard = ({ image, title, date, description }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} elevation={0}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={5} md={4}>
            <CardActionArea className={classes.button}>
              <CardMedia
                className={classes.img}
                component="img"
                image={image}
                alt={title}
                title={title}
              />
            </CardActionArea>
          </Grid>
          <Grid item xs={12} sm={7} md={8} className={classes.container}>
            <CardContent className={classes.content}>
              <Typography variant="h3" component="h3">
                {title}
              </Typography>
              <Typography className={classes.time} component="p">
                <AccessTime className={classes.icon} />
                {date}
              </Typography>
              <Typography className={classes.description} component="p">
                {description}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <div className={classes.line}></div>
    </div>
  );
};

PostCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string
};

export default PostCard;
