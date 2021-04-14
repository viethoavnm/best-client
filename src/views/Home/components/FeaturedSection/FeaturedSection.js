import { Grid } from '@material-ui/core';
import { Container, Title } from 'components';
import React, { useState, useEffect, Fragment } from 'react';
import FeaturedItem from '../FeaturedItem';
import useStyles from './styles';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { produce } from 'immer'; // from tool kit
import { getSafeValue, getTransObj } from 'utils';
import Lodash from 'lodash';
import moment from 'moment';
import { DATE_FORMAT } from 'utils/constant';

const FeaturedSection = props => {
  const { data, isNews } = props;
  const lang = useSelector(state => state.multiLang.lang);
  const classes = useStyles();
  const [listData, setListData] = useState([]);
  const [cateName, setCateName] = useState('');

  const transformList = (list, lang) => {
    const newList = Lodash.map(list, obj => {
      const category = getSafeValue(obj, 'category', {});
      const cateTrans = getSafeValue(category, 'translations', []);
      const objCateTrans = getTransObj(cateTrans, lang);
      const nameCateTrans = getSafeValue(objCateTrans, 'name', '');
      const translations = getSafeValue(obj, 'translations', []);
      const objTrans = getTransObj(translations, lang);
      const { _id, ...rest } = objTrans;

      return { ...obj, ...rest, nameCate: nameCateTrans };
    });

    return newList;
  };

  useEffect(() => {
    const list = getSafeValue(data, 'data', []);
    const newList = transformList(list, lang);
    if (newList.length > 0) {
      const cateNameData = getSafeValue(newList[0], 'nameCate', '');
      setCateName(cateNameData);
    }

    setListData(newList);
  }, [lang, data]);

  const renderFirstArticle = () => {
    if (listData.length === 0) {
      return <></>;
    }

    const obj = listData[0];
    const publishedAt = getSafeValue(obj, 'publishedAt', '');
    const date = moment(publishedAt).format(DATE_FORMAT);

    return (
      <FeaturedItem
        type={obj.nameCate}
        title={obj.title}
        image={obj.urlImg}
        time={date}
      />
    );
  };

  const renderTopRightArticle = () => {
    if (typeof listData[1] === undefined) {
      return <></>;
    }

    const obj = listData[1];

    return (
      <FeaturedItem
        classImg={classes.rightImgTop}
        classContent={classes.rightContent}
        classType={classes.rightTypeTop}
        classTitle={classes.rightTitle}
        classTime={classes.rightTime}
        type={obj.nameCate}
        title={obj.title}
        image={obj.urlImg}
      />
    );
  };

  const renderBottomRight = () => {
    if (typeof listData[2] === undefined) {
      return <></>;
    }

    const obj = listData[2];

    return (
      <Fragment>
        <FeaturedItem
          classImg={classes.rightImgBottom}
          classContent={classes.rightContent}
          classType={classes.rightTypeBottom}
          classTitle={classes.rightTitle}
          classTime={classes.rightTime}
          type={obj.nameCate}
          title={obj.title}
          image={obj.urlImg}
        />
      </Fragment>
    );
  };

  if (listData.length === 0) {
    return <></>;
  }

  return (
    <section>
      <Container>
        <Title size="large" className={classes.titleBox}>
          <h2 className={classes.title}>
            {isNews ? 'TIN MỚI NHẤT' : cateName}
          </h2>
        </Title>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {renderFirstArticle()}
          </Grid>

          <Grid item xs={12} md={4} className={classes.rightRoot}>
            {renderTopRightArticle()}
            {renderBottomRight()}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

FeaturedSection.propTypes = {
  className: PropTypes.string,
  featuredData: PropTypes.array
};

export default FeaturedSection;
