import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import {fetchMovies, moviesSelector, tvSeriesSelector} from '../features/Movies/moviesSlice'
import useDocumentTitle from '../useDocumentTitle'
import LoadingIndicator from '../LoadingIndicator'
import {Container} from '../StyledComponents/Home'
import Background from '../images/home-background.png'
const Home = () => {

    const dispatch = useDispatch();
    const status = useSelector(state => state.movies.status)
   
    const {
        nowPlaying, 
        topRated, 
        popular, 
        upcoming, } = useSelector(moviesSelector);

    const {
        onAir, 
        tvToprated, 
        tvPopular
    } = useSelector(tvSeriesSelector);


    useEffect(()=> {
        if(status === "idle"){
            dispatch(fetchMovies());
        }
    },[status, dispatch])
    
    useDocumentTitle("Home")

    return (
      
        <Container bg={Background}>
            {status === 'loading' ? <LoadingIndicator/>:
            
                <>
                    <ImgSlider nowPlaying={nowPlaying}/>
                    <Movies 
                        movieType="Movies" 
                        topRated={topRated}
                        popular={popular}
                        upcoming={upcoming}
                        />
                    <Movies 
                        movieType="TV Series"
                        onAir={onAir}
                        tvToprated={tvToprated}
                        tvPopular={tvPopular}
                    />
                
                </>
            
            }
           
        </Container>
    )
}

export default Home




