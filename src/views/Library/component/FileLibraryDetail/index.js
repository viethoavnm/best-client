import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  Link
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AccessTime } from '@material-ui/icons';
import { Container } from 'components';
import RightNews from 'components/RightNews';
import ShareSocial from 'components/ShareSocial';
import Lodash from 'lodash';
import moment from 'moment';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getArticleDetail } from 'services/articles';
import { convertTranslations, getSafeValue, getTransObj } from 'utils';
import { DATE_FORMAT, TYPE_MENU } from 'utils/constant';
import useStylesLibrary from 'views/Library/style';
import { ReactComponent as DownloadIcon } from '../../../../assets/img/download.svg';
import useStylesDetailVideo from '../detail-video/style';
import PdfViewer from './pdf-viewer';

const DetailDocument = props => {
  const classesDetailVideo = useStylesDetailVideo();
  const classesLibrary = useStylesLibrary();
  const refPdf = useRef(null);
  const { slug, indexUrl } = useParams();
  const [heightPdf, setHeightPdf] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(0);
  const [data, setData] = useState({});
  const title = Lodash.get(data, 'title', '');
  const authorName = getSafeValue(data, 'authorName', '');
  const startTime = Lodash.get(data, 'publishedAt', '');
  const date = new Date(startTime);
  const formatDate = moment(date).format(DATE_FORMAT);
  const [pdf, setPdf] = useState('');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();
  const menuData = useSelector(state => state.setup.menu);
  const lang = useSelector(state => state.multiLang.lang);
  const [libraryMenu, setLibraryMenu] = useState();

  useEffect(() => {
    if (Array.isArray(menuData)) {
      let libraryMenu = menuData.find(menu => menu?.type === TYPE_MENU.LIBRARY);
      setLibraryMenu(convertTranslations({ ...libraryMenu }));
    }
  }, [menuData]);

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
    setLoading(true);
    getArticleDetail(slug)
      .then(res => {
        const dataRes = getSafeValue(res, 'data', {});
        const newData = transformData(dataRes);
        setPdf(dataRes?.medias?.[indexUrl]);
        setData(newData);
      })
      .catch(err => {
        setLoadError(err.response.status);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  const metaTitle = `${title ? title : 'File'} - BEST`;
  return (
    <Fragment>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
      </Helmet>
      <Container>
        {loadError === 404 ? (
          <Error404 />
        ) : loadError === 500 ? (
          <Error500 />
        ) : (
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
                <div className={classesDetailVideo.title}>{pdf?.name}</div>
                <div className={classesDetailVideo.shareBox}>
                  <Button className={classesDetailVideo.libraryBtn}>
                    {libraryMenu?.[lang]?.name}
                  </Button>
                  <div className={classesDetailVideo.time}>
                    <AccessTime className={classesDetailVideo.timeIcon} />
                    <div>{formatDate}</div>
                  </div>
                  <ShareSocial />
                </div>

                <div ref={refPdf}>
                  <PdfViewer height={heightPdf} url={pdf?.url} />
                </div>
                <div className={classesDetailVideo.download}>
                  {t('clickHereTo')}&nbsp;
                  <Link href={pdf?.url} target="_blank">
                    {t('download')}&nbsp;
                    <DownloadIcon />
                  </Link>
                </div>
                <div className={classesDetailVideo.author}>{authorName}</div>
                <Divider className={classesDetailVideo.divider} />
              </Fragment>
            </Grid>

            <Grid item xs={12} md={4} className={classesLibrary.rightSidebar}>
              <RightNews />
            </Grid>
          </Grid>
        )}
      </Container>
    </Fragment>
  );
};

export default DetailDocument;
