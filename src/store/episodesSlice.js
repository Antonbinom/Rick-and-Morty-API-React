import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {URI_API} from '../api/const';

export const getEpisodes = createAsyncThunk(
	'episodes/getEpisodes',
	() =>
		Promise.all([1, 2, 3].map(id =>
			axios(`${URI_API}episode?page=${id}`)
				.then(({data}) => data.results.flat())
				.catch((error) => ({error: error.toString()}))
		))
);

const episodesSlice = createSlice({
	name: 'episodes',
	initialState: {
		episodes: [],
		loading: '',
		error: '',
	},
	reducers: {},
	extraReducers: {
		[getEpisodes.pending]: (state) => {
			state.loading = 'loading';
		},
		[getEpisodes.fulfilled]: (state, action) => {
			state.loading = 'success';
			state.episodes = action.payload.flat();
		},
		[getEpisodes.rejected]: (state) => {
			state.loading = 'error';
		},
	}
});

export const {setEpisodes} = episodesSlice.actions;

export default episodesSlice.reducer;
