import { Divider, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { createStyles, makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { SearchBar2, Container } from 'components';
import { debounce } from 'lodash';
import { Fragment, useEffect, useRef, useState, useCallback } from 'react';
import { AutoSizer, List, WindowScroller } from 'react-virtualized';
import NewsEvent from './component/news-event';
import PostCard from './component/post-card';
import { getArticle } from 'services/search';
import Lodash from 'lodash';
import moment from 'moment';
import { DATE_FORMAT } from 'utils/constant';
import RightNews from 'components/RightNews';
import { getLinkFromArticle } from 'utils';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme =>
  createStyles({
    rightSidebar: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    },
    search: {
      margin: '15px 0'
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
      backgroundColor: '#C4C4C4'
    },
    skeleton: {
      height: '100%'
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

const DATA_LOADING = [1, 2, 3, 4, 5];
const Search = () => {
  const classes = useStyles();
  const refCard = useRef(null);
  // const [lang, setLang] = useState('vi');
  const lang = useSelector(state => state.multiLang.lang);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const history = useHistory();
  const limit = 8;
  const [hasNext, setHasNext] = useState(false);
  const [heightCard, setHeightCard] = useState(204);
  const [loading, setLoading] = useState(false);
  const [loadmore, setLoadmore] = useState(false);
  const [searchResults, setSearchResults] = useState(DATA_LOADING);
  const { t } = useTranslation();
  // const [data, setData] = useState(() => {
  //   let a = [];
  //   for (let i = 0; i < 10; i++) {
  //     a.push({ ...post });
  //   }
  //   return a;
  // });

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
    let params = { page, limit };
    setLoading(true);
    getArticle(params)
      .then(res => {
        const data = Lodash.get(res, 'data', {});
        const results = Lodash.get(data, 'results', []);
        const hasNextData = Lodash.get(data, 'hasNext', false);
        const newList = transformData(results);
        setSearchResults(newList);
        setHasNext(hasNextData);
      })
      .catch(err => {
        setSearchResults([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (query === '') return;
    let params = { page: 1, limit, q: query };

    setLoading(true);
    getArticle(params)
      .then(res => {
        const data = Lodash.get(res, 'data', {});
        const results = Lodash.get(data, 'results', []);
        const hasNextData = Lodash.get(data, 'hasNext', false);
        const newList = transformData(results);
        setPage(1);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickSearch = item => {
    const linkDirect = getLinkFromArticle(item);
    history.push(linkDirect);
  };

  const _rowRenderer = ({ index, isScrolling, style }) => {
    // if (loading) {
    //   return (
    //     <div style={{ ...style }} key={index}>
    //       <Skeleton className={classes.skeleton} />
    //     </div>
    //   );
    // }

    const { urlImg, title, description } = searchResults[index];
    const item = searchResults[index];
    const startTime = Lodash.get(item, 'publishedAt', '');
    const date = new Date(startTime);
    const formatDate = moment(date).format(DATE_FORMAT);

    return (
      <div style={style} key={index}>
        <PostCard
          image={urlImg}
          title={title}
          date={formatDate}
          description={description}
          onClick={() => handleClickSearch(item)}
        />
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
      setTimeout(() => {
        if (loading || loadmore || !hasNext) return;

        let params = { page: page + 1, limit };
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
      }, 800);
    }
  };

  const delayedScroll = debounce(onScroll, 800);

  return (
    <Fragment>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} className={classes.search}>
            <SearchBar2 onSubmit={txt => setQuery(txt)} />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <div ref={refCard} className={classes.hidden}>
              <PostCard
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). "
                date="20/02/2020"
                description="Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). "
              />
              <Divider className={classes.divider} />
            </div>

            <div className={classes.result}>
              <span className={classes.total}>{searchResults.length} </span>
              {t('matchingResults')}
            </div>

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
