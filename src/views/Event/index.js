import React, { useEffect, useState } from 'react';
import { Divider, Grid } from '@material-ui/core';
import { Container, Title } from 'components';
import EventCardLarge from '../../components/EventCardLarge';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewsEvent from '../Search/component/news-event';
import useStyles from './style';
import clsx from 'clsx';
import Lodash from 'lodash';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import Card from '@material-ui/core/CardMedia';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import { VI_LANG } from 'utils/constant';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenuWeb } from '../../reducers/setupSlice.js';

import './day-picker.css';
import 'moment/locale/vi';
import { getEventByYear } from 'services/event';

const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';

const mockEvent = [
  {
    name: 'Sự kiện chào mừng công nghệ sinh khối mới',
    content: 'Đột phát trong công nghệ phát triển sinh khối mới',
    address: 'Số 168 đông triều, thanh xuân, hà nội',
    startDate: '2021-04-30T13:48:00.000Z'
  },
  {
    name: 'Sự kiện chào mừng nông thôn mới 2021',
    content: 'Sự kiện nông thôn mới thường niên năm 2021',
    address: 'Số 68 triều khúc, thanh xuân, hà nội',
    startDate: '2021-04-24T10:00:00.000Z'
  }
];

const htmlOrigin = `&lt;p&gt;&lt;span style=&quot;background-color:rgb(255,255,255);color:rgb(34,34,34);&quot;&gt;&lt;strong&gt;Mới đây, Trung tâm Nghiên cứu, Tư vấn sáng tạo và Phát triển bền vững (CCS) phối hợp với Oxfam Việt Nam thực hiện dự án &quot;Công nghệ khí hóa sinh khối - Giải pháp năng lượng bền vững cho chế biến nông sản và quản lý chất thải ở nông thôn Việt Nam&quot;.&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&amp;nbsp;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;background-color:rgb(255,255,255);color:rgb(63,77,93);&quot;&gt;Hiện nay, Việt Nam đã có một số mô hình thiết bị năng lượng sinh khối, nhưng chưa có mô hình nào được áp dụng rộng rãi. Chính phủ cũng đã có chính sách khuyến khích đầu tư mạnh mẽ cho năng lượng sinh khối. Tuy nhiên, việc áp dụng công nghệ năng lượng sinh khối vẫn chưa khả quan. Nguyên nhân sâu xa của vấn đề này là chưa có mô hình công nghệ sinh khối phù hợp với khả năng tài chính và hạ tầng công nghệ ở các địa phương. Mặt khác, thị trường này vẫn còn thiếu hụt hệ thống hỗ trợ để triển khai mô hình, hệ thống thu mua nguyên liệu sinh khối vẫn còn nhỏ lẻ, rải rác…&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&amp;nbsp;&lt;/p&gt;&lt;p style=&quot;text-align:justify;&quot;&gt;Theo thống kê của Bộ Công Thương, sản xuất nông nghiệp tại Việt Nam hàng năm tạo ra khoảng 118 triệu tấn chất thải nông nghiệp&amp;nbsp;nhưng chỉ có 11% số này được tái sử dụng.&lt;/p&gt;&lt;p style=&quot;text-align:justify;&quot;&gt;Để khắc phục tình trạng trên, Liên minh châu Âu (EU) đã tài trợ dự án &quot;Công nghệ khí hóa sinh khối - Giải pháp năng lượng bền vững cho chế biến nông sản và quản lý chất thải ở nông thôn Việt Nam&quot; (BEST), với mô hình bếp đun khí hóa sinh khối.&lt;/p&gt;&lt;p style=&quot;text-align:justify;&quot;&gt;&amp;nbsp;&lt;/p&gt;&lt;figure class=&quot;image image_resized&quot; style=&quot;width:61.03%;&quot;&gt;&lt;img src=&quot;https://hcm01.vstorage.vngcloud.vn/v1/AUTH_2e1fb7d4d103449c9aff1956ce121f81/test_container/e05ed367-12d6-490c-9941-3f50cfa3e55f.jpeg&quot;&gt;&lt;/figure&gt;&lt;p style=&quot;text-align:justify;&quot;&gt;Được biết, công nghệ lò đốt VCBG đã được Oxfam và CCS thử nghiệm tại Thái Nguyên trong năm 2018 và 2019, cho thấy hiệu quả và phù hợp với khả năng tài chính của doanh nghiệp nhỏ, cũng như hộ nông dân chế biến nông sản.&lt;/p&gt;&lt;p style=&quot;text-align:justify;&quot;&gt;&amp;nbsp;&lt;/p&gt;&lt;p style=&quot;text-align:justify;&quot;&gt;Mô hình bếp đun khí hóa sinh khối bao gồm một lò phản ứng, tương tự như một bếp đơn giản, trong đó nhiên liệu sinh khối rắn được đưa vào. Việc cung cấp không khí cho nhiên liệu cần được kiểm soát chặt chẽ để cho phép chỉ đốt một phần của nhiên liệu. Trong quá trình này, các loại khí sinh ra được giữ lại và có thể được sử dụng như một nhiên liệu khí. Giải pháp năng lượng này khi được áp dụng sẽ đem lại nhiều giá trị cho các đối tượng hưởng lợi về kinh tế, nhận thức và đào tạo nguồn nhân lực tại vùng nông thôn của tỉnh, đáp ứng yêu cầu phát triển bền vững, bảo vệ môi trường sinh thái.&lt;/p&gt;&lt;p style=&quot;text-align:justify;&quot;&gt;&amp;nbsp;&lt;/p&gt;&lt;p style=&quot;text-align:justify;&quot;&gt;Để nhân rộng mô hình, dự án BEST lần này sẽ được triển khai tại 4 tỉnh Thái Nguyên, Lào Cai, Tuyên Quang và Yên Bái từ năm 2020 – 2024.&lt;/p&gt;&lt;p style=&quot;text-align:justify;&quot;&gt;Bà Vũ Quỳnh Hoa, Phó Giám đốc quốc gia Oxfam tại Việt Nam cho hay, dự án BEST nhằm giải quyết các vấn đề cốt lõi thông qua việc thúc đẩy VCBG ở quy mô nhỏ để phù hợp với khả năng tài chính và công nghệ của doanh nghiệp, hộ gia đình và phát triển hệ thống dịch vụ hỗ trợ tại địa phương. Dự án sẽ làm việc với 2.500 hộ chế biến nông sản và doanh nghiệp nhỏ, 100 doanh nghiệp cơ khí và 400 đơn vị cung ứng sinh khối.&lt;/p&gt;&lt;p style=&quot;text-align:justify;&quot;&gt;Trưởng ban Hợp tác phát triển&amp;nbsp;EU&amp;nbsp;Koen Duchateau đánh giá, với việc sử dụng công nghệ khí hóa sinh khối trong chế biến nông sản trong các doanh nghiệp nhỏ và vừa và các hộ sản xuất góp phần giảm việc sử dụng khí ga và than, đồng thời tận dụng được các nguồn phụ phẩm hiện có. Không chỉ tiết kiệm, hiệu quả về chi phí, giải pháp này còn góp phần tăng chất lượng sản phẩm, đem lại hiệu quả kinh tế và môi trường.&lt;/p&gt;`;

const Event = () => {
  moment.locale('vi');
  const history = useHistory();
  const classes = useStyles();
  const [dateSelected, changeDateSelected] = useState(new Date());
  const [currentEvent, changeCurrentEvent] = useState(mockEvent[0]);
  const [events, setEvents] = useState(mockEvent);
  const [listEvent, setListEvent] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [lang, setLang] = useState(VI_LANG);
  const [loading, setLoading] = useState(false);
  const htmlUnescape = Lodash.unescape(htmlOrigin);
  // const dispatch = useDispatch();

  const transformData = list => {
    const newList = list.map(obj => {
      const transArr = Lodash.get(obj, 'translations', []);
      const objTrans = Lodash.find(transArr, obj => obj.lang === lang);
      const { _id, ...res } = objTrans;
      return { ...obj, ...res };
    });

    return newList;
  };

  // useEffect(() => {
  //   const newList = transformData(listEvent);
  //   setListEvent(newList);
  // }, [lang, listEvent]);

  useEffect(() => {
    setLoading(true);
    getEventByYear(year)
      .then(res => {
        const data = Lodash.get(res, 'data', []);
        const newList = transformData(data);
        setListEvent(newList);
      })
      .catch(err => {})
      .finally(() => {
        setLoading(false);
      });
  }, [year]);

  useEffect(() => {
    const eventData = Lodash.find(listEvent, event =>
      compareDate(event.startDate, dateSelected)
    );

    // console.log('object', eventData);
    // if (!Lodash.isEmpty(eventData)) {
    changeCurrentEvent(eventData);
    // }
  }, [dateSelected]);

  const compareDate = (firstDate, secondDate) => {
    return moment(firstDate).isSame(secondDate, 'day');
  };

  const _renderDay = day => {
    const dateData = day.getDate();
    const dayEvent = Lodash.find(listEvent, event =>
      compareDate(event.startDate, day)
    );
    const isMatchEvent = !Lodash.isEmpty(dayEvent);

    return (
      <Box
        display="flex"
        flexDirection="column"
        width="50px"
        height="50px"
        justifyContent="center"
        alignItems="center"
        position="relative"
        // bgcolor={isSelectedDate ? '#92BF1F' : 'transaprent'}
      >
        <Typography className={classes.dayDate}>{dateData}</Typography>

        {isMatchEvent && (
          <Box
            width="8px"
            position="absolute"
            left="21px"
            bottom="0px"
            height="8px"
            borderRadius="4px"
            bgcolor="#92BF1F"
            alignSelf="center"
          />
        )}
      </Box>
    );
  };

  const _renderDayPicker = () => {
    return (
      <DayPicker
        locale="vi"
        localeUtils={MomentLocaleUtils}
        renderDay={_renderDay}
        onDayClick={day => changeDateSelected(day)}
        selectedDays={[dateSelected]}
        onMonthChange={date => {
          setYear(date.getFullYear());
        }}
      />
    );
  };

  const _renderEventDetail = () => {
    const image = Lodash.get(currentEvent, 'urlImg', '');
    const name = Lodash.get(currentEvent, 'name', '');
    const address = Lodash.get(currentEvent, 'address', '');
    const startDate = Lodash.get(currentEvent, 'startDate', '');

    return (
      <Grid
        item
        container
        // direction="column"
        justifyContent="center"
        justify="center"
        alignItems="center">
        {Lodash.isEmpty(currentEvent) ? (
          // <Card className={classes.eventDetailCard} elevation={0}>
          //   <CardMedia
          //     alt="img_no_event"
          //     className={classes.imgNoEvent}
          //     image="images/img_no_event.svg"
          //   />

          //   <Typography className={classes.noEventLable} align="center">
          //     Hiện đang không có sự kiện nào
          //   </Typography>
          // </Card>
          <Box
            style={{
              paddingTop: '50px',
              paddingBottom: '50px'
            }}>
            <CardMedia
              alt="img_no_event"
              className={classes.imgNoEvent}
              image="images/img_no_event.svg"
            />
            <Typography className={classes.noEventLable} align="center">
              Hiện đang không có sự kiện nào
            </Typography>
          </Box>
        ) : (
          // <Box>
          //   <CardMedia
          //     alt="img_no_event"
          //     className={classes.imgNoEvent}
          //     image="images/img_no_event.svg"
          //   />

          //   <Typography className={classes.noEventLable} align="center">
          //     Hiện đang không có sự kiện nào
          //   </Typography>
          // </Box>
          <Card className={clsx(classes.eventDetailCard)} elevation={0}>
            <Box position="relative" textAlign="center">
              <CardMedia
                className={classes.thumbnailEvent}
                image={image}
                alt="image-event"
              />

              <Box
                position="absolute"
                top="50%"
                left="50%"
                className={classes.wrapperDayEvent}>
                <Typography className={classes.dayEvent}>
                  {moment(currentEvent.startDate).date()}
                </Typography>
                <Typography className={classes.weekday}>
                  {moment(currentEvent.startDate).format('dddd')}
                </Typography>
              </Box>
            </Box>

            <Box className={classes.eventDes}>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Typography className={classes.eventTitle} align="center">
                  {currentEvent.name}
                </Typography>

                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="row"
                  marginBottom="16px">
                  <CardMedia
                    className={classes.media}
                    image="images/ic-location-white.svg"
                    alt="location"
                  />
                  <Typography className={classes.addressItem}>
                    {currentEvent.address}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" flexDirection="row">
                  <CardMedia
                    className={classes.media}
                    image="images/ic-clock-white.svg"
                    alt="location"
                  />
                  <Typography className={classes.addressItem}>
                    {moment(currentEvent.startDate).format(DATE_FORMAT)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        )}
      </Grid>
    );
  };

  const handleClickItem = item => {
    history.push({
      pathname: `/event/${item._id}`
    });
  };

  return (
    <Fragment>
      {/* {renderHTML(htmlUnescape)} */}
      <Container>
        <Box marginTop="48px" />

        {/* <Button onClick={() => dispatch(fetchMenuWeb())}>sadsds</Button> */}
        <section>
          <Title size="large">
            <div className={classes.title}>Sự kiện</div>
            <div className={classes.breadcrumb}>
              Trang chủ / Sự Kiện Sắp Tới
            </div>
          </Title>

          <Card className={clsx(classes.eventCard)} elevation={0}>
            <Grid container>
              <Grid
                item
                container
                sm={12}
                md={6}
                xs={12}
                className={clsx(classes.eventLeft)}>
                {_renderEventDetail()}
              </Grid>

              <Grid
                item
                container
                sm={12}
                md={6}
                xs={12}
                justify="center"
                className={clsx(classes.eventRight)}>
                {_renderDayPicker()}
              </Grid>
            </Grid>
          </Card>
        </section>

        <section className={clsx(classes.secondSection)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Title size="large">
                <div className={classes.title}>Sự kiện sắp diễn ra</div>
              </Title>

              {!loading ? (
                <Grid container spacing={2} className={classes.eventList}>
                  {listEvent.map(item => {
                    return (
                      <Grid item xs={12} sm={12} lg={12}>
                        <ListItem onClick={() => handleClickItem(item)}>
                          <EventCardLarge
                            item={item}
                            // title={item.title}
                            // image={item.image}
                            // startTime={item.startTime}
                            // day={item.day}
                            // month={item.month}
                            // year={item.year}
                            // hourminute={item.hourminute}
                            // location={item.location}
                          />
                          <Divider className={classes.divider} />
                        </ListItem>
                      </Grid>
                    );
                  })}
                </Grid>
              ) : (
                <div
                  style={{
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <CircularProgress size={30} style={{ color: '#A0BE37' }} />
                </div>
              )}
            </Grid>

            <Grid item xs={12} md={4} className={classes.rightSidebar}>
              <NewsEvent />
            </Grid>
          </Grid>
        </section>
      </Container>
    </Fragment>
  );
};

export default Event;
