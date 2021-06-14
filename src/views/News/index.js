import { Card, CardActionArea, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import { Container, LibraryCard, Pagination, Title } from 'components';
import RightNews from 'components/RightNews';
import Lodash from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { convertTranslations, getSafeValue, getTransObj } from 'utils';
import Error404 from 'views/Error404';
import Error500 from 'views/Error500';
import { getArticle } from '../../services/articles';
import useStyles from './style';
import { useParams } from 'react-router';
import { getCategoryDetail } from 'services/category';

const News = () => {
  const history = useHistory();
  const classes = useStyles();
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(0);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [articles, setArticles] = useState([]);
  const [cateName, setCateName] = useState('');
  const limit = 12;
  const lang = useSelector(state => state.multiLang.lang);
  const { t } = useTranslation();

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
    if (slug) {
      getDataCategory(page, slug);
    }
  }, [page, slug]);

  const getDataCategory = async (page, slug) => {
    setLoading(true);
    try {
      // Get category
      const resCategory = await getCategoryDetail(slug);
      const dataCate = getSafeValue(resCategory, 'data', {});
      const idCate = getSafeValue(dataCate, '_id', '');
      const cateTrans = getSafeValue(dataCate, 'translations', []);
      const cateObj = Lodash.find(cateTrans, cate => cate.slug === slug);
      const cateName = cateObj?.name;

      setCateName(cateName);
      // Get article base on category.
      const params = {
        page,
        limit,
        subType: 'single',
        type: 'news',
        category: idCate,
        publishBefore: new Date().toISOString(),
        isPublish: 1
      };
      const resArticle = await getArticle(params);

      const results = getSafeValue(resArticle, 'data.results', []);
      const dataHasNext = getSafeValue(resArticle, 'data.hasNext', false);
      const newList = transformMenu(results, lang);
      if (Array.isArray(newList)) {
        newList.forEach(element => {
          convertTranslations(element);
        });
      }
      setArticles(newList);
      setHasNext(dataHasNext);
    } catch (err) {
      // handle error here.
      setLoadError(err.response?.status || 404);
    } finally {
      setLoading(false);
    }

    // getArticle(params)
    //   .then(res => {
    //     const results = getSafeValue(res, 'data.results', []);
    //     const dataHasNext = getSafeValue(res, 'data.hasNext', false);
    //     const newList = transformMenu(results, lang);
    //     if (Array.isArray(newList)) {
    //       newList.forEach(element => {
    //         convertTranslations(element);
    //       });
    //     }
    //     setArticles(newList);
    //     setHasNext(dataHasNext);
    //   })
    //   .catch(err => {
    //     setLoadError(err.response?.status || 404);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  const onChangePage = (e, page) => {
    setPage(page);
  };

  return (
    <Fragment>
      <Helmet>
        <title>{t('titleNews')} - BEST</title>
      </Helmet>
      <Container>
        {loadError === 404 ? (
          <Error404 />
        ) : loadError === 500 ? (
          <Error500 />
        ) : (
          <>
            <div className={classes.header}>
              <Title size="large">
                <div className={classes.title}>{cateName}</div>
                <div className={classes.breadcrumb}>
                  {t('txtHome')} / {cateName}
                </div>
              </Title>
            </div>

            <section className={clsx(classes.secondSection)}>
              {loading && (
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

              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <div className={clsx(classes.cardSection)}>
                    <Grid container spacing={2}>
                      {articles.map((item, index) => {
                        const categoryTrans = getSafeValue(
                          item,
                          'category.translations',
                          []
                        );
                        const cateTransObj = Lodash.find(
                          categoryTrans,
                          obj => obj.lang === lang
                        );

                        return (
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            className={classes.cardBox}>
                            <Card>
                              <CardActionArea
                                component={Link}
                                to={`${cateTransObj?.slug}/post/${item?.[lang]?.slug}`}>
                                <LibraryCard
                                  className={classes.cardItem}
                                  image={item.urlImg}
                                  title={item.title}
                                  date={item.publishedAt}
                                  author={item.authorName}
                                  description={item.description}
                                />
                              </CardActionArea>
                            </Card>
                          </Grid>
                        );
                      })}
                      {articles.length === 0 && <h2>{t('noPost')}</h2>}
                    </Grid>

                    {/* <div className={classes.btnMore}>
                    <Button className={classes.more}>xem thêm</Button>
                  </div> */}
                  </div>
                  {articles.length > 0 && (
                    <Pagination
                      count={hasNext && !loading ? page + 1 : page}
                      onChange={onChangePage}
                    />
                  )}
                </Grid>

                <Grid item xs={12} md={4} className={classes.rightSidebar}>
                  <RightNews />
                </Grid>
              </Grid>
            </section>
          </>
        )}
      </Container>
    </Fragment>
  );
};

export default News;
