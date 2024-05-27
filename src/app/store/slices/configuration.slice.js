import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	imageSelected: null,
    
};

export const configurationSlice = createSlice({
	name: 'configuration',
	initialState,
	reducers: {
		llenarImage: (state, action) => {
			state.imageSelected = action.payload;
		},
		limpiarSlice: () => initialState,
	},
});



export const {  llenarImage, limpiarSlice } = configurationSlice.actions;
export default configurationSlice.reducer;
