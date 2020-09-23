import React from "react";
import GoogleMap from './components/GoogleMap';

import Marker from './components/Marker';
import { apiIsLoaded } from './components/Functions';
import "./App.css";
import { mapStyles } from './mapstyles.js';
// import { mapStyles } from './mapstyles-bw.js';

const API_URL = "https://api.wmata.com/Bus.svc/json/jBusPositions";
const defaultCenter = [38.918690,-77.053362];


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      vehicles: []
    };
  }

componentDidMount() {
    fetch(API_URL, {
        headers: new Headers({
          "api_key": process.env.REACT_APP_WAMATA_API_KEY
        })
      })
      .then(response => response.json())
      .then(data => data.BusPositions)
      .then(data => {



      //const filteredVehicles = data.filter(vehicle => vehicle.lat === "number" && typeof vehicle.lon === "number");
      //data.map((data)=> console.log(data.Lon, data.Lat))

      this.setState({
        isLoaded: true,
        vehicles: data
      })
    })
  }

  render() {
    let { isLoaded, vehicles } = this.state;

    if (!isLoaded) {
      return <div className="loading">Loading<span>.</span><span>.</span><span>.</span></div>;
    } else {
      return (
        <div className="container">
          <GoogleMap
            defaultZoom={12}
            defaultCenter={defaultCenter}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, vehicles)}
            >
            {vehicles.map(vehicle => (
              <Marker 
              key={vehicle.vehicleID}
              lat={vehicle.Lat}
              lng={vehicle.Lon}
              data={vehicle}
              />
            ))}
          </GoogleMap>
        </div>
      );
    }
  }
}

export default App;