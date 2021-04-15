import { Container, Title } from 'components';
import Box from '@material-ui/core/Box';
import React, { useRef, Fragment, useEffect, useState } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { VI_LANG } from 'utils/constant';
import CircularProgress from '@material-ui/core/CircularProgress';

import Lodash from 'lodash';
import moment from 'moment';
import { useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles';
import 'moment/locale/vi';
import { getEventDetail } from 'services/event';
import renderHTML from 'react-render-html';
import NewsEvent from 'views/Search/component/news-event';
import { Hidden } from '@material-ui/core';
import RightNews from 'components/RightNews';

const eventDetail = {
  image: '/images/lib-1.png',
  name: `Hội thảo “Khí hóa sinh khối - Giải pháp bền vững và kinh tế”.`,
  address: 'Đường số 68, Nguyễn Hoàng, Hà Nội',
  startTime: '2020-03-27T06:30'
};

const events = [
  {
    image: '/images/new-1.png',
    name: `Hội thảo “Khí hóa sinh khối - Giải pháp bền vững và kinh tế”.`,
    address: 'Đường số 68, Nguyễn Hoàng, Hà Nội',
    startTime: '2020-03-27T06:30'
  },
  {
    image: '/images/new-1.png',
    name: `Hội thảo hoa quả và thực phẩm lần thứ XXI`,
    address: 'Đường số 8, Thanh Xuân, Triều Khúc, Hà Nội',
    startTime: '2020-06-12T10:30'
  },
  {
    image: '/images/new-1.png',
    name: `Công cuộc đổi mới nông thôn 2021`,
    address: 'Đường số 8, Thanh Xuân, Triều Khúc, Hà Nội',
    startTime: '2020-12-01T15:30'
  },
  {
    image: '/images/new-1.png',
    name: `Xây dựng trường học cho học sinh vùng nông thôn Cao Bằng Xây dựng trường học cho học sinh vùng nông thôn Cao Bằng. Xây dựng trường học cho học sinh vùng nông thôn Cao Bằng.`,
    address: 'Đường số 8, Thanh Xuân, Triều Khúc, Hà Nội',
    startTime: '2020-01-31T10:30'
  }
];

const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';
const DATE_FORMAT_2 = 'DD/MM/YYYY';
const EventDetail = props => {
  // moment.locale('vi');
  const classes = useStyles();
  const pageLayout = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const [event, setEvent] = useState(eventDetail);
  const [lang, setLang] = useState(VI_LANG);
  const [loading, setLoading] = useState(true);

  const image = Lodash.get(event, 'urlImg', '');
  const name = Lodash.get(event, 'name', '');
  const address = Lodash.get(event, 'address', '');
  const startTime = Lodash.get(event, 'startDate', '');
  const date = new Date(startTime);
  const formatDate = moment(date).format(DATE_FORMAT);
  const month = moment(date).month() + 1; // Moment base month on 0
  const day = moment(date).date();
  const dayStr = moment(date).format('dddd');

  const transformData = obj => {
    const transArr = Lodash.get(obj, 'translations', []);
    const objTrans = Lodash.find(transArr, obj => obj.lang === lang);
    const { _id, ...res } = objTrans;
    return { ...obj, ...res };
  };

  useEffect(() => {
    const idEvent = props.match.params.id;

    setLoading(true);
    getEventDetail(idEvent)
      .then(res => {
        const data = Lodash.get(res, 'data', {});
        const newData = transformData(data);
        setEvent(newData);
      })
      .catch(err => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const _renderInfoEvent = () => {
    return (
      <>
        <Box
          display="flex"
          flexDirection="row"
          marginTop="25px"
          marginBottom="35px">
          <Box bgcolor="#FFFFFF" marginLeft="20px" marginRight="20px">
            <Paper elevation={1}>
              <Box
                bgcolor="#92BF1F"
                paddingTop="5px"
                paddingBottom="5px"
                justifyContent="center"
                alignItems="center"
                marginBottom="13px"
                display="flex"
                paddingRight="30px"
                paddingLeft="30px">
                <Typography
                  align="center"
                  noWrap
                  className={classes.monthEvent}>
                  Tháng {month}
                </Typography>
              </Box>

              <Typography align="center" className={classes.dayEvent}>
                {day}
              </Typography>

              <Typography align="center" className={classes.dateEvent}>
                {dayStr}
              </Typography>

              <Box height="10px" />
            </Paper>
          </Box>

          <Box>
            <Typography className={classes.titleItem}>{name}</Typography>

            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              marginBottom="15px">
              <CardMedia
                className={classes.media}
                image="/images/ic-location.svg"
                alt="location"
              />
              <Typography className={classes.addressItem}>{address}</Typography>
            </Box>

            <Box display="flex" alignItems="center" flexDirection="row">
              <CardMedia
                className={classes.media}
                image="/images/ic-clock.svg"
                alt="location"
              />
              <Typography className={classes.addressItem}>
                {formatDate}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider className={classes.divider} />
      </>
    );
  };

  const _renderTitle = title => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginBottom="30px">
        <CardMedia
          className={classes.icSlash}
          image="/images/ic-slash-title.svg"
          alt="slash"
        />

        <Typography className={classes.title}>{title}</Typography>
      </Box>
    );
  };

  const handleClickItem = item => {
    //
  };

  const _renderItem = item => {
    const imageItem = Lodash.get(item, 'image', '');
    const nameItem = Lodash.get(item, 'name', '');
    const startTimeItem = Lodash.get(item, 'startTime', '');
    const dateItem = new Date(startTimeItem);
    const formatDateItem = moment(dateItem).format(DATE_FORMAT_2);

    return (
      <ListItem onClick={() => handleClickItem(item)}>
        <Box>
          <CardMedia
            className={classes.thumbnailSuggest}
            alt=""
            image={imageItem}
          />
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
        </Box>
      </ListItem>
    );
  };

  const _renderSuggestEvents = () => {
    return (
      <List className={classes.listSuggest}>
        {events.map(item => _renderItem(item))}
      </List>
    );
  };

  const _renderContentEvent = () => {
    const content = Lodash.get(event, 'content', '');
    const htmlContent = Lodash.unescape(content);

    return (
      <Box>
        {_renderTitle('GIỚI THIỆU')}
        {/* {renderHTML(htmlContent)} */}
        <div
          className="dynamic-content-div"
          dangerouslySetInnerHTML={{
            __html: htmlContent
          }}></div>

        <Divider className={classes.divider} />
        {_renderTitle('SỰ KIỆN KHÁC')}
        {_renderSuggestEvents()}
      </Box>
    );
  };

  return (
    <Container bgcolor="#FDFDFD">
      {loading ? (
        <div
          style={{
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <CircularProgress size={30} style={{ color: '#A0BE37' }} />
        </div>
      ) : (
        <Fragment>
          <Box marginTop="40px" />

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <CardMedia className={classes.thumbnail} alt="" image={image} />

              {_renderInfoEvent()}
              {_renderContentEvent()}
            </Grid>

            <Hidden mdDown>
              <Grid item xs={12} md={4}>
                <RightNews />
              </Grid>
            </Hidden>
          </Grid>
        </Fragment>
      )}
    </Container>
  );
};

export default EventDetail;
