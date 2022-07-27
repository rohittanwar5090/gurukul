import React, { Component } from 'react'
import { Map, GoogleApiWrapper , Marker } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%',
  };
class GoogleMap extends Component {
    render() {
        return (
            <div className='flex justify-center'>
             <Map
              google={this.props.google}
              zoom={8}
            //   style={mapStyles}
              initialCenter={{ lat: 29.0270, lng: 77.3576}}
            >
              <Marker position={{ lat: 29.0270, lng: 77.3576}} />
            </Map>
            </div>
           
        );
      } 
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyAfeA2gi0q4o-yzWdMk8vPHUT3gSZYyQVg"
  })(GoogleMap);


