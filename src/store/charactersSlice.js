import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {URI_API} from '../api/const';

export const getCharacters = createAsyncThunk(
	'characters/getCharacters',
	(character, {getState}) => {
		const next = getState().characters.next;
		console.log(next);
		return axios(`${URI_API}character`)
			.then(({data}) => data);
	}
);

const charactersSlice = createSlice({
	name: 'characters',
	initialState: {
		data: {},
		loading: '',
		error: '',
		next: '',
	},
	reducers: {
		requestCharacters(state, action) {

		}
	},
	extraReducers: {
		[getCharacters.pending]: (state) => {
			state.loading = 'loading';
		},
		[getCharacters.fulfilled]: (state, action) => {
			state.loading = 'success';
			state.data = action.payload;
			state.next = state.data.info.next;
		},
		[getCharacters.rejected]: (state) => {
			state.loading = 'error';
			state.holidays = {};
		},
	}
});

export const {setCharacter} = charactersSlice.actions;

export default charactersSlice.reducer;
