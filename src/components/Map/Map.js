import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";

const MapMarker = () => <div className='map-marker'><i class="fas fa-map-marker-alt"></i></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="map-container" style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD7pUETEynRKDKLbWhYG6dCtKgRcEEhGfU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapMarker lat={59.955413} lng={30.337844} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
