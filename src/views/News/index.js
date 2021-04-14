import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import { Container, Title, Pagination, LibraryCard } from 'components';
import { Fragment } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import useStyles from './style';
import image from '../../assets/img/news1.svg';
import NewsEvent from '../Search/component/news-event';
import { getArticle } from '../../services/articles';
import { LIST_LOADING } from 'utils/constant';
import { getSafeValue, getTransObj } from 'utils';
import Lodash from 'lodash';
import { useSelector } from 'react-redux';
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
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [articles, setArticles] = useState([]);
  const lang = useSelector(state => state.multiLang.lang);

  const transformMenu = (listMenu, lang) => {
    const newList = Lodash.map(listMenu, obj => {
      const translations = getSafeValue(obj, 'translations', []);
      const objTrans = getTransObj(translations, lang);

      return { ...obj, ...objTrans };
    });

    return newList;
  };

  useEffect(() => {
    const newList = transformMenu(articles, lang);
    setArticles(newList);
  }, [lang]);

  useEffect(() => {
    setLoading(true);
    const params = { page, limit: 20 };
    getArticle(params)
      .then(res => {
        const results = getSafeValue(res, 'data.results', []);
        const newList = transformMenu(results, lang);
        // setPage(page + 1);
        console.log('res', res);
        setArticles(newList);
      })
      .catch()
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
                  {articles.map((item, index) => {
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
                          image={item.urlImg}
                          title={item.title}
                          date={item.publishedAt}
                          author={item.authorName}
                          description={item.description}
                        />
                      </Grid>
                    );
                  })}
                </Grid>

                {/* <div className={classes.btnMore}>
                  <Button className={classes.more}>xem thêm</Button>
                </div> */}
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
