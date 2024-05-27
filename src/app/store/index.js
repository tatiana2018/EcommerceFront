import { configureStore } from '@reduxjs/toolkit';
import inicioReducer from './slices/inicio.slice';
import configurationReducer from './slices/configuration.slice';

export const store = configureStore({
	reducer: {
		inicio: inicioReducer,
		configuration: configurationReducer
	},
});
