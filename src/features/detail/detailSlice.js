import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../apis/api'
import {pathToImage, reformatItems} from '../../helpers'


export const fetchDetail = createAsyncThunk('detail/fetchDetail', async ({id, movieType}) =>{
    // console.log(id);
    // console.log(movieType);
    const urls = [
        `/${movieType}/${id}`,
        `/${movieType}/${id}/videos`,
        `/${movieType}/${id}/recommendations`
    ]

    const response = [];
    for (let url of urls ){
        const resp = await axios.get(url);
        

        response.push(resp.data)
        
    }
   
    return response;


})

const detailSlice = createSlice({
    name: 'detail',
    initialState:{
        detail: {},
        video: "",
        recommendations:[],
        isLoading: true
    },
    reducers:{
       

    },
    extraReducers:{
        [fetchDetail.pending]: (state, action) => {
           state.isLoading= true;
        },

        [fetchDetail.fulfilled]: (state, action) => {
            state.isLoading = false
            const [detail, videos, recommended] = action.payload
            state.detail = {
                ...detail,
                "backdrop_path": pathToImage(detail["backdrop_path"]),
                "poster_path": pathToImage(detail["poster_path"]),
        
            }
            state.video = `https://www.youtube.com/watch?v=${videos.results[0]?.key}`
            state.recommendations = reformatItems(recommended.results)
        }

    }
})


export const detailSelector = state => state.detail.detail;
export const videoSelector = state => state.detail.video
export const recommendSelector = state => state.detail.recommendations
export const isLoadingSelector = state => state.detail.isLoading
export default detailSlice.reducer