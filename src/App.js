import React from "react";
import GoogleMap from './components/GoogleMap';

import Marker from './components/Marker';
import Stats from './components/Stats';
import { apiIsLoaded } from './components/Functions';
import "./App.css";
import { mapStyles } from './mapstyles.js';
// import { mapStyles } from './mapstyles-bw.js';

const API_KEY = "CC57D2038B76DBBD253D6A587";
const API_URL = "https://developer.trimet.org/ws/v2/vehicles/appID/"+API_KEY;
const defaultCenter = [45.519526,-122.677040];


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      vehicles: []
    };
  }

  async componentDidMount() {
    let totalRequests = 0;
    try {
      setInterval(async () => {
        if (totalRequests < 10) {
          const res = await fetch(API_URL);
          const json = await res.json();
          // const filteredVehicles = json.resultSet.vehicle.filter(vehicle => vehicle.type === 'rail');
          const vehicles = json.resultSet.vehicle;

          this.setState({
            isLoaded: true,
            vehicles: vehicles
          })
          totalRequests++;
        }
      }, 10000);
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    let { isLoaded, vehicles } = this.state;

    if (!isLoaded) {
      return <div className="loading">loading<span>.</span><span>.</span><span>.</span></div>;
    } else {
      return (
        <div className="container">
          <GoogleMap
            defaultZoom={12}
            defaultCenter={defaultCenter}
            options={{
              styles: mapStyles
            }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, vehicles)}
            >
            {vehicles.map(vehicle => (
              <Marker 
              key={vehicle.vehicleID}
              text={vehicle.signMessageLong}
              type={vehicle.type}
              lat={vehicle.latitude}
              lng={vehicle.longitude}
              data={vehicle}
              />
            ))}
          </GoogleMap>
          <Stats data={vehicles} />
        </div>
      );
    }
  }
}

export default App;