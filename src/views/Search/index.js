import { Divider, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles } from '@material-ui/styles';
import logo from '../../assets/img/logo-best.png';
import { Container, SearchBar2 } from 'components';
import RightNews from 'components/RightNews';
import { isEmpty } from 'helpers';
import Lodash, { debounce } from 'lodash';
import moment from 'moment';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AutoSizer, List, WindowScroller } from 'react-virtualized';
import { getArticle } from 'services/search';
import { convertTranslations, getLinkFromArticle } from 'utils';
import { DATE_FORMAT } from 'utils/constant';
import PostCard from './component/post-card';

const useStyles = makeStyles(theme =>
  createStyles({
    rightSidebar: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    },
    search: {
      margin: '32px 0 16px'
    },
    result: {
      color: '#ACB5BB',
      fontSize: 16
    },
    total: {
      color: '#3A3A3A',
      fontWeight: 600
    },
    divider: {
      margin: '15px 0',
      backgroundColor: '#E5E5E5'
    },
    link: {
      display: 'block',
      textDecoration: 'none'
    },
    hidden: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      pointerEvents: 'none',
      padding: '0 16px',
      width: '100%'
    }
  })
);

const Search = () => {
  const classes = useStyles();
  const refCard = useRef(null);
  const lang = useSelector(state => state.multiLang.lang);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const limit = 8;
  const [hasNext, setHasNext] = useState(false);
  const [heightCard, setHeightCard] = useState(204);
  const [loading, setLoading] = useState(false);
  const [loadmore, setLoadmore] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [publishBefore] = useState(new Date().toISOString());
  const { t } = useTranslation();

  const transformData = list => {
    const newList = list.map(obj => {
      const transArr = Lodash.get(obj, 'translations', []);
      const objTrans = Lodash.find(transArr, obj => obj.lang === lang);
      delete objTrans._id;
      return { ...obj, ...objTrans };
    });

    return newList;
  };

  useEffect(() => {
    if (isEmpty(query)) return;
    let params = {
      page: 1,
      limit,
      q: query,
      publishBefore,
      isPublish: 1
    };
    setLoading(true);
    getArticle(params)
      .then(res => {
        const data = Lodash.get(res, 'data', {});
        const results = Lodash.get(data, 'results', []);
        const hasNextData = Lodash.get(data, 'hasNext', false);
        const newList = transformData(results);
        setPage(1);
        if (Array.isArray(newList)) {
          newList.forEach(item => {
            convertTranslations(item);
          });
        }
        setSearchResults(newList);
        setHasNext(hasNextData);
      })
      .catch(err => {
        setSearchResults([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  useEffect(() => {
    if (searchResults.length) {
      const { _id = null } = searchResults[0];
      if (_id) {
        const newList = transformData(searchResults);
        setSearchResults(newList);
      }
    }
  }, [lang]);

  const _rowRenderer = ({ index, style }) => {
    const { urlImg, title, description } = searchResults[index];
    const item = searchResults[index];
    const startTime = Lodash.get(item, 'publishedAt', '');
    const date = new Date(startTime);
    const formatDate = moment(date).format(DATE_FORMAT);
    return (
      <div style={style} key={index}>
        <Link
          to={getLinkFromArticle(item, lang)}
          target="_blank"
          className={classes.link}>
          <PostCard
            image={urlImg}
            title={title}
            date={formatDate}
            description={description}
          />
        </Link>
        <Divider className={classes.divider} />
      </div>
    );
  };

  const handleResize = () => {
    setHeightCard(refCard?.current?.clientHeight + 15);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onScroll = ({ clientHeight, scrollHeight, scrollTop }) => {
    if (loading || loadmore || !hasNext) return;
    if (clientHeight + scrollTop > scrollHeight) {
      setLoadmore(true);
      if (loading || loadmore || !hasNext) return;

      let params = {
        page: page + 1,
        limit,
        publishBefore,
        isPublish: 1
      };
      if (query !== '') {
        params = { ...params, q: query };
      }

      getArticle(params)
        .then(res => {
          const data = Lodash.get(res, 'data', {});
          const results = Lodash.get(data, 'results', []);
          const hasNextData = Lodash.get(data, 'hasNext', false);
          const newList = transformData(results);
          setPage(page + 1);
          setSearchResults([...searchResults, ...newList]);
          setHasNext(hasNextData);
        })
        .catch(err => {
          // setData([]);
        })
        .finally(() => {
          setLoadmore(false);
        });

      // setData(a);
    }
  };

  const delayedScroll = debounce(onScroll, 800);

  return (
    <Fragment>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} className={classes.search}>
            <SearchBar2
              placeholder={t('inputSearch')}
              onSubmit={txt => setQuery(txt)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <div ref={refCard} className={classes.hidden}>
              <PostCard
                image={logo}
                title="Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). "
                date="20/02/2020"
                description="Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). "
              />
              <Divider className={classes.divider} />
            </div>
            {query !== '' && isEmpty(query) ? (
              <div className="error">{t('noEmpty')}</div>
            ) : (
              <div className={classes.result}>
                <span className={classes.total}>{searchResults.length} </span>
                {t('matchingResults')}
              </div>
            )}

            <Divider className={classes.divider} />

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

            <WindowScroller>
              {({ height, isScrolling, registerChild, scrollTop }) => (
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <div ref={registerChild}>
                      <List
                        autoHeight
                        height={height}
                        isScrolling={isScrolling}
                        onScroll={delayedScroll}
                        overscanRowCount={3}
                        rowCount={searchResults.length}
                        rowHeight={heightCard}
                        rowRenderer={_rowRenderer}
                        scrollTop={scrollTop}
                        width={width}
                      />
                    </div>
                  )}
                </AutoSizer>
              )}
            </WindowScroller>

            {loadmore && (
              <div
                style={{
                  height: 100,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <CircularProgress size={30} style={{ color: '#A0BE37' }} />
              </div>
            )}
          </Grid>

          <Grid item xs={12} md={4} className={classes.rightSidebar}>
            <RightNews />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};
export default Search;
