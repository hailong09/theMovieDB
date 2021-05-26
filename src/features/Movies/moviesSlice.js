import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../apis/api'
import {reformatItems} from '../../helpers'

const movie_url = [
    '/movie/now_playing',
    '/movie/top_rated',
    '/movie/popular',
    '/movie/upcoming',
    //
    '/tv/on_the_air',
    '/tv/top_rated',
    '/tv/popular',
]

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const responses = [];
    for(let url of movie_url){
        const resp = await axios.get(url);
        responses.push(reformatItems(resp.data.results))
    }
    return responses;
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        collections: {
            movies: {},
            tvSeries: {},
        },
        status: "idle",
    },
    reducers: {
       
    },
    extraReducers:{
        [fetchMovies.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            const [
                nowPlaying, 
                topRated, 
                popular, 
                upcoming, 
                onAir, 
                tvToprated, 
                tvPopular
            ] = action.payload;
            state.collections.movies = {
                ...state.collections.movies, 
                nowPlaying, 
                topRated, 
                popular, 
                upcoming
            }
            state.collections.tvSeries = {
                ...state.collections.tvSeries, 
                onAir, 
                tvToprated, 
                tvPopular 
            }
        }
    }
})

export const moviesSelector = state => state.movies.collections.movies;

export const tvSeriesSelector = state => state.movies.collections.tvSeries;


export default moviesSlice.reducer;