import { createSelector } from 'reselect';

export const selectAnnouncements = (state) => state.announcements.list;
export const selectSearchAnnouncements = (state) =>
  state.announcements.searchData;

export const getSearchAnnouncements = createSelector(
  selectSearchAnnouncements,
  selectAnnouncements,
  (searchData, list) => {
    return searchData
      ? list.filter((elem) => {
          const index = elem.title.indexOf(searchData);
          if (index >= 0) return true;
          else return false;
        })
      : list;
  }
);

export const getSimilarAnnouncements = createSelector(
  selectAnnouncements,
  (list) => {
    return list.reduce((acc, announcement, index, array) => {
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
