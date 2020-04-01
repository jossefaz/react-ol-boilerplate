import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { XYZ as XYZSource } from "ol/source";
import {
  ScaleLine,
  ZoomSlider,
  MousePosition,
  OverviewMap,
  FullScreen,
  defaults as DefaultControls
} from "ol/control";
import OSM from 'ol/source/OSM';

export const InitMap = () => {
  new Map({
    //  Display the map in the div with the id of map
    target: "map",
    controls: DefaultControls().extend([
        new FullScreen(),
        new ZoomSlider(),
        new ScaleLine(),
        new OverviewMap({
            layers: [
              new TileLayer({
                source: new OSM()
              })
            ]
          })
      ]),
    layers: [
      new TileLayer({
        source: new XYZSource({
          url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          projection: "EPSG:3857"
        })
      })
    ],
    // Render the tile layers in a map view with a Mercator projection
    view: new View({
      projection: "EPSG:3857",
      center: [0, 0],
      zoom: 2
    })
  });
};
