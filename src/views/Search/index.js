import { Divider, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { createStyles, makeStyles } from '@material-ui/styles';
import { SearchBar2 } from 'components';
import { debounce } from 'lodash';
import { Fragment, useEffect, useRef, useState } from 'react';
import { AutoSizer, List, WindowScroller } from 'react-virtualized';
import NewsEvent from './component/news-event';
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

let post = {
  image:
    'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
  title:
    'Biomass Gasification Technology (BEST) Biomass Gasification Technology (BEST) Biomass Gasification Technology (BEST)',
  date: '20/02/2020',
  description:
    'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). '
};

const Search = () => {
  const classes = useStyles();
  const refCard = useRef(null);
  const [heightCard, setHeightCard] = useState(204);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(() => {
    let a = [];
    for (let i = 0; i < 10; i++) {
      a.push({ ...post });
    }
    return a;
  });

  useEffect(()=>{
    console.log(heightCard)
  }, [heightCard])

  const _rowRenderer = ({ index, isScrolling, style }) => {
    if (isScrolling) {
      return (
        <div style={{ ...style }} key={index}>
          <Skeleton className={classes.skeleton} />
        </div>
      );
    }
    const { image, title, date, description } = data[index];
    return (
      <div style={style} key={index}>
        <PostCard
          image={image}
          title={title}
          date={date}
          description={description}
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
    if (loading) return;
    if (clientHeight + scrollTop > scrollHeight) {
      setLoading(true);
      setTimeout(() => {
        if (loading) return;
        let a = [...data];
        for (let i = 0; i < 10; i++) {
          a.push({ ...post });
        }
        setLoading(false);
        setData(a);
      }, 2500);
    }
  };

  const delayedScroll = debounce(onScroll, 800);

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} className={classes.search}>
          <SearchBar2 />
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
            <span className={classes.total}>10 </span>
            kết quả phù hợp
          </div>
          <Divider className={classes.divider} />
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
                      rowCount={data.length}
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
          {loading && (
            <div style={{ height: 200, display: 'flex', alignItems: 'center' }}>
              <h1>Loading</h1>
            </div>
          )}
        </Grid>
        <Grid item xs={12} md={4} className={classes.rightSidebar}>
          <NewsEvent />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Search;
