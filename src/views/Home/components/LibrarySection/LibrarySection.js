import { Grid } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { Container, Title } from 'components';
import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import FeaturedItem from '../FeaturedItem';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getSafeValue, getTransObj, getLinkFromArticle } from 'utils';
import Lodash from 'lodash';
import moment from 'moment';
import {
  TYPE_HOME_DATA,
  UI_TYPE_HOME_DATA,
  SubTypeArticle,
  DATE_FORMAT
} from 'utils/constant';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LibrarySection = props => {
  const classes = useStyles();
  const { data } = props;
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const lang = useSelector(state => state.multiLang.lang);
  const [listData, setListData] = useState([]);
  const [cateName, setCateName] = useState('');
  const [linkDrect, setLinkDirect] = useState('/');

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

    // Handle link direction
    const type = getSafeValue(data, 'type', '');
    const id = getSafeValue(data, 'id', '');
    let link = '/';
    if (type === TYPE_HOME_DATA.CATEGORY) {
      link = `/category/${id}`;
    } else if (type === TYPE_HOME_DATA.LIBRARY) {
      link = `/library`;
    }

    setListData(newList);
    setLinkDirect(link);
  }, [lang, data]);

  const handleClickArticle = obj => {
    const linkRedirect = getLinkFromArticle(obj);
    history.push(linkRedirect);
  };

  const renderFirstArticle = () => {
    if (listData.length === 0) {
      return <></>;
    }

    const obj = listData[0];
    const publishedAt = getSafeValue(obj, 'publishedAt', '');
    const date = moment(publishedAt).format(DATE_FORMAT);
    const urlImg = getSafeValue(obj, 'urlImg', '');
    const title = getSafeValue(obj, 'title', '');

    return (
      <Fragment>
        <FeaturedItem
          handleClick={() => handleClickArticle(obj)}
          classImg={classes.img}
          classContent={classes.content}
          classType={classes.type}
          classTitle={classes.titleCard}
          title={title}
          image={urlImg}
          time={date}
        />

        <div className={classes.titleMobile}>
          <span className={classes.time}>{date} - </span>
          <span>{title}</span>
        </div>
      </Fragment>
    );
  };

  const renderSubArticles = () => {
    if (listData.length === 0) {
      return <></>;
    }

    const newListData = listData.slice(1, 3);

    return (
      <Fragment>
        {newListData.map(obj => {
          const publishedAt = getSafeValue(obj, 'publishedAt', '');
          const date = moment(publishedAt).format(DATE_FORMAT);

          return (
            <Grid item xs={6} md={4} key={obj?._id}>
              <FeaturedItem
                handleClick={() => handleClickArticle(obj)}
                classImg={classes.imgBottom}
                classContent={classes.content}
                classType={classes.type}
                classTitle={classes.titleCard}
                title={obj.title}
                image={obj.urlImg}
                time={date}
              />
              <div className={classes.titleMobile}>
                <span className={classes.time}>{date} - </span>
                <span>{obj.title}</span>
              </div>
            </Grid>
          );
        })}
      </Fragment>
    );
  };

  return (
    <section>
      <Container>
        <Title size="large" className={classes.titleBox}>
          <div className={classes.titleContent}>
            <h2 className={classes.title}>{cateName}</h2>
            <Link to={linkDrect} className={classes.readMore}>
              {t('viewMore')} <ChevronRight />
            </Link>
          </div>
        </Title>

        <Grid container spacing={3} style={{ paddingBottom: 24 }}>
          <Grid item xs={12} md={4}>
            {renderFirstArticle()}
          </Grid>

          {renderSubArticles()}

          {/* <Grid item xs={6} md={4}>
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
          </Grid> */}
        </Grid>
      </Container>
    </section>
  );
};

export default LibrarySection;
