import { configureStore } from '@reduxjs/toolkit';

import goalReducer from '../features/goalSlice';

import editMissionReducer from './showEditMissionModal';

import editVisionReducer from './showEditVisionModal';

const store = configureStore({
  reducer: {
    showMission: editMissionReducer,
    showVision: editVisionReducer,
    goal: goalReducer,
  },
});

export default store;
