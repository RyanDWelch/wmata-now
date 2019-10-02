import React from "react";
import GoogleMap from './components/GoogleMap';

import Marker from './components/Marker';
import Navigation from './components/Navigation';
import Stats from './components/Stats';

import "./App.css";
import { get } from "http";

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
  const bounds = new maps.LatLngBounds();

  places.forEach((place) => {
    bounds.extend(new maps.LatLng(
      place.latitude,
      place.longitude,
    ));
  });
  return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, places) => {
  // Get bounds by our places
  const bounds = getMapBounds(map, maps, places);
  // Fit map to bounds
  map.fitBounds(bounds);
  // Bind the resize listener
  bindResizeListener(map, maps, bounds);
};


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  getData() {
    fetch(
      "https://developer.trimet.org/ws/v2/vehicles/appID/CC57D2038B76DBBD253D6A587"
    )
      .then(res => res.json())
      .then(json => {
        // filter out busses
        const filteredVehicles = json.resultSet.vehicle.filter(vehicle => vehicle.type == 'rail');
        this.setState({
          isLoaded: true,
          items: filteredVehicles
        });
      });
      console.log('got data');
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <GoogleMap
            defaultZoom={12}
            defaultCenter={[45.519526,-122.677040]}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, items)}
            >
            {items.map(item => (
              <Marker 
              key={item.vehicleID}
              text={item.signMessageLong}
              type={item.type}
              lat={item.latitude}
              lng={item.longitude}
              data={item}
              />
            ))}
          </GoogleMap>
          <Navigation />
          <button onClick={() => this.getData}>UPDATE DATA</button>
          <Stats
            data={items}
          />
        </div>
      );
    }
  }
}

export default App;