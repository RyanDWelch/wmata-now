import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 45.519526,
      lng: -122.677040
    },
    zoom: 12
  };
 
  render() {

    var items = this.vehicle;
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA-GZmh7jYFI9Qc_4w6sXkUnU9nirea8o0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        {items.resultSet.vehicle.map(item => (
          <Marker 
          key={item.tripID}
          text={item.signMessageLong}
          lat={item.latitude}
          lng={item.longitude}
          />
        ))}

        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
