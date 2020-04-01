import React from "react";
import { InitMap } from '../utils/maputils'

class OLMapFragment extends React.Component {

  componentDidMount() {
    InitMap()

  }

  render() {
    const style = {
      width: "100%",
      height: "100vh",
      backgroundColor: "#cccccc"
    };
    return <div id="map" style={style}></div>;
  }
}
export default OLMapFragment;
