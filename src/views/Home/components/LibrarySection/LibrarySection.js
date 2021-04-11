import { Grid } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { Container, Title } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedItem from '../FeaturedItem';
import useStyles from './styles';

const LibrarySection = () => {
  const classes = useStyles();

  return (
    <section>
      <Container>
        <Title size="large" className={classes.titleBox}>
          <div className={classes.titleContent}>
            <h2 className={classes.title}>Thư viện</h2>
            <Link to="/" className={classes.readMore}>Xem thêm <ChevronRight/></Link>
          </div>
        </Title>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <FeaturedItem
              classImg={classes.img}
              classContent={classes.content}
              classType={classes.type}
              classTitle={classes.titleCard}
              title="Đệm lót sinh học - giải pháp trong chăn nuôi "
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              time="30/12/2020"
            />
            <div className={classes.titleMobile}>
              <span className={classes.time}>30/12/2020 - </span>
              <span>Đệm lót sinh học - giải pháp trong chăn nuôi</span>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <FeaturedItem
              classImg={classes.imgBottom}
              classContent={classes.content}
              classType={classes.type}
              classTitle={classes.titleCard}
              title="Đệm lót sinh học - giải pháp trong chăn nuôi "
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              time="30/12/2020"
            />
            <div className={classes.titleMobile}>
              <span className={classes.time}>30/12/2020 - </span>
              <span>Đệm lót sinh học - giải pháp trong chăn nuôi</span>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <FeaturedItem
              classImg={classes.imgBottom}
              classContent={classes.content}
              classType={classes.type}
              classTitle={classes.titleCard}
              title="Đệm lót sinh học - giải pháp trong chăn nuôi "
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              time="30/12/2020"
            />
            <div className={classes.titleMobile}>
              <span className={classes.time}>30/12/2020 - </span>
              <span>Đệm lót sinh học - giải pháp trong chăn nuôi</span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default LibrarySection;
