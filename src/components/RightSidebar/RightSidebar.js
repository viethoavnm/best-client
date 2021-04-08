import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import { colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center'
  },
  starIcon: {
    fontSize: 18,
    height: 18,
    width: 18
  },
  starFilledIcon: {
    color: colors.amber[400]
  },
  starBorderIcon: {
    color: theme.palette.icon
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: '700',
    color: '#92BF1F',
    lineHeight: '29px'
  },
  divider: {
    backgroundColor: colors.grey[300],
    marginTop: 20
  }
}));

const RightSidebar = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const _renderTitle = title => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginBottom="30px"
        backgroundColor="#F6F6F6">
        <CardMedia
          className={classes.icSlash}
          image="assets/images/ic-slash-title.svg"
          alt="slash"
        />

        <Typography className={classes.title}>{title}</Typography>
      </Box>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container direction="column">
        {_renderTitle('Tin mới nhất')}
        <Divider className={classes.divider} />
        {_renderTitle('Sự kiện sắp tới')}
      </Grid>
    </div>
  );
};

RightSidebar.propTypes = {
  className: PropTypes.string
};

export default RightSidebar;
