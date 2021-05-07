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
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
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
  const [heightPdf, setHeightPdf] = useState(null);
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
              <PdfViewer height={heightPdf} url={pdf} />
            </div>
            <div className={classesDetailVideo.download}>
              {t('clickHereTo')}&nbsp;
              <Link href={pdf} target="_blank">
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
    </Container>
  );
};

export default DetailDocument;
