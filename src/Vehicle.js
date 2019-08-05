import React from "react";
import busImage from "./mode-bus.png";
import maxImage from "./mode-max.png";

export class Vehicle extends React.Component {
  render() {
    var item = this.props.data;

    function getTrainName(num) {
      switch (num) {
        case 90:
          return "red";
          break;
        case 100:
          return "blue";
          break;
        case 200:
          return "green";
          break;
        case 190:
          return "yellow";
          break;
        case 290:
          return "orange";
          break;
      }
    }

    if (item.type == "rail") {
      return (
        <div
          key={item.tripID}
          class="vehicle train"
          data-max-line={getTrainName(item.routeNumber)}
        >
          <img src={maxImage} />
          <div class="route-title">{item.signMessageLong}</div>
          <div class="additional-content">
            <div>
              {item.latitude}/{item.longitude}
            </div>
            <div>delay: {item.delay}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={item.tripID} class="vehicle bus">
          <img src={busImage} />
          <div>Bus {item.routeNumber}</div>
          <div class="route-title">{item.signMessageLong}</div>
          <div class="additional-content">
            <div>
              {item.latitude}/{item.longitude}
            </div>
            <div>delay: {item.delay}</div>
          </div>
        </div>
      );
    }
  }
}

export default Vehicle;

// all data variables:

// <div>expires: {item.expires}</div>
// <div>signMessage: {item.signMessage}</div>
// <div>serviceDate: {item.serviceDate}</div>
// <div>loadPercentage: {item.loadPercentage}</div>
// <div>latitude: {item.latitude}</div>
// <div>nextStopSeq: nextStopSeq{item.nextStopSeq}</div>
// <div>source: {item.source}</div>
// <div>type: {item.type}</div>
// <div>blockID: {item.blockID}</div>
// <div>signMessageLong: {item.signMessageLong}</div>
// <div>lastLocID: {item.lastLocID}</div>
// <div>nextLocID: {item.nextLocID}</div>
// <div>locationInScheduleDay: {item.locationInScheduleDay}</div>
// <div>newTrip: {item.newTrip}</div>
// <div>longitude: {item.longitude}</div>
// <div>direction: {item.direction}</div>
// <div>inCongestion: {item.inCongestion}</div>
// <div>routeNumber: {item.routeNumber}</div>
// <div>bearing: {item.bearing}</div>
// <div>garage: {item.garage}</div>
// <div>tripID: {item.tripID}</div>
// <div>delay: {item.delay}</div>
// <div>extraBlockID: {item.extraBlockID}</div>
// <div>messageCode: {item.messageCode}</div>
// <div>lastStopSeq: {item.lastStopSeq}</div>
// <div>vehicleID: {item.vehicleID}</div>
// <div>time: {item.time}</div>
// <div>offRoute: {item.offRoute}</div>
