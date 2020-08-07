import {connect} from 'react-redux'
import Weight from "../components/Weight/Weight";

const mapStateToProps = state => ({
  weight: state.weight,
});

const mapDispatchToProps = dispatch => ({
  addWeight: data => dispatch({type: 'ADD_WEIGHT', weight: data.weight, feeling: data.feeling})
})

export default connect(mapStateToProps, mapDispatchToProps)(Weight);
