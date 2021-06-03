import {
  Box,
  CardActionArea,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core';
import { Title } from 'components';
import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticle } from 'services/articles';
import { convertTranslations, formatDate, getLinkFromArticle } from 'utils';
import useStyles from './styles';

const RelatedPost = ({ post }) => {
  const classes = useStyles();
  const lang = useSelector(state => state.multiLang.lang);
  const { t } = useTranslation();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    if (post?.category?._id) {
      getArticle({
        category: post.category._id,
        subType: post.subType,
        type: post.type,
        limit: 5
      })
        .then(res => {
          let dataGet = res.data?.results;
          if (Array.isArray(dataGet)) {
            dataGet = dataGet.filter(item => item?._id !== post?._id);
            if (dataGet.length > 4) dataGet.length = 4;
            dataGet.forEach(item => {
              convertTranslations(item);
            });
            setPostList(dataGet);
          }
        })
        .catch(err => {});
    }
  }, [post]);

  const renderPost = item => {
    return (
      <CardActionArea
        component={Link}
        className={classes.boxSuggest}
        to={getLinkFromArticle(item, lang)}>
        <CardMedia className={classes.thumbnailSuggest} image={item?.urlImg} />
        <div>
          <h2 className={classes.titleItemSuggest}>{item?.[lang]?.title}</h2>
          <Box display="flex" flexDirection="row">
            <CardMedia
              className={classes.smallClock}
              image="/images/ic-small-clock.svg"
              alt="small-clock"
            />
            <Typography className={classes.timeSuggest}>
              {formatDate(item?.publishedAt)}
            </Typography>
          </Box>
        </div>
      </CardActionArea>
    );
  };

  if (postList.length === 0) return null;
  return (
    <Fragment>
      <div className={classes.header}>
        <Title size="large">
          <Typography className={classes.title}>
            {t('titleArticlesRelate')}
          </Typography>
        </Title>
      </div>
      <Grid container spacing={3} className={classes.container}>
        {postList.map((item, index) => {
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
        })}
      </Grid>
    </Fragment>
  );
};

export default RelatedPost;
