import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:{isActive:boolean, activeNumber:number} = {
	isActive: true,
	activeNumber: 0,
};

const focusAction = createSlice({
	name: 'focusAction',
	initialState,
	reducers: {
		active: (state, action: PayloadAction<{isActive:boolean}>) => ({
			...state,
			isActive: action.payload.isActive,
		}),
		increment: (state, action: PayloadAction<number>) => ({
			...state,
			activeNumber: state.activeNumber + action.payload,
		}),
	},
});

export const { increment, active } = focusAction.actions;

export default focusAction.reducer;
