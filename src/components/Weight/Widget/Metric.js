import React from 'react';

const Metric = (props) => {

  var styles = {
    'borderRadius': '.25rem',
    'boxShadow': '0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2)',
    'display': 'block',
    'padding': '1rem',
    'paddingTop': '2.5rem',
    'paddingBottom': '2.5rem',

    'background': 'rgba(75,192,192,0.8)',
    'position': 'relative',
    'color': "#FFF",
  };

  return (
    <div style={styles}>
      <div className="inner">
        <h5>Poids actuel</h5>
      </div>
      <div className="inner">
        <h3>{props.weight || 10} Kg.</h3>
      </div>
      <div className="icon">
        <i className="ion ion-bag"></i>
      </div>
    </div>
  );

}

export default Metric;
