import { Button, Divider, Grid, CircularProgress } from '@material-ui/core';
import {
  AccessTime,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter
} from '@material-ui/icons';
import Lodash from 'lodash';
import moment from 'moment';
import ShareSocial from 'components/ShareSocial';
import { Fragment, useEffect, useRef, useState } from 'react';
import useStylesLibrary from 'views/Library/style';
import NewsEvent from 'views/Search/component/news-event';
import useStylesDetailVideo from '../detail-video/style';
import { Container } from 'components';
import RightNews from 'components/RightNews';
import { useSelector } from 'react-redux';
import { getSafeValue, getTransObj } from 'utils';
import { getArticleDetail } from 'services/articles';
import { DATE_FORMAT } from 'utils/constant';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const DetailDocument = props => {
  const classesDetailVideo = useStylesDetailVideo();
  const classesLibrary = useStylesLibrary();
  const refPdf = useRef(null);
  const [heightPdf, setHeightPdf] = useState(null);
  const lang = useSelector(state => state.multiLang.lang);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const image = Lodash.get(data, 'urlImg', '');
  const title = Lodash.get(data, 'title', '');
  const authorName = getSafeValue(data, 'authorName', '');
  const startTime = Lodash.get(data, 'publishedAt', '');
  const date = new Date(startTime);
  const formatDate = moment(date).format(DATE_FORMAT);
  const month = moment(date).month() + 1; // Moment base month on 0
  const day = moment(date).date();
  const dayStr = moment(date).format('dddd');
  const [pdf, setPdf] = useState('');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    let rect = refPdf?.current?.getBoundingClientRect();
    let heightPdf = window.innerHeight - rect.top - 20;
    setHeightPdf(Math.max(heightPdf, matches ? 700 : 300));
  }, [pdf]);

  const transformData = obj => {
    const transArr = getSafeValue(obj, 'translations', []);
    const objTrans = getTransObj(transArr, lang);
    return { ...obj, ...objTrans };
  };

  useEffect(() => {
    const id = props.match.params.id;
    const indexUrl = props.match.params.indexUrl;

    setLoading(true);
    getArticleDetail(id)
      .then(res => {
        const dataRes = getSafeValue(res, 'data', {});
        const newData = transformData(dataRes);
        // const sourceFile = getSafeValue(dataRes, 'sources', []);
        const pdfFile = getSafeValue(dataRes, `sources[${indexUrl}]`, '');
        // console.log('pdfFile', pdfFile);
        // const pdfFile = sourceFile.length > 0 ? sourceFile[0] : '';
        setPdf(pdfFile);
        setData(newData);
      })
      .catch(err => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={4} style={{ padding: '25px 0' }}>
        <Grid item xs={12} md={8}>
          {loading && (
            <div
              style={{
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <CircularProgress size={30} style={{ color: '#A0BE37' }} />
            </div>
          )}

          <Fragment>
            <div className={classesDetailVideo.title}>{title}</div>
            <div className={classesDetailVideo.shareBox}>
              {/* <Button className={classesDetailVideo.libraryBtn}>THƯ VIỆN</Button> */}
              <div className={classesDetailVideo.time}>
                <AccessTime className={classesDetailVideo.timeIcon} />
                <div>{formatDate}</div>
              </div>
              <ShareSocial />
            </div>

            <div ref={refPdf}>
              {heightPdf && (
                <iframe
                  src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${pdf}#toolbar=0&scrollbar=0`}
                  frameBorder="0"
                  scrolling="auto"
                  height={heightPdf}
                  width="100%"></iframe>
              )}
            </div>

            <div className={classesDetailVideo.author}>{authorName}</div>
            <Divider className={classesDetailVideo.divider} />
          </Fragment>
        </Grid>

        <Grid item xs={12} md={4} className={classesLibrary.rightSidebar}>
          <RightNews />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailDocument;
