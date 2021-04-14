import React, { Fragment, useEffect, useState } from 'react';
import {
  EventSsection,
  FeaturedSection as UiSection1,
  LibrarySection as UiSection3,
  MapSection,
  NewsSection as UiSection2,
  DownloadAppSection
} from './components';
import { urlGetHomeData } from 'services/urlAPI';
import axios from 'utils/axios';
import { object } from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { updateLang } from '../../reducers/multiLangSlice';
import { getSafeValue } from 'utils';
import { TYPE_HOME_DATA, UI_TYPE_HOME_DATA } from 'utils/constant';

const Home = () => {
  const history = useHistory();
  const [homeData, setHomeData] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const dispatch = useDispatch();
  const homeDataDynamic = useSelector(state => state.setup.homeData);

  // console.log('homeDataDynamic', homeDataDynamic);

  // useEffect(() => {
  //   const event = homeData.find(object => object.type === 'event');
  //   if (event && event.data) {
  //     setEventsData(event?.data || []);
  //   }
  // }, [homeData]);

  const handleRenderHome = obj => {
    const type = getSafeValue(obj, 'type', '');
    const uiType = getSafeValue(obj, 'uiType', '');

    if (type === TYPE_HOME_DATA.NEWS) {
      return <UiSection1 data={obj} isNews={true} />;
    } else if (type === TYPE_HOME_DATA.EVENT) {
      return <EventSsection data={obj} />;
    } else if (type === TYPE_HOME_DATA.COMPANY_LOCATION) {
      return <MapSection data={obj} />;
    } else {
      // We need to sub check that type is library or category.
      if (uiType === UI_TYPE_HOME_DATA.ONE) {
        return <UiSection1 data={obj} isNews={false} />;
      } else if (uiType === UI_TYPE_HOME_DATA.TWO) {
        return <UiSection2 data={obj} />;
      } else if (uiType === UI_TYPE_HOME_DATA.THREE) {
        return <UiSection3 data={obj} />;
      } else {
        return <></>;
      }
    }
  };

  return (
    <Fragment>
      {/* <Button
        variant="contained"
        onClick={() => {
          dispatch(updateLang('en'));
        }}>
        Default
      </Button> */}

      {homeDataDynamic.map(obj => {
        return handleRenderHome(obj);
      })}

      <DownloadAppSection />
    </Fragment>
  );
};

export default Home;
