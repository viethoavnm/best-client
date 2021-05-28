import { Box, CardMedia, Grid, Typography } from '@material-ui/core';
import Lodash from 'lodash';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLinkFromArticle } from 'utils';
import { DATE_FORMAT } from 'utils/constant';
import useStyles from './styles';

const RelatedPost = ({ data, mode }) => {
  const classes = useStyles();
  const lang = useSelector(state => state.multiLang.lang);
  const handleClickItem = item => {
    if (mode === 'event') return '#';
    return getLinkFromArticle(item, lang);
  };

  const renderPost = item => {
    let imageItem = Lodash.get(item, 'urlImg', '');
    let nameItem = Lodash.get(item, 'title', '');
    let startTimeItem = Lodash.get(item, 'publishedAt', '');
    if (mode === 'event') {
      imageItem = Lodash.get(item, 'image', '');
      nameItem = Lodash.get(item, 'name', '');
      startTimeItem = Lodash.get(item, 'startTime', '');
    }
    let dateItem = new Date(startTimeItem);
    let formatDateItem = moment(dateItem).format(DATE_FORMAT);
    return (
      <Box
        component={Link}
        className={classes.boxSuggest}
        to={handleClickItem(item)}>
        <CardMedia
          className={classes.thumbnailSuggest}
          alt=""
          image={imageItem}
        />
        <div>
          <h2 className={classes.titleItemSuggest}>{nameItem}</h2>
          <Box display="flex" flexDirection="row">
            <CardMedia
              className={classes.smallClock}
              image="/images/ic-small-clock.svg"
              alt="small-clock"
            />
            <Typography className={classes.timeSuggest}>
              {formatDateItem}
            </Typography>
          </Box>
        </div>
      </Box>
    );
  };

  return (
    Array.isArray(data) &&
    data.map((item, index) => {
      return (
        <Grid
          item
          key={index}
          xs={12}
          sm={6}
          md={3}
          className={classes.gridSuggest}>
          {renderPost(item)}
        </Grid>
      );
    })
  );
};

export default RelatedPost;
