import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSafeValue } from 'utils';
import { TYPE_HOME_DATA, UI_TYPE_HOME_DATA } from 'utils/constant';
import {
  ContactForm,
  DownloadAppSection,
  EventSsection,
  FeaturedSection as UiSection1,
  LibrarySection as UiSection3,
  MapSection,
  NewsSection as UiSection2
} from './components';
import { Helmet } from 'react-helmet';
import LogoBEST from 'assets/img/logo-best.svg';

const Home = () => {
  const history = useHistory();
  const [homeData, setHomeData] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const dispatch = useDispatch();
  const homeDataDynamic = useSelector(state => state.setup.homeData);

  // useEffect(() => {
  //   const event = homeData.find(object => object.type === 'event');
  //   if (event && event.data) {
  //     setEventsData(event?.data || []);
  //   }
  // }, [homeData]);

  const handleRenderHome = (obj, index) => {
    const type = getSafeValue(obj, 'type', '');
    const uiType = getSafeValue(obj, 'uiType', '');

    if (type === TYPE_HOME_DATA.NEWS) {
      return <UiSection1 data={obj} isNews={true} key={index} />;
    } else if (type === TYPE_HOME_DATA.EVENT) {
      return <EventSsection data={obj} key={index} />;
    } else if (type === TYPE_HOME_DATA.COMPANY_LOCATION) {
      return <MapSection data={obj} key={index} />;
    } else {
      // News type, We need to sub check that typeUi is.
      if (uiType === UI_TYPE_HOME_DATA.ONE) {
        return <UiSection1 data={obj} isNews={false} key={index} />;
      } else if (uiType === UI_TYPE_HOME_DATA.TWO) {
        return <UiSection2 data={obj} key={index} />;
      } else if (uiType === UI_TYPE_HOME_DATA.THREE) {
        return <UiSection3 data={obj} key={index} />;
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

      {homeDataDynamic.map((obj, index) => {
        return handleRenderHome(obj, index);
      })}

      <DownloadAppSection />
      <ContactForm />
    </Fragment>
  );
};

export default Home;
