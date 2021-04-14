import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid
} from '@material-ui/core';
import { AccessTime, ChevronRight } from '@material-ui/icons';
import { Container, Title } from 'components';
import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import useStylesLibrarySection from '../LibrarySection/styles';
import NewsItem from '../NewsItem';
import useStyles from './styles';
import useStylesNewsItem from '../NewsItem/styles';
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

const NewsSection = props => {
  const { data } = props;
  const history = useHistory();
  const lang = useSelector(state => state.multiLang.lang);
  const classesLibrary = useStylesLibrarySection();
  const classesNewsItem = useStylesNewsItem();
  const classes = useStyles();

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
      <Card className={classes.rootCard} elevation={0}>
        <CardActionArea onClick={() => handleClickArticle(obj)}>
          <CardMedia image={urlImg} title={title} className={classes.img} />
        </CardActionArea>

        <CardContent className={classes.content}>
          <h2 className={classes.title}>
            <span className={[classesNewsItem.time, classes.timeTop].join(' ')}>
              {date}
              {' - '}
            </span>
            {obj.title}
          </h2>

          <p className={classes.time}>
            <AccessTime className={classes.icon} />
            {date}
          </p>

          <p className={classes.description}>{obj.description}</p>
        </CardContent>
      </Card>
    );
  };

  const renderSubArticles = () => {
    if (listData.length === 0) {
      return <></>;
    }

    const newListData = listData.slice(1);

    return (
      <Fragment>
        {newListData.map(obj => {
          const publishedAt = getSafeValue(obj, 'publishedAt', '');
          const date = moment(publishedAt).format(DATE_FORMAT);

          return (
            <Grid item xs={6} md={12}>
              <CardActionArea onClick={() => handleClickArticle(obj)}>
                <NewsItem
                  type={obj.nameCate}
                  title={obj.title}
                  image={obj.urlImg}
                  time={date}
                />
              </CardActionArea>
            </Grid>
          );
        })}
      </Fragment>
    );
  };

  return (
    <section>
      <Container>
        <Title size="large" className={classesLibrary.titleBox}>
          <div className={classesLibrary.titleContent}>
            <h2 className={classesLibrary.title}>{cateName}</h2>

            <Link to={linkDrect} className={classesLibrary.readMore}>
              Xem thêm <ChevronRight />
            </Link>
          </div>
        </Title>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {renderFirstArticle()}
          </Grid>

          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              {/* <Grid item xs={6} md={12}>
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
              </Grid> */}

              {renderSubArticles()}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default NewsSection;
