import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

import bolgeData from '../data/geo.json';
import miscData from '../data/bolgeMisc.json';
import markerIco from '../misc/marker.png';
import karadenizAudio from '../misc/audio/karadeniz.mp3';
import marmaraAudio from '../misc/audio/marmara.mp3';
import egeAudio from '../misc/audio/ege.mp3';
import akdenizAudio from '../misc/audio/akdeniz.mp3';
import doguAnadoluAudio from '../misc/audio/dogu_anadolu.mp3';
import guneydoguAnadoluAudio from '../misc/audio/guneydogu_anadolu.mp3';
import icAnadoluAudio from '../misc/audio/ic_anadolu.mp3';


mapboxgl.accessToken = "pk.eyJ1IjoiZmxleHR6aXVzIiwiYSI6ImNsdG4zbXlydzAycmUyanI4eGgyenh0ZXgifQ.C80dE1o4ddVGfnWCnd-FbA";


const Map = () => {

    function getBolgeID(name) {
        switch(name) {
            case "Akdeniz Bölgesi":
                return Number(1);
            case "Güneydoğu Anadolu Bölgesi":
                return Number(4);
            case "Ege Bölgesi":
                return Number(3);
            case "Doğu Anadolu Bölgesi":
                return Number(2);  
            case "Karadeniz Bölgesi":
                return Number(6);
            case "İç Anadolu Bölgesi":
                return Number(5);
            case "Marmara Bölgesi":
                return Number(7);
            default: 
                return undefined;
        };
    };

    function getBolgeAudio(id) {
        switch(id) {
            case 1:
                return akdenizAudio;
            case 2:
                return doguAnadoluAudio;
            case 3:
                return egeAudio;
            case 4:
                return guneydoguAnadoluAudio;
            case 5:
                return icAnadoluAudio;
            case 6:
                return karadenizAudio;
            case 7:
                return marmaraAudio;
            default:
                return undefined;
        }
    }

    function getBolgeData(id) {
        for(var i = 0; i < bolgeData.features.length; i++) {
            if(bolgeData.features[i].properties.bolge == id) {
                let infoText = '';
                bolgeData.features[i].properties.info.forEach((info) => {
                    infoText += `<li>${info}</li>`;
                });
                return infoText;
            } else {
                continue;
            };
        };
    };

    function getBolgeMisc(id) {
        for(var i = 0; i < miscData.data.length; i++) {
            let mutfakText = '';
            let dogalText = '';
            let tarihText = '';

            if(miscData.data[i].id === id) {
                miscData.data[i].mutfak.forEach((data) => {
                    mutfakText += `<li>${data}</li>`;
                });
                miscData.data[i].dogal.forEach((data) => {
                    dogalText += `<li>${data}</li>`;
                });
                miscData.data[i].tarih.forEach((data) => {
                    tarihText += `<li>${data}</li>`;
                });
                return `
                    <div className='popup3' id="popup3">
                        <div id="mutfak">
                            <h2>Mutfak</h2>
                            <ul>${mutfakText}</ul>
                        </div>
                        <div id="dogal">
                            <h2>Doğal Güzellikler</h2>
                            <ul>${dogalText}</ul>
                        </div>
                        <div id="tarih">
                            <h2>Tarihi Eserler</h2>
                            <ul>${tarihText}</ul>
                        </div>
                    </div>
                `;
            } else {
                continue;
            };
        };
    };

    function getBolgeHTML(bolge) {
        let bolgeID = getBolgeID(bolge);
        let bolgeInfo = getBolgeData(bolgeID);

        let bolgeHTML = `
        <div className='popup2'>
            <div>
                <h1>${bolge}</h1>
                <ul>${bolgeInfo}</ul>
                <audio src=${getBolgeAudio(bolgeID)} autoplay controls>
            </div>
        </div>`;

        return bolgeHTML;
    };

    const mapContainer = React.useRef();

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/flextzius/clu0zxhwz007h01qwf5m8hbbb",
            center: [35.51740388020312,38.98139580125658],
            zoom: 6,
            pitch: 20
        });

        map.on('load', () => {
            map.addSource('bolgeMarkers', {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "id": 0,
                            "properties": {
                                "name": "Marmara Bölgesi"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    28.430340164665438,40.560455807926445
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "id": 1,
                            "properties": {
                                "name": "Karadeniz Bölgesi"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    36.825363820955914,40.93603520448849
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "id": 2,
                            "properties": {
                                "name": "Doğu Anadolu Bölgesi"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    41.77390102465964,39.457533977720914
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "id": 3,
                            "properties": {
                                "name": "İç Anadolu Bölgesi"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    34.21474295600456,38.98081646751231
                                    
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "id": 4,
                            "properties": {
                                "name": "Akdeniz Bölgesi"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    33.87657299338889,36.71741289154933
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "id": 5,
                            "properties": {
                                "name": "Ege Bölgesi"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    29.360707013504367,38.592207050227245 
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "id": 6,
                            "properties": {
                                "name": "Güneydoğu Anadolu Bölgesi"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    40.63753237880567,37.64423538101592
                                ]
                            }
                        }
                    ]
                }
            });

            map.loadImage(markerIco, (error, image) => {
                if(error) throw error;

                map.addImage('bolgeMarker', image);
            });

            

            map.addLayer({
                id: 'bolgeMarkers',
                type: 'symbol',
                source: 'bolgeMarkers',
                layout: {
                    'icon-image': 'bolgeMarker',
                    'icon-size': 0.05
                }
            });

            const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });

            const popup2 = new mapboxgl.Popup({
                anchor: 'bottom',
                offset: 25,
                className: 'popup2',
                closeButton: true,
                closeOnClick: false,
                maxWidth: '800px'
            });

            const popup3 = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
                maxWidth: '800px',
                offset: 25,
                className: 'popup3',
                anchor: 'top'
            });

            map.on('mouseenter', 'bolgeMarkers', (e) => {
                map.getCanvas().style.cursor = 'pointer';
                const coordinates = e.features[0].geometry.coordinates.slice();
                const bolge = e.features[0].properties.name;

                while (Math.abs(e.lngLat.lng - coordinates[0] > 180)) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                };

                popup.setLngLat(coordinates).setHTML(bolge).addTo(map);
            });

            map.on('mouseleave', 'bolgeMarkers', () => {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });

            map.on('click', 'bolgeMarkers', (e) => {
                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.name;

                while (Math.abs(e.lngLat.lng - coordinates[0] > 180)) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                };

                map.flyTo({center: coordinates, zoom: 8, pitch: 75});

                popup2.setLngLat(coordinates).setHTML(getBolgeHTML(description)).addTo(map);
                popup3.setLngLat(coordinates).setHTML(getBolgeMisc(getBolgeID(description))).addTo(map);
                // popup2.getElement('mapboxgl-popup-close-button').style.width = '25px';
                // popup2.getElement('mapboxgl-popup-close-button').style.height = '25px';
                popup2.getElement('mapboxgl-popup-close-button').onclick = () => { popup2.remove() };

                popup2.on('close', (e) => {
                    map.flyTo({center: [35.51740388020312,38.98139580125658], zoom: 6, pitch: 20});
                    popup3.remove();
                });
            });
        });
    }, []);

    return (<div id="map" ref={mapContainer} style={{width: '100%', height: '100%'}}></div>)
};

export default Map;