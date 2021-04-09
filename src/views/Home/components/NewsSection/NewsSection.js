import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid
} from '@material-ui/core';
import { AccessTime, ChevronRight } from '@material-ui/icons';
import { Container, Title } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import useStylesLibrarySection from '../LibrarySection/styles';
import NewsItem from '../NewsItem';
import useStyles from './styles';
import useStylesNewsItem from '../NewsItem/styles';
const NewsSection = () => {
  const classesLibrary = useStylesLibrarySection();
  const classesNewsItem = useStylesNewsItem();
  const classes = useStyles();
  return (
    <section>
      <Container>
        <Title size="large" className={classesLibrary.titleBox}>
          <div className={classesLibrary.titleContent}>
            <h2 className={classesLibrary.title}>Bản tin</h2>
            <Link to="/" className={classesLibrary.readMore}>
              Xem thêm <ChevronRight />
            </Link>
          </div>
        </Title>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Card className={classes.rootCard} elevation={0}>
              <CardActionArea>
                <CardMedia
                  image={
                    'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                  }
                  title={'Đệm lót sinh học - giải pháp trong chăn nuôi '}
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent className={classes.content}>
                <h2 className={classes.title}>
                  <span
                    className={[classesNewsItem.time, classes.timeTop].join(
                      ' '
                    )}>
                    {'30/12/2020'}
                    {' - '}
                  </span>
                  {'Đệm lót sinh học - giải pháp trong chăn nuôi '}
                </h2>
                <p className={classes.time}>
                  <AccessTime className={classes.icon} />
                  {'30/12/2020'}
                </p>
                <p className={classes.description}>
                  {
                    'Công nghệ khí hóa sinh khối là quá trình phản ứng nhiệt hóa học khi đốt cháy nhiên liệu sinh khối trong điều kiện thiếu oxy (cháy sơ cấp), sản sinh ra hỗn hợp khí gas (CO, H2, CH4). '
                  }
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={12}>
                <NewsItem
                  type="Nông nghiệp"
                  title="Đệm lót sinh học - giải pháp trong chăn nuôi Đệm lót sinh học - giải pháp trong chăn nuôi Đệm lót sinh học - giải pháp trong chăn nuôi Đệm lót sinh học - giải pháp trong chăn nuôi Đệm lót sinh học - giải pháp trong chăn nuôi Đệm lót sinh học - giải pháp trong chăn nuôi Đệm lót sinh học - giải pháp trong chăn nuôi Đệm lót sinh học - giải pháp trong chăn nuôi "
                  image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                  time="30/12/2020"
                />
              </Grid>
              <Grid item xs={6} md={12}>
                <NewsItem
                  type="Nông nghiệp"
                  title="Đệm lót sinh học - giải pháp trong chăn nuôi "
                  image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                  time="30/12/2020"
                />
              </Grid>
              <Grid item xs={6} md={12}>
                <NewsItem
                  type="Nông nghiệp"
                  title="Đệm lót sinh học - giải pháp trong chăn nuôi "
                  image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                  time="30/12/2020"
                />
              </Grid>
              <Grid item xs={6} md={12}>
                <NewsItem
                  type="Nông nghiệp"
                  title="Đệm lót sinh học - giải pháp trong chăn nuôi "
                  image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                  time="30/12/2020"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default NewsSection;
