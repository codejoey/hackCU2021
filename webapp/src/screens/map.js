import React from 'react';
import { Map } from '@esri/react-arcgis';

export default class Mapp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            view: null
        };
    }

    render() {
        return <Map
        class="full-screen-map"
        mapProperties={{ basemap: 'satellite' }}
    />

    }

}