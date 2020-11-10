import { createSelector } from 'reselect';

export const selectAnnouncements = (state) => state.announcements.list;
export const selectCurrentAnnouncement = (state) =>
  state.announcements.currentAnnouncement;
export const selectSearchAnnouncements = (state) =>
  state.announcements.searchData;

export const getSearchAnnouncements = createSelector(
  selectSearchAnnouncements,
  selectAnnouncements,
  (searchData, list) => {
    return searchData
      ? list.filter((elem) => {
          const index = elem.title
            .toLowerCase()
            .indexOf(searchData.toLowerCase());
          if (index >= 0) return true;
          else return false;
        })
      : list;
  }
);

export const getCurrentAnnouncement = createSelector(
  selectCurrentAnnouncement,
  selectAnnouncements,
  (currentAnnouncement, list) => {
    return list.find((announcement) => announcement.id === currentAnnouncement);
  }
);

export const getSimilarAnnouncements = createSelector(
  selectAnnouncements,

  (list) => {
    return list.reduce((acc, announcement, index, array) => {
      console.log(announcement);
      const announcementsTitleWords = announcement.title
        .toLowerCase()
        .split(' ');
      const announcementsDescriptionWords = announcement.description
        .toLowerCase()
        .split(' ');

      const similarAnnouncements = array.filter(
        (similarAnnouncement, similarIndex) => {
          const similarAnnouncementTitleWords = similarAnnouncement.title
            .toLowerCase()
            .split(' ');
          const similarAnnouncementDescriptionWords = similarAnnouncement.description
            .toLowerCase()
            .split(' ');
          const similarInTitle = announcementsTitleWords.some((word) =>
            similarAnnouncementTitleWords.includes(word)
          );
          const similarInDescription = announcementsDescriptionWords.some(
            (word) => similarAnnouncementDescriptionWords.includes(word)
          );
          return (
            similarInTitle && similarInDescription && index !== similarIndex
          );
        }
      );
      acc[announcement.id] = similarAnnouncements;
      return acc;
    }, {});
  }
);
