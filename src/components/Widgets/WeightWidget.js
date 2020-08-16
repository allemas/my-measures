import React from 'react';
import {connect} from 'react-redux'
import WeightChart from "../Weight/WeightChart";
import {fetch} from '../../api/weight';


class WeightWidget extends React.Component {

  componentDidMount() {
    const props = this.props;
    fetch('all').then((data) => {
      props.fetchWeight(data);
    })
  }

  render() {
    return (
      <div>
        <WeightChart measures={this.props.weight}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    weight: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeight: (data) => dispatch({type: 'LOAD_WEIGHT_ASYNC', data: data})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeightWidget);

