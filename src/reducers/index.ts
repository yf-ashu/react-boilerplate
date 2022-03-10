import exampleReducer from '@client/reducers/example.reducer';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
	examples: exampleReducer,
});
