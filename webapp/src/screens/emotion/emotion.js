import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png';
import Happy from '../../assets/happy.png';

import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Emotion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                    {latitude: 47.359423, longitude: -122.021071},
                    {latitude: 47.2052192687988, longitude: -121.988426208496},
                    {latitude: 47.6307081, longitude: -122.1434325},
                    {latitude: 47.3084488, longitude: -122.2140121},
                    {latitude: 47.5524695, longitude: -122.0425407}]
          }
        }
    
       
    
      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }} icon="https://img.icons8.com/emoji/452/angry-face-emoji--v2.png"></Marker>
        })
      }

    render() {
        return (
            <div>
                <div className="nav">
                    <img src={Logo} style={{height:50,width:50}}></img>
                </div>
                <div className="form">
                    <h1>Emotion Map</h1>
                    <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          {this.displayMarkers()}
        </Map></div>
        <div><p><Link to="/health">View Details</Link></p></div>
    <div>

    </div>
            </div>
        )
    }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBtKZ2lodfK2NSO_9fRjMxOUJslQH2tFEQ'
  })(Emotion);
const mapStyles = {
    width: '100%',
    height: '60%',
  };