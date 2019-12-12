import { combineEpics } from 'redux-observable';

import movieListSlice from 'store/slices/movieListSlice';
import genresSlice from 'store/slices/genresSlice';
import movieSlice from 'store/slices/movieSlice';

export default combineEpics(
  movieListSlice.epic,
  genresSlice.epic,
  movieSlice.epic
);
