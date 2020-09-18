import {connect} from 'react-redux'
import Weight from "../components/Weight/Weight";
import {fetch} from "../api/weight";

const mapStateToProps = state => ({
  weight: state.weight,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addWeight: data => dispatch({type: 'ADD_WEIGHT', weight: data.weight, feeling: data.feeling, date: data.date}),
  postWeight: data => dispatch({type: 'POST_WEIGHT', data}),
  fetchWeight: (data) => dispatch({type: 'LOAD_WEIGHT_ASYNC', data: data})
})

export default connect(mapStateToProps, mapDispatchToProps)(Weight);

