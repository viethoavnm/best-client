import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share';
import useStyles from './styles';

const ShareSocial = () => {
  const classes = useStyles();
  const currenUrl = window.location.href;

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evently"
        alignItems="center"
        bgcolor="#EBF2DA"
        paddingLeft="8px"
        paddingRight="8px"
        paddingTop="4px"
        paddingBottom="4px"
        borderRadius="4px">
        <FacebookShareButton url={currenUrl}>
          <CardMedia
            className={classes.icSocial}
            image="/images/icFbShare.svg"
            alt="fb"
          />
        </FacebookShareButton>

        <TwitterShareButton url={currenUrl}>
          <CardMedia
            className={classes.icSocial}
            image="/images/icTwitterShare.svg"
            alt="twitter"
          />
        </TwitterShareButton>

        <InstapaperShareButton url={currenUrl}>
          <CardMedia
            className={classes.icSocial}
            image="/images/icInstagramShare.svg"
            alt="insta"
          />
        </InstapaperShareButton>

        <LinkedinShareButton url={currenUrl}>
          <CardMedia
            className={classes.icSocial}
            image="/images/icLinkedInShare.svg"
            alt="linkedin"
          />
        </LinkedinShareButton>
      </Box>

      <CardMedia
        className={classes.icShare}
        image="/images/icShare.svg"
        alt="social"
      />
    </Box>
  );
};

export default ShareSocial;
