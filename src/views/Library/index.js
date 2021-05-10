import { Box, CardActionArea, Divider, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, LibraryCard, Title } from 'components';
import RightNews from 'components/RightNews';
import Lodash from 'lodash';
import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getLibraryArticle } from 'services/articles';
import { getSafeValue, getTransObj } from 'utils';
import { TYPE_ARTICLE } from 'utils/constant';
import useStyles from './style';

const Library = props => {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataTranform, setDataTranform] = useState([]);
  const lang = useSelector(state => state.multiLang.lang);
  const { t } = useTranslation();
  const transformData = (list, lang) => {
    const newList = Lodash.map(list, obj => {
      const translations = getSafeValue(obj, 'translations', []);
      const objTrans = getTransObj(translations, lang);

      return { ...obj, ...objTrans };
    });

    return newList;
  };

  const createSectionData = list => {
    const listImg = Lodash.filter(list, obj => obj.type === TYPE_ARTICLE.image);

    const listVideo = Lodash.filter(
      list,
      obj => obj.type === TYPE_ARTICLE.video
    );
    const listFile = Lodash.filter(list, obj => obj.type === TYPE_ARTICLE.file);
    const listNews = Lodash.filter(list, obj => obj.type === TYPE_ARTICLE.news);
    const newList = [
      {
        type: TYPE_ARTICLE.image,
        title: 'titleImage',
        data: listImg
      },
      {
        type: TYPE_ARTICLE.video,
        title: 'VIDEO',
        data: listVideo
      },
      {
        type: TYPE_ARTICLE.file,
        title: 'titleDocument',
        data: listFile
      },
      {
        type: TYPE_ARTICLE.news,
        title: 'PressRelease',
        data: listNews
      }
    ];

    return newList;
  };

  useEffect(() => {
    setLoading(true);
    getLibraryArticle()
      .then(res => {
        const dataRes = getSafeValue(res, 'data', []);
        const newData = transformData(dataRes, lang);
        const sectionData = createSectionData(newData);
        setData(sectionData);
        setDataTranform(newData);
      })
      .catch(err => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data.length) {
      const newData = transformData(dataTranform, lang);
      const sectionData = createSectionData(newData);
      setData(sectionData);
    }
  }, [lang]);

  const handleClickArticle = obj => {
    const type = getSafeValue(obj, 'type', '');
    const id = getSafeValue(obj, '_id', '');
    const linkDirect = `/library/${type}/${id}`;
    if (type !== "news") {
      history.push(linkDirect);
    } else {
      window.open(linkDirect, "_blank");
    }
  };

  const renderSection = sectionObj => {
    const title = getSafeValue(sectionObj, 'title', '');
    const type = getSafeValue(sectionObj, 'type', '');
    const data = getSafeValue(sectionObj, 'data', []);
    const isHasNext = data.length > 3;
    const newData = data.slice(0, 3);
    return (
      <div key={sectionObj?.type}>
        <div className={classes.typeBox}>
          <div className={classes.type}>{t(title)}</div>
          <Link to={`/library/${type}`} className={classes.readMore}>
            {t('seeMore')}
          </Link>
        </div>

        <Grid container spacing={3}>
          {newData.map(obj => {
            const urlImg = getSafeValue(obj, 'urlImg', '');
            const title = getSafeValue(obj, 'title', '');
            const authorName = getSafeValue(obj, 'authorName', '');
            const date = getSafeValue(obj, 'publishedAt', '');
            // const date = moment(publishedAt).format(DATE_FORMAT);
            return (
              <Grid item xs={12} sm={6} lg={4} key={obj?._id}>
                <CardActionArea onClick={() => handleClickArticle(obj)}>
                  <LibraryCard
                    image={urlImg}
                    title={title}
                    date={date}
                    author={authorName}
                  />
                </CardActionArea>
              </Grid>
            );
          })}
        </Grid>

        <Divider className={classes.divider} />
      </div>
    );
  };
  return (
    <Fragment>
      <Container>
        <div className={classes.header}>
          <Title size="large">
            <div className={classes.title}>{t('titleLibrary')}</div>
            <div className={classes.breadcrumb}>
              {t('txtHome')} / {t('titleLibrary')}
            </div>
          </Title>
        </div>

        {loading ? (
          <div
            style={{
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <CircularProgress size={30} style={{ color: '#A0BE37' }} />
          </div>
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {data.map(sectionObj => {
                return renderSection(sectionObj);
              })}
            </Grid>

            <Grid item xs={12} md={4} className={classes.rightSidebar}>
              <RightNews />
            </Grid>
          </Grid>
        )}

        <Box height="50px" />
      </Container>
    </Fragment>
  );
};

export default Library;
