import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {URI_API} from '../api/const';

export const getEpisodes = createAsyncThunk(
	'episodes/getEpisodes',
	() =>
		axios(`${URI_API}episode`)
			.then(({data}) => data)
			.catch((error) => ({error: error.toString()}))
);

const episodesSlice = createSlice({
	name: 'episodes',
	initialState: {
		episodes: [],
		loading: '',
		error: '',
		next: '',
	},
	reducers: {},
	extraReducers: {
		[getEpisodes.pending]: (state) => {
			state.loading = 'loading';
		},
		[getEpisodes.fulfilled]: (state, action) => {
			state.loading = 'success';
			state.episodes = action.payload;
			state.next = state.episodes.info.next;
		},
		[getEpisodes.rejected]: (state) => {
			state.loading = 'error';
			state.holidays = {};
		},
	}
});

export const {setEpisodes} = episodesSlice.actions;

export default episodesSlice.reducer;
