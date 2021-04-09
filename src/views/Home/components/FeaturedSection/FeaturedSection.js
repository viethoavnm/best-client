import { Grid } from '@material-ui/core';
import { Container, Title } from 'components';
import React from 'react';
import FeaturedItem from '../FeaturedItem';
import useStyles from './styles';

const FeaturedSection = () => {
  const classes = useStyles();

  return (
    <section>
      <Container>
        <Title size="large" className={classes.titleBox}>
          <h2 className={classes.title}>TIN MỚI NHẤT</h2>
        </Title>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <FeaturedItem
              type="Bản tin"
              title="ĐBSCL vượt qua khủng hoảng kép như thế nào?"
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              time="30/12/2020"
            />
          </Grid>
          <Grid item xs={12} md={4} className={classes.rightRoot}>
            <FeaturedItem
              classImg={classes.rightImgTop}
              classContent={classes.rightContent}
              classType={classes.rightTypeTop}
              classTitle={classes.rightTitle}
              classTime={classes.rightTime}
              type="Thư viện"
              title="Thành công - Khởi nghiệp, tại sao không?"
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            />
            <FeaturedItem
              classImg={classes.rightImgBottom}
              classContent={classes.rightContent}
              classType={classes.rightTypeBottom}
              classTitle={classes.rightTitle}
              classTime={classes.rightTime}
              type="Bản tin"
              title="Đệm lót sinh học - giải pháp trong chăn nuôi "
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FeaturedSection;
