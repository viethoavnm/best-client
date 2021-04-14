import { createStyles, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { EventCard, NewsCard, Title } from 'components';
import { Fragment } from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    divider: {
      marginTop: 35,
      marginBottom: 25
    }
  })
);
const NewsEvent = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Title>TIN MỚI NHẤT</Title>
      <NewsCard
        image="https://material-ui.com/static/images/avatar/2.jpg"
        type="BẢN TIN"
        title="ĐBSCL vượt qua khủng hoảng kép như thế nào?"
        date="20/12/2020"
      />
      <NewsCard
        image="https://material-ui.com/static/images/avatar/2.jpg"
        type="BẢN TIN"
        title="ĐBSCL vượt qua khủng hoảng kép như thế nào?"
        date="20/12/2020"
      />
      <NewsCard
        image="https://material-ui.com/static/images/avatar/2.jpg"
        type="BẢN TIN"
        title="ĐBSCL vượt qua khủng hoảng kép như thế nào?"
        date="20/12/2020"
      />

      <Divider className={classes.divider} />

      <Title>Sự kiện sắp tới</Title>
      <EventCard
        day="Tháng 10"
        month="20"
        title="ĐBSCL vượt qua khủng hoảng kép như thế nào?"
      />
      <EventCard
        day="Tháng 10"
        month="20"
        title="ĐBSCL vượt qua khủng hoảng kép như thế nào?"
      />
      <EventCard
        day="Tháng 10"
        month="20"
        title="ĐBSCL vượt qua khủng hoảng kép như thế nào?"
      />
    </Fragment>
  );
};

export default NewsEvent;
