import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Hidden, Grid, Box, Typography } from '@material-ui/core';
import LibraryItem from '../LibraryItem';
import LibraryItem1 from '../LibraryItem1';

import useStyles from './styles';

const LibrarySection = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const _renderTitle = title => {
    return (
      <div>
        <Hidden smDown>
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
              className={classes.smTitle}>
              {title.toUpperCase()}
            </Typography>
          </Box>
        </Hidden>

        <Hidden lgUp>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              className={classes.lgTitle}>
              {title.toUpperCase()}
            </Typography>
          </Box>
        </Hidden>
      </div>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      {_renderTitle('Thư Viện')}

      <Hidden smDown>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <LibraryItem
              title="Đệm lót sinh học - giải pháp trong chăn nuôi "
              imageUrl="images/lib-1.png"
              time="30/12/2020"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <LibraryItem
              title="Đệm lót sinh học - giải pháp trong chăn nuôi"
              imageUrl="images/lib-2.png"
              time="30/12/2020"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <LibraryItem
              title="Đệm lót sinh học - giải pháp trong chăn nuôi"
              imageUrl="images/lib-3.png"
              time="30/12/2020"
            />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden lgUp>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <LibraryItem1
              title="Đệm Lót Sinh Học Trong Chăn Nuôi - BIOGASS"
              imageUrl="images/lib-1.png"
              time="30/12/2020"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={6}>
                <LibraryItem1
                  title="Đệm Lót Sinh Học Trong Chăn Nuôi - BIOGASS"
                  imageUrl="images/lib-2.png"
                  time="30/12/2020"
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <LibraryItem1
                  title="Đệm Lót Sinh Học Trong Chăn Nuôi - BIOGASS"
                  imageUrl="images/lib-3.png"
                  time="30/12/2020"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

LibrarySection.propTypes = {
  className: PropTypes.string
};

export default LibrarySection;
