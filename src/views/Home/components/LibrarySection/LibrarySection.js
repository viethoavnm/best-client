import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { Hidden, Grid, Box, Typography } from '@material-ui/core';
import LibraryItem from '../LibraryItem';
import LibraryItem1 from '../LibraryItem1';

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

const LibrarySection = props => {
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
