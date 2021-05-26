import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../../apis/api'
import {reformatItems} from '../../helpers'


export const fetchSearch = createAsyncThunk('search/fetchSearch', async ({searchTerm, page}) => {
    const urls =[
        'search/movie',
        'search/tv'
    ]

    const responses = []
    for(let url of urls){
        const resp = await axios.get(url, 
         { 
        params:{
            page,
            query: searchTerm,
        }})
        
        responses.push(resp.data)
    }
    return responses;
})

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        isLoading: true,
        collections: {
            movies: [],
            tvSeries: [],
            pageNumbers: 0
        },
    },
    reducers: {},
    extraReducers:{
        [fetchSearch.pending]: (state) => {
            state.isLoading = true
        },
        [fetchSearch.fulfilled]: (state, action) => {
            state.isLoading = false;
            const [movies, tvSeries] = action.payload
            state.collections.movies = reformatItems(movies.results)
            state.collections.tvSeries = reformatItems(tvSeries.results);
            state.collections.pageNumbers = movies.total_pages > tvSeries.total_pages  
                                                                ? movies.total_pages 
                                                                : tvSeries.total_pages;
        }

    }
})

export const colectionSeletor = state => state.search.collections;
export const isLoadingSelector = state => state.search.isLoading
export default searchSlice.reducer