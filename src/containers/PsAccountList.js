import { connect } from 'react-redux';
import * as actions from '../actions/psAccountsActions';

import PsAccountList from '../components/PsAccountList';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(PsAccountList);
