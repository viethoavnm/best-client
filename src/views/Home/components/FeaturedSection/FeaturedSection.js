import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { Hidden, Grid, Box, Typography } from '@material-ui/core';
import FeaturedItem from '../FeaturedItem';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    marginTop: theme.spacing(3)
  },
  slashIcon: {
    height: '100%'
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: '#3A3A3A',
    padding: theme.spacing(2)
  }
}));

const FeaturedSection = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const _renderTitle = title => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginBottom="30px"
        marginTop="40px"
        bgcolor="#F6F6F6">
        <img
          className={clsx(classes.slashIcon)}
          src="images/ic-slash-title.svg"
          alt="slash"
        />
        <Typography
          component="h1"
          variant="h3"
          color="inherit"
          className={classes.title}>
          {title.toUpperCase()}
        </Typography>
      </Box>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      {_renderTitle('Tin mới nhất')}

      <Hidden smDown>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div>
              <FeaturedItem
                tag="Tin tức"
                title="ĐBSCL vượt qua khủng hoảng kép như thế nào?"
                imageUrl="images/latest-new-1.png"
                time="30/12/2020"
              />
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <FeaturedItem
              tag="Thư viện"
              title="Thành công - Khởi nghiệp, tại sao không?"
              imageUrl="images/latest-new-2.png"
            />
            <FeaturedItem
              tag="Bản tin"
              title="Đệm lót sinh học - giải pháp trong chăn nuôi "
              imageUrl="images/latest-new-3.png"
            />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden lgUp>
        <div>
          <Grid className={classes.content} container spacing={3}>
            <FeaturedItem
              tag="Tin tức"
              title="ĐBSCL vượt qua khủng hoảng kép như thế nào?"
              imageUrl="images/latest-new-1.png"
              time="30/12/2020"
            />
          </Grid>
          <Grid className={classes.content} container spacing={3}>
            <FeaturedItem
              tag="THƯ VIỆN"
              title="Thành công - Khởi nghiệp, tại sao không?"
              imageUrl="images/latest-new-2.png"
            />
          </Grid>
          <Grid className={classes.content} container spacing={3}>
            <FeaturedItem
              tag="Bản tin"
              title="Đệm lót sinh học - giải pháp trong chăn nuôi "
              imageUrl="images/latest-new-3.png"
            />
          </Grid>
        </div>
      </Hidden>
    </div>
  );
};

FeaturedSection.propTypes = {
  className: PropTypes.string
};

export default FeaturedSection;
