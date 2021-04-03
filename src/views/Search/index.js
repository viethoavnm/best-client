import { Divider, Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { SearchBar2 } from 'components';
import { Fragment } from 'react';
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
      marginTop: 15,
      marginBottom: 25
    }
  })
);

// let post = {
//   image:
//     'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
//   title: 'Biomass Gasification Technology (BEST)',
//   date: '20/02/2020',
//   description:
//     'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). '
// };

const Search = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} className={classes.search}>
          <SearchBar2 />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <div className={classes.result}>
            <span className={classes.total}>10 </span>
            kết quả phù hợp
          </div>
          <Divider className={classes.divider} />
          <PostCard
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Biomass Gasification Technology (BEST)"
            date="20/02/2020"
            description="Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). "
          />
          <PostCard
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Biomass Gasification Technology (BEST)"
            date="20/02/2020"
            description="Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). "
          />
          <PostCard
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Biomass Gasification Technology (BEST)"
            date="20/02/2020"
            description="Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). "
          />
          <PostCard
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Biomass Gasification Technology (BEST)"
            date="20/02/2020"
            description="Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). "
          />
          <PostCard
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Biomass Gasification Technology (BEST)"
            date="20/02/2020"
            description="Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). "
          />
        </Grid>
        <Grid item xs={12} md={4} className={classes.rightSidebar}>
          <NewsEvent />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Search;
