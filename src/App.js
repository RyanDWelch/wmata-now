import React from 'react';
import Vehicle from './Vehicle';
import './App.css';


export class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      }
    }

    componentDidMount() {
      fetch('http://developer.trimet.org/ws/v2/vehicles/appID/')
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
          <div class="container">
            {items.resultSet.vehicle.map(item => (
              <Vehicle data={item} />
            ))}
          </div>
        )
      }
    }
}

export default App;
