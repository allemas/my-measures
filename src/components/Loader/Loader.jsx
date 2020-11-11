import React from "react";
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types';


const LoaderMyMeasure = (props) => {
  const divStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  return (<div style={divStyle}>
    <Loader type="TailSpin" color="#000" height={80} width={80} visible={props.isVisible}/>
  </div>)
}

LoaderMyMeasure.propTypes = {
  isVisible: PropTypes.bool
}

export default LoaderMyMeasure;
