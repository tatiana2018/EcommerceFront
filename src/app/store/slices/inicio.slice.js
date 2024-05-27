import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	carrusel: JSON.parse(localStorage.getItem('carrusel') ?? '[]'),
	cargando: false,
	error: null,
};

export const inicioSlice = createSlice({
	name: 'inicio',
	initialState,
	reducers: {
		llenarCarrusel: (state, action) => {
			state.carrusel = action.payload;

			localStorage.setItem('carrusel', JSON.stringify(state.carrusel));
		},
		limpiarSlice: () => initialState,
	},
});



export const {  llenarCarrusel, limpiarSlice } = inicioSlice.actions;
export default inicioSlice.reducer;
