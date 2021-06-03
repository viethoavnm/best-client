import { CardActionArea, createStyles, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { EventCard, NewsCard, Title } from 'components';
import Lodash from 'lodash';
import moment from 'moment';
import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  formatDateLang,
  getLinkFromArticle,
  getSafeValue,
  getTransObj
} from 'utils';
import { DATE_FORMAT } from 'utils/constant';

const useStyles = makeStyles(() =>
  createStyles({
    divider: {
      marginTop: 32,
      marginBottom: 32,
      backgroundColor: '#E5E5E5'
    },
    titleNews: {
      marginBottom: 24
    },
    titleEvent: {
      marginBottom: 32
    }
  })
);

const RightNews = () => {
  const newArticle = useSelector(state => state.rightBar.newsData);
  const newEvent = useSelector(state => state.rightBar.eventData);
  const lang = useSelector(state => state.multiLang.lang);
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);
  const { t } = useTranslation();
  const transformArticle = (listMenu, lang) => {
    const newList = Lodash.map(listMenu, obj => {
      const cateTrans = getSafeValue(obj, 'category.translations', []);
      const translations = getSafeValue(obj, 'translations', []);
      const objTrans = getTransObj(translations, lang);
      const objCateTrans = getTransObj(cateTrans, lang);
      const nameCate = getSafeValue(objCateTrans, 'name', '');

      return { ...obj, ...objTrans, cateName: nameCate };
    });

    return newList;
  };

  const transformEvent = (listMenu, lang) => {
    const newList = Lodash.map(listMenu, obj => {
      const translations = getSafeValue(obj, 'translations', []);
      const objTrans = getTransObj(translations, lang);

      return { ...obj, ...objTrans };
    });

    return newList;
  };

  useEffect(() => {
    const newList = transformArticle(newArticle, lang);
    const newEvents = transformEvent(newEvent, lang);
    setEvents(newEvents);
    setArticles(newList);
  }, [lang, newArticle, newEvent]);

  return (
    <Fragment>
      {articles.length > 0 && (
        <Title className={classes.titleNews}>{t('newestNews')}</Title>
      )}
      {articles
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        )
        .map((article, key) => {
          const cateName = getSafeValue(article, 'cateName', '');
          const publishedAt = getSafeValue(article, 'publishedAt', '');
          const date = moment(publishedAt).format(DATE_FORMAT);

          return (
            <CardActionArea
              component={Link}
              to={getLinkFromArticle(article, lang)}
              key={key}
              style={{ marginBottom: 16 }}>
              <NewsCard
                image={article.urlImg}
                type={cateName}
                title={article.title}
                date={date}
              />
            </CardActionArea>
          );
        })}

      {articles.length > 0 && <Divider className={classes.divider} />}

      {events?.length > 0 && (
        <Title className={classes.titleEvent} transform="uppercase">
          {`${t('titleEvent')}`}
        </Title>
      )}
      {events.map((event, key) => {
        const name = getSafeValue(event, 'name', '');
        const startDate = getSafeValue(event, 'startDate', '');
        const month = moment(startDate).month() + 1; // Moment base month on 0
        const day = moment(startDate).date();

        return (
          <CardActionArea
            component={Link}
            to={`/event/${event?.[lang]?.slug}`}
            key={key}
            style={{ marginBottom: 24 }}>
            <EventCard
              day={t(`${formatDateLang(`Tháng ${month}`)}`)}
              month={day}
              title={name}
            />
          </CardActionArea>
        );
      })}
    </Fragment>
  );
};

export default RightNews;
