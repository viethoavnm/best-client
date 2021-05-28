import React, { useEffect, useState } from 'react';
import { CardActionArea, Grid } from '@material-ui/core';
import { Container, Title, Pagination, LibraryCard } from 'components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Fragment } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import { getArticle } from 'services/articles';
import { TYPE_ARTICLE } from 'utils/constant';
import { getSafeValue, getTransObj } from 'utils';
import Lodash from 'lodash';
import { useSelector } from 'react-redux';
import RightNews from 'components/RightNews';
import { useTranslation } from 'react-i18next';
import Error404 from 'views/Error404';
import Error500 from 'views/Error500';
import { Helmet } from 'react-helmet';

const LibrarySubCate = props => {
  const history = useHistory();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(0);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [articles, setArticles] = useState([]);
  const limit = 12;
  const lang = useSelector(state => state.multiLang.lang);
  const typeLibrary = props.match.params.type;
  const [titleHeader, setTitleHeader] = useState('');
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
    let title = '';
    switch (typeLibrary) {
      case TYPE_ARTICLE.image:
        title = 'titleImage';
        break;

      case TYPE_ARTICLE.video:
        title = 'VIDEO';
        break;

      case TYPE_ARTICLE.file:
        title = 'titleDocument';
        break;

      case TYPE_ARTICLE.news:
        title = 'PressRelease';
        break;

      default:
        break;
    }

    setTitleHeader(title);
  }, []);

  useEffect(() => {
    const newList = transformMenu(articles, lang);
    setArticles(newList);
  }, [lang]);

  useEffect(() => {
    if (
      typeLibrary === TYPE_ARTICLE.image ||
      typeLibrary === TYPE_ARTICLE.video ||
      typeLibrary === TYPE_ARTICLE.file ||
      typeLibrary === TYPE_ARTICLE.news
    ) {
      setLoading(true);
      const params = { page, limit, type: typeLibrary, subType: 'library' };
      getArticle(params)
        .then(res => {
          const results = getSafeValue(res, 'data.results', []);
          const dataHasNext = getSafeValue(res, 'data.hasNext', false);
          const newList = transformMenu(results, lang);
          setArticles(newList);
          setHasNext(dataHasNext);
          window.scrollTo(0, 0);
        })
        .catch(err => setLoadError(err.response?.status || 404))
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setLoadError(404);
    }
  }, [page]);

  const onChangePage = (e, page) => {
    setPage(page);
  };

  const handleClickPost = obj => {
    const id = getSafeValue(obj, '_id', '');
    history.push(`/library/${typeLibrary}/${id}`);
  };
  const metaTitle = `${
    typeLibrary === TYPE_ARTICLE.file
      ? t('titleDocument')
      : typeLibrary === TYPE_ARTICLE.news
      ? t('PressRelease')
      : typeLibrary === TYPE_ARTICLE.video
      ? 'Video'
      : typeLibrary === TYPE_ARTICLE.image
      ? t('titleImage')
      : ''
  } - BEST`;
  return (
    <Fragment>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
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
                <div className={classes.title}>{t(titleHeader)}</div>
                <div className={classes.breadcrumb}>
                  {t('txtHome')} / {t(titleHeader)}
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
                            <CardActionArea
                              onClick={() => handleClickPost(item)}>
                              <LibraryCard
                                className={classes.cardItem}
                                image={item.urlImg}
                                title={item.title}
                                date={item.publishedAt}
                                author={item.authorName}
                                description={item.description}
                              />
                            </CardActionArea>
                          </Grid>
                        );
                      })}
                    </Grid>

                    {/* <div className={classes.btnMore}>
                  <Button className={classes.more}>xem thêm</Button>
                </div> */}
                  </div>

                  <Pagination
                    count={hasNext && !loading ? page + 1 : page}
                    onChange={onChangePage}
                  />
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

export default LibrarySubCate;
