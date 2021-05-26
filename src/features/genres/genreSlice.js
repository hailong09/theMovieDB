import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios, { findGenreId } from '../../apis/api'
import {reformatItems} from '../../helpers'

export const fetchGenre = createAsyncThunk('genre/fetchGenre', async ({genreName, page}) => {
    const urls = [
        'discover/movie',
        'discover/tv'
    ]

    const responses = [];
    for(let url of urls){
        const resp = await axios.get(url, {
            params: {
                page,
                with_genres: findGenreId(genreName),
               
            }
        });
        
        responses.push(resp.data);
    }

    return responses;

})

const genreSlice = createSlice({
    name: 'genre',
    initialState:{
        isLoading: true,
        collections: {
            movies: [],
            tvSeries: [],
            pageNumbers: 0
        },
        
    },
    reducers: {},
    extraReducers: {

        [fetchGenre.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchGenre.fulfilled]: (state, action) => {
            state.isLoading = false;
            const [movies, tvSeries] = action.payload;
            state.collections.movies = reformatItems(movies.results);
            state.collections.tvSeries = reformatItems(tvSeries.results);
            state.collections.pageNumbers = movies.total_pages > tvSeries.total_pages  
                                                                ? movies.total_pages 
                                                                : tvSeries.total_pages;
        }

    }
})

export const colectionSeletor = state => state.genre.collections;
export const isLoadingSelector = state => state.genre.isLoading
export default genreSlice.reducer