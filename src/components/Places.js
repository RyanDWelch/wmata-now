import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GooglePlacesAPI extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.378908%2C-122.763800&rankby=distance&type=bus_station&key=AIzaSyAgw8hNDC9v1vRTEBe6oW7XOFrX0XT9d_Y")
      .then(res => res.json())
      .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          });
        }
      )
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

      return(
        <div>
          {items.results.map(item => (
            <Marker
              onClick={this.onMarkerClick}
              name={item.name}
              position={{lat: item.geometry.location.lat, lng: item.geometry.location.lng}}
            />
          ))}
        </div>
      )
    }
  }
}
