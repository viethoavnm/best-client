import MarkerClusterer from '@google/markerclusterer';
import { IconButton, Tooltip } from '@material-ui/core';
import { MyLocation } from '@material-ui/icons';
import biomassMarker from 'assets/img/biomass-marker.png';
import mechanicalMarker from 'assets/img/mechanical-marker.png';
import myLocationMarker from 'assets/img/my-location-marker.png';
import GoogleMapReact from 'google-map-react';
import { debounce } from 'lodash';
import { Fragment } from 'react';
import { memo, PureComponent } from 'react';
import { searchShop } from 'services/shop';
import {
  DEFAULT_DEBOUNCE,
  DEFAULT_LAT,
  DEFAULT_LNG,
  GOOGLE_MAP_KEY,
  SHOP_SEARCH_RADIUS
} from 'utils/constant';
import './style.css';
import VnMarker from './vn-maker';
const SHOP_TYPE = {
  coKhi: 'Cơ sở cơ khí',
  banSinhKhoi: 'Cơ sở bán sinh khối'
};

class Map extends PureComponent {
  googleMapRef;
  googleRef;
  markers;
  markerCluster;
  constructor(props) {
    super(props);
    this.state = {
      ok: false,
      shopList: [],
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
      radius: SHOP_SEARCH_RADIUS
    };
  }

  componentDidMount() {
    const { lat, lng } = this.state;
    this.onSearchShop({ lat, lng });
  }

  updateMarker = () => {
    if (this.googleMapRef && this.googleRef) {
      // clearn all markers
      this.markerCluster?.clearMarkers();
      for (let i = 0; i < this.markers?.length; i++) {
        this.markers[i].setMap(null);
      }
      // new markers
      this.markers = this.state.shopList.map(shop => {
        let marker = new this.googleRef.Marker({
          position: { lat: shop?.lat, lng: shop?.lng },
          icon:
            shop?.type === SHOP_TYPE.banSinhKhoi
              ? biomassMarker
              : mechanicalMarker
        });
        ((marker, shop, onClickMarker) => {
          this.googleRef.event.addListener(marker, 'click', function() {
            onClickMarker(shop);
          });
        })(marker, shop, this.onChangeShop);
        return marker;
      });
      this.markerCluster = new MarkerClusterer(
        this.googleMapRef,
        this.markers,
        {
          imagePath:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
          gridSize: 10,
          minimumClusterSize: 2
        }
      );
    }
  };

  onSearchShop = ({ lat, lng }) => {
    searchShop({
      params: { lat, lng, radius: SHOP_SEARCH_RADIUS }
    })
      .then(res => {
        let shopList = res.data?.results;
        if (Array.isArray(shopList)) {
          this.setState({ shopList }, this.updateMarker);
        }
      })
      .catch(() => {});
  };

  debounceSearch = debounce(this.onSearchShop, DEFAULT_DEBOUNCE);

  setGoogleMapRef(map, maps) {
    this.googleMapRef = map;
    this.googleRef = maps;
    this.updateMarker();

    this.googleMapRef.addListener('click', this.onClickMap);
  }

  onClickMap = mapsMouseEvent => {
    let lat = mapsMouseEvent?.latLng?.lat();
    let lng = mapsMouseEvent?.latLng?.lng();
    let data = { lat, lng };
    this.setState(data);
    this.debounceSearch(data);
  };

  onChangeShop = shop => {
    let { setShop } = this.props;
    setShop instanceof Function && setShop(shop);
  };

  getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          this.setState({ lat, lng }, () => {
            this.googleMapRef?.setCenter(
              new this.googleRef.LatLng({ lat, lng })
            );
            this.onSearchShop({ lat, lng });
          });
        },
        () => {
          alert('Could not find location');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  render() {
    const { lat, lng } = this.state;
    return (
      <Fragment>
        <div className="map-box" style={{ height: 350 }}>
          <div style={{ position: 'relative', height: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) =>
                this.setGoogleMapRef(map, maps)
              }
              defaultCenter={{ lat, lng }}
              defaultZoom={15}>
              <Marker lat={lat} lng={lng} src={myLocationMarker} />
              <VnMarker lat={16.66657} lng={112.72541} />
              <VnMarker lat={10.7233} lng={115.8265} />
            </GoogleMapReact>
            <div className="map-my-location">
              <Tooltip title="Vị trí của bạn">
                <IconButton
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#ffffff',
                    borderRadius: 10
                  }}
                  onClick={this.getMyLocation}>
                  <MyLocation />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default memo(Map);

const Marker = ({ src }) => {
  return <img src={src} alt="" className="my-marker" />;
};
