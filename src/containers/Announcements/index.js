import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  actions as announcementsActions,
  selectors as announcementsSelectors,
} from './../../store/domains/Announcements';

import view from './view';

const mapStateToProps = (state) => {
  return {
    announcements: announcementsSelectors.selectAnnouncements(state),
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...announcementsActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(view);
