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

const Home = () => {
  const history = useHistory();
  const [homeData, setHomeData] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const dispatch = useDispatch();
  const homeDataDynamic = useSelector(state => state.setup.homeData);

  console.log('homeDataDynamic', homeDataDynamic);

  useEffect(() => {
    const event = homeData.find(object => object.type === 'event');
    if (event && event.data) {
      setEventsData(event?.data || []);
    }
  }, [homeData]);

  return (
    <Fragment>
      {/* <Button
        variant="contained"
        onClick={() => {
          // dispatch(updateLang('en'));
          // history.push({
          //   pathname: `/event`
          // });
        }}>
        Default
      </Button> */}

      <UiSection1 featuredData={featuredData} />
      <UiSection3 newsData={newsData} />
      <UiSection2 />

      <EventSsection eventsData={eventsData} />
      <MapSection />
      <DownloadAppSection />
    </Fragment>
  );
};

export default Home;
