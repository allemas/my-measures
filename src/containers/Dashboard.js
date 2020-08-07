import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Dashboard from "../components/Dashboard";
import * as Actions from '../actions';

const mapStateToProps = state => ({
  weight: state.weight,
});

const mapDispatchToProps = dispatch => ({
  addWeight: data => dispatch({type: 'ADD_WEIGHT', weight: data.weight, feeling: data.feeling})
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
