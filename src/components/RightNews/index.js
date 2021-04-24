import { CardActionArea, createStyles, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { EventCard, NewsCard, Title } from 'components';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Lodash from 'lodash';
import { getLinkFromArticle, getSafeValue, getTransObj } from 'utils';
import { DATE_FORMAT } from 'utils/constant';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import { formatDateLang } from 'utils';

const useStyles = makeStyles(() =>
  createStyles({
    divider: {
      marginTop: 35,
      marginBottom: 25
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
  const history = useHistory();
  const { t } = useTranslation();
  const transformArticle = (listMenu, lang) => {
    const newList = Lodash.map(listMenu, obj => {
      const cateTrans = getSafeValue(obj, 'category.translations', []);
      const translations = getSafeValue(obj, 'translations', []);
      const objTrans = getTransObj(translations, lang);
      const objCateTrans = getTransObj(cateTrans, lang);

      return { ...obj, ...objTrans, cateName: objCateTrans.name };
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

  const handleClickArticle = obj => {
    const linkDirect = getLinkFromArticle(obj);
    history.push({
      pathname: linkDirect
    });
  };

  const handleClickEvent = event => {
    history.push({
      pathname: `/event/${event._id}`
    });
  };

  return (
    <Fragment>
      {articles.length > 0 && <Title>{t('newTitle')}</Title>}
      {articles.map(article => {
        const cateName = getSafeValue(article, 'cateName', '');
        const publishedAt = getSafeValue(article, 'publishedAt', '');
        const date = moment(publishedAt).format(DATE_FORMAT);

        return (
          <CardActionArea
            onClick={() => handleClickArticle(article)}
            style={{ paddingTop: 10, paddingBottom: 10 }}>
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

      {events.length && <Title transform="uppercase">{t('titleEvent')}</Title>}
      {events.map(event => {
        const name = getSafeValue(event, 'name', '');
        const startDate = getSafeValue(event, 'startDate', '');
        const month = moment(startDate).month() + 1; // Moment base month on 0
        const day = moment(startDate).date();

        return (
          <CardActionArea
            onClick={() => handleClickEvent(event)}
            style={{ paddingTop: 10, paddingBottom: 10 }}>
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
