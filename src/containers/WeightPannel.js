import {connect} from 'react-redux'
import Weight from "../components/Weight/Weight";
import {fetch} from "../api/weight";

const mapStateToProps = state => ({
  weight: state,
});

const mapDispatchToProps = dispatch => ({
  addWeight: data => dispatch({type: 'ADD_WEIGHT', weight: data.weight, feeling: data.feeling}),
  fetchWeight : (data) => dispatch({type: 'LOAD_WEIGHT_ASYNC', data: data})
})

export default connect(mapStateToProps, mapDispatchToProps)(Weight);

