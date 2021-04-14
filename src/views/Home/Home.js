import React, { Fragment, useEffect, useState } from 'react';
import {
  EventSsection,
  FeaturedSection,
  LibrarySection,
  MapSection,
  NewsSection,
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

  useEffect(() => {
    let mounted = true;

    const fetchData = () => {
      const path = urlGetHomeData;

      axios
        .get(`${path}`, {})
        .then(response => {
          if (mounted) {
            // console.log('GetHomeData: ', response);
            const resHomeData = response?.data;

            setHomeData(resHomeData);
          }
        })
        .catch(error => {
          console.log('error: ', error);
        });
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

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

      <FeaturedSection featuredData={featuredData} />
      <NewsSection newsData={newsData} />
      <LibrarySection />
      <EventSsection eventsData={eventsData} />
      <MapSection />
      <DownloadAppSection />
    </Fragment>
  );
};

export default Home;
