import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  actions as announcementsActions,
  selectors as announcementsSelectors,
} from './../../store/Announcements';

import { Announcements } from './view';

const mapStateToProps = (state) => {
  return {
    list: announcementsSelectors.getSearchAnnouncements(state),
    similarAnnouncements: announcementsSelectors.getSimilarAnnouncements(state),
    currentAnnouncementItem: announcementsSelectors.getCurrentAnnouncement(
      state
    ),
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...announcementsActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);
