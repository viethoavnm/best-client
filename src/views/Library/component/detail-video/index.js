import { Button, Divider, Grid } from '@material-ui/core';
import {
  AccessTime,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter
} from '@material-ui/icons';
import ShareSocial from 'components/ShareSocial';
import useStylesLibrary from 'views/Library/style';
import NewsEvent from 'views/Search/component/news-event';
import useStyles from './style';
import xss from 'xss';
import RightNews from 'components/RightNews';

const DetailVideo = () => {
  const classes = useStyles();
  const classesLibrary = useStylesLibrary();

  const video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ArsJOpFjMcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  const clean = xss(video, {
    onIgnoreTag: (tag, html) => {
      if (tag === 'iframe') {
        return html;
      }
    }
  });

  return (
    <Grid container spacing={4} style={{ padding: '25px 0' }}>
      <Grid item xs={12} md={8}>
        <div className={classes.title}>Video hội thảo lần thứ 2</div>
        <div className={classes.shareBox}>
          <Button className={classes.libraryBtn}>THƯ VIỆN</Button>
          <div className={classes.time}>
            <AccessTime className={classes.timeIcon} />
            <div>30/12/2020</div>
          </div>
          <ShareSocial>
            <Button>
              <Facebook />
            </Button>
            <Button>
              <Twitter />
            </Button>
            <Button>
              <Instagram />
            </Button>
            <Button>
              <LinkedIn />
            </Button>
          </ShareSocial>
        </div>
        <div
          className={classes.video}
          dangerouslySetInnerHTML={{ __html: clean }}></div>
        <div className={classes.author}>Nguyen Hong</div>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12} md={4} className={classesLibrary.rightSidebar}>
        <RightNews />
      </Grid>
    </Grid>
  );
};
export default DetailVideo;
