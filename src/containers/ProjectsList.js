import { connect } from 'react-redux';
import * as actions from '../actions/projectsActions';

import ProjectsList from '../components/ProjectsList';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(ProjectsList);
