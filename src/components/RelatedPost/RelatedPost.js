import React from 'react';
import {
  Grid,
  CardMedia,
  Typography,
  Box,
  List,
  ListItem
} from '@material-ui/core';
import { DATE_FORMAT } from 'utils/constant';
import moment from 'moment';
import Lodash from 'lodash';
import { getLinkFromArticle } from 'utils';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

const RelatedPost = ({ data, mode }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClickItem = item => {
    if (mode === 'event') return;
    const linkDirect = getLinkFromArticle(item);
    history.push(linkDirect);
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
      <ListItem
        onClick={() => handleClickItem(item)}
        className={classes.itemSuggest}>
        <Box className={classes.boxSuggest}>
          <CardMedia
            className={classes.thumbnailSuggest}
            alt=""
            image={imageItem}
          />
          <div>
            <Typography className={classes.titleItemSuggest}>
              {nameItem}
            </Typography>

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
      </ListItem>
    );
  };

  return (
    <List className={classes.listSuggest}>
      {Array.isArray(data) &&
        data.map((item, index) => {
          return (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              className={classes.gridSuggest}>
              {renderPost(item)}
            </Grid>
          );
        })}
    </List>
  );
};

export default RelatedPost;
