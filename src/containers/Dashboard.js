import {connect} from 'react-redux'
import Dashboard from "../components/Dashboard";

const mapStateToProps = state => ({
  weight: state,
});

const mapDispatchToProps = dispatch => ({
  addWeight: data => dispatch({type: 'ADD_WEIGHT', weight: data.weight, feeling: data.feeling})
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
