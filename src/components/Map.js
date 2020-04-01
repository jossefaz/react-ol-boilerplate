import React from "react";
import { connect } from 'react-redux'
import { MapInit } from '../redux/actions'
import config from 'react-global-configuration';
class MapComp extends React.Component {

  componentDidMount() {
    this.props.MapInit();
  }
  render() {
    const {style, target} = config.get("MapConfig")
    return <div id={target} style={style}></div>;
  }
}
const mapStateToProps = (state) => {
  return {map : state.map}
}


export default connect(mapStateToProps, {MapInit})(MapComp);
