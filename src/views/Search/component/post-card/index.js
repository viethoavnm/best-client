import {
  Fragment,
  useEffect,
  useRef,
  useState,
  useCallback,
  memo
} from 'react';
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
  img: {
    height: 0,
    paddingBottom: '66%',
    borderRadius: 5
  },
  time: {
    marginTop: 8,
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
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  title: {
    color: '#3A3A3A',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.25,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    },
    [theme.breakpoints.down('xs')]: {
      '-webkit-line-clamp': 3,
      fontSize: 16
    }
  },
  description: {
    marginTop: 10,
    color: '#3A3A3A',
    fontSize: 16,
    lineHeight: 1.25,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    [theme.breakpoints.only('xs')]: {
      display: 'none'
    }
  }
}));
const PostCard = memo(({ image, title, date, description }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea onClick={() => console.log('click search item')}>
        <Grid container spacing={2}>
          <Grid item xs={5} sm={4} md={4}>
            <CardActionArea>
              <CardMedia className={classes.img} image={image} title={title} />
              <div></div>
            </CardActionArea>
          </Grid>

          <Grid item xs={7} sm={8} md={8}>
            <CardContent className={classes.content}>
              <Typography className={classes.title} component="h2">
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
      </CardActionArea>
    </Card>
  );
});

PostCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string
};

export default PostCard;
