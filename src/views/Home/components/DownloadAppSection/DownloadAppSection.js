import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import useStyles from './styles';

const DownloadAppSection = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <section>
      <Card className={clsx(classes.rootCard)} elevation={0}>
        <img src="images/dowload-app.svg" className={clsx(classes.media)} />
      </Card>
    </section>
  );
};

DownloadAppSection.propTypes = {
  className: PropTypes.string
};

export default DownloadAppSection;
