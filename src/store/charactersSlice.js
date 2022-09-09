import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {URI_API} from '../api/const';

export const getCharacters = createAsyncThunk(
	'characters/getCharacters',
	(character, {getState}) => {
		const next = getState().characters.next;

		return axios(!next ? `${URI_API}character` : next)
			.then(({data}) => data)
			.catch((error) => ({error: error.toString()}));
	}
);

const charactersSlice = createSlice({
	name: 'characters',
	initialState: {
		characters: [],
		loading: '',
		error: '',
		next: '',
	},
	reducers: {},
	extraReducers: {
		[getCharacters.pending]: (state) => {
			state.loading = 'loading';
		},
		[getCharacters.fulfilled]: (state, action) => {
			state.loading = 'success';
			state.characters = [...state.characters, ...action.payload.results];
			state.next = action.payload.info.next;
		},
		[getCharacters.rejected]: (state) => {
			state.loading = 'error';
			state.holidays = {};
		},
	}
});

export const {setCharacter} = charactersSlice.actions;

export default charactersSlice.reducer;
