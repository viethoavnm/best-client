import { Grid } from '@material-ui/core';
import { Container, Title } from 'components';
import React, { useState, useEffect, Fragment } from 'react';
import FeaturedItem from '../FeaturedItem';
import useStyles from './styles';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { produce } from 'immer'; // from tool kit
import Lodash from 'lodash';
import moment from 'moment';
import { DATE_FORMAT, SubTypeArticle } from 'utils/constant';
import { useHistory } from 'react-router-dom';
import { getLinkFromArticle, getSafeValue, getTransObj } from 'utils';
import { useTranslation } from 'react-i18next';

const FeaturedSection = props => {
  const { data, isNews } = props;
  const lang = useSelector(state => state.multiLang.lang);
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const history = useHistory();
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

  const handleClickArticle = obj => {
    const linkRedirect = getLinkFromArticle(obj);
    history.push(linkRedirect);
    // console.log('linkRedirect', linkRedirect);
  };

  const renderFirstArticle = () => {
    if (listData.length === 0) {
      return <></>;
    }

    const obj = listData[0];
    const publishedAt = getSafeValue(obj, 'publishedAt', '');
    const nameCate = getSafeValue(obj, 'nameCate', '');
    const date = moment(publishedAt).format(DATE_FORMAT);

    return (
      <FeaturedItem
        handleClick={() => handleClickArticle(obj)}
        type={nameCate}
        title={obj.title}
        image={obj.urlImg}
        time={date}
      />
    );
  };

  const renderTopRightArticle = () => {
    if (listData.length < 2) {
      return <></>;
    }

    const obj = listData[1];
    const nameCate = getSafeValue(obj, 'nameCate', '');

    return (
      <FeaturedItem
        handleClick={() => handleClickArticle(obj)}
        classImg={classes.rightImgTop}
        classContent={classes.rightContent}
        classType={classes.rightTypeTop}
        classTitle={classes.rightTitle}
        classTime={classes.rightTime}
        type={nameCate}
        title={obj.title}
        image={obj.urlImg}
      />
    );
  };

  const renderBottomRight = () => {
    if (listData.length < 3) {
      return <></>;
    }

    const obj = listData[2];
    const nameCate = getSafeValue(obj, 'nameCate', '');

    return (
      <FeaturedItem
        handleClick={() => handleClickArticle(obj)}
        classImg={classes.rightImgBottom}
        classContent={classes.rightContent}
        classType={classes.rightTypeBottom}
        classTitle={classes.rightTitle}
        classTime={classes.rightTime}
        type={nameCate}
        title={obj.title}
        image={obj.urlImg}
      />
    );
  };

  if (listData.length === 0) {
    return <></>;
  }

  return (
    <section>
      <Container>
        <Title size="large" className={classes.titleBox}>
          <h2 className={classes.title}>{isNews ? t('newTitle') : cateName}</h2>
        </Title>

        <Grid container spacing={3}>
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
