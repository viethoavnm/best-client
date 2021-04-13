import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Container, Title, Pagination, LibraryCard } from 'components';
import { Fragment } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import useStyles from './style';
import image from '../../assets/img/news1.svg';
import NewsEvent from '../Search/component/news-event';
const mock = [
  {
    image: image,
    title: 'ĐBSCL vượt qua khủng hoảng kép như thế nào?',
    content: 'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt ...',
    userCreate: 'Le Huy',
    createAt: '14/10/2020'
  },
  {
    image: image,
    title: 'ĐBSCL vượt qua khủng hoảng kép như thế nào?',
    content: 'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt ...',
    userCreate: 'Le Huy',
    createAt: '14/10/2020'
  },
  {
    image: image,
    title: 'ĐBSCL vượt qua khủng hoảng kép như thế nào?',
    content: 'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt ...',
    userCreate: 'Le Huy',
    createAt: '14/10/2020'
  },
  {
    image: image,
    title: 'ĐBSCL vượt qua khủng hoảng kép như thế nào?',
    content: 'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt ...',
    userCreate: 'Le Huy',
    createAt: '14/10/2020'
  },
  {
    image: image,
    title: 'ĐBSCL vượt qua khủng hoảng kép như thế nào?',
    content: 'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt ...',
    userCreate: 'Le Huy',
    createAt: '14/10/2020'
  },
  {
    image: image,
    title: 'ĐBSCL vượt qua khủng hoảng kép như thế nào?',
    content: 'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt ...',
    userCreate: 'Le Huy',
    createAt: '14/10/2020'
  },
  {
    image: image,
    title: 'ĐBSCL vượt qua khủng hoảng kép như thế nào?',
    content: 'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt ...',
    userCreate: 'Le Huy',
    createAt: '14/10/2020'
  },
  {
    image: image,
    title: 'ĐBSCL vượt qua khủng hoảng kép như thế nào?',
    content: 'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt ...',
    userCreate: 'Le Huy',
    createAt: '14/10/2020'
  },
  {
    image: image,
    title: 'ĐBSCL vượt qua khủng hoảng kép như thế nào?',
    content: 'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt ...',
    userCreate: 'Le Huy',
    createAt: '14/10/2020'
  }
];

const News = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Fragment>
      <Container>
        <div className={classes.header}>
          <Title size="large">
            <div className={classes.title}>BẢN TIN</div>
            <div className={classes.breadcrumb}>Trang chủ / bản tin</div>
          </Title>
        </div>

        <section className={clsx(classes.secondSection)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <div className={clsx(classes.cardSection)}>
                <Grid container spacing={2}>
                  {mock.map((item, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        className={classes.cardBox}>
                        <LibraryCard
                          className={classes.cardItem}
                          image={item.image}
                          title={item.title}
                          date={item.createAt}
                          author={item.userCreate}
                          description={item.content}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
                <div className={classes.btnMore}>
                  <Button className={classes.more}>xem thêm</Button>
                </div>
              </div>
              <Pagination count={10} />
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

export default News;
