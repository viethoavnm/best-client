import React, { useState } from 'react';
import { Divider, Grid } from '@material-ui/core';
import { Title } from 'components';
import EventCardLarge from '../../components/EventCardLarge';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewsEvent from '../Search/component/news-event';
import useStyles from './style';

const Event = () => {
  const classes = useStyles();
  const [eventList, setEventList] = useState([
    {
      title: `Hội thảo "Khí hóa sinh khối - Giải pháp bền vững và kinh tế"`,
      image: `images/new-2.png`,
      day: 10,
      month: 9,
      year: 2021,
      hourminute: `6h30 AM`,
      location: `Đường số 8, Thâm ngàn, Viêng Chăn, Lào`
    },
    {
      title: `Kinh doanh và Khởi nghiệp trong thời đại số`,
      image: `images/new-1.png`,
      day: 19,
      month: 6,
      year: 2021,
      hourminute: `14h30 AM`,
      location: `Trung tâm Hội nghị quốc gia, Hà Nội`
    },
    {
      title: `Tư duy Lãnh đạo trong Chuyển đổi số`,
      image: `images/thu-vien-2.png`,
      day: 12,
      month: 4,
      year: 2021,
      hourminute: `8h00 PM`,
      location: `458 Nguyễn Thị Minh Khai`
    },
    {
      title: `Lễ Vinh Danh Công ty Kinh Doanh Hiệu Quả Nhất Việt Nam`,
      image: `images/thu-vien-1.png`,
      day: 8,
      month: 3,
      year: 2021,
      hourminute: `12h00 AM`,
      location: `Đường số 8, Thâm ngàn, Viêng Chăn, Lào`
    }
  ]);
  return (
    <Fragment>
      <div className={classes.header}>
        <Title size="large">
          <div className={classes.title}>Sự kiện</div>
          <div className={classes.breadcrumb}>Trang chủ / Sự Kiện Sắp Tới</div>
        </Title>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Title size="large">
            <div className={classes.title}>Sự kiện sắp diễn ra</div>
          </Title>
          <Grid container spacing={2} className={classes.eventList}>
            {eventList.map(item => {
              return (
                <Grid item xs={12} sm={12} lg={12}>
                  <EventCardLarge
                    title={item.title}
                    image={item.image}
                    day={item.day}
                    month={item.month}
                    year={item.year}
                    hourminute={item.hourminute}
                    location={item.location}
                  />
                  <Divider className={classes.divider} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} className={classes.rightSidebar}>
          <NewsEvent />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Event;
