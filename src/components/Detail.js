import React, { useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {detailSelector, videoSelector, fetchDetail, recommendSelector, isLoadingSelector} from '../features/detail/detailSlice'
import { useDispatch, useSelector } from 'react-redux'
import useDocumentTitle from '../useDocumentTitle'
import {
    Container, 
    Controls, 
    BackGround, 
    Content, 
    ContentDetail,
    TrailerButton,
    Site
} from '../StyledComponents/Details'
import Movies from './Movies'
import LoadingIndicator from '../LoadingIndicator'
import playIconWhite from '../images/play-icon-white.png'


const Detail = () => {
    const {id , movieType} = useParams()
    const dispatch = useDispatch();
    const recommend = useSelector(recommendSelector);
    const { 
        popularity,
        overview,
        release_date,
        vote_average,
        vote_count,
        runtime,
        backdrop_path,
        title,
        name,
        homepage
     } = useSelector(detailSelector);
    const video = useSelector(videoSelector);
    const isLoading = useSelector(isLoadingSelector)
    useEffect(() => {
        
        dispatch(fetchDetail({id, movieType}))

    },[dispatch, id ,movieType]) 
    useDocumentTitle(title ? title : name)

    return (
        
        <Container url={backdrop_path}>
            
           {isLoading ? <LoadingIndicator/>:        
                <>
                
                <BackGround>
                <img src={backdrop_path} alt=""/>
                </BackGround>
                <ContentDetail>
            
                    <div>
                        <Controls>
                            <TrailerButton onClick={()=> window.open(video, "_blank")}>
                                    <img src={playIconWhite} alt="playbuttonicon"/>
                                    <span>Trailer</span>
                            </TrailerButton>
                            <Site onClick={()=> window.open(homepage, "_blank")}><span>Site</span></Site>
                        </Controls>
                        <Content>
                        <h1>{title ? title : name}</h1>
                        <p>{runtime && <strong>{runtime} minutes</strong>} </p>
                        <p>{overview}</p>
                        <p><strong>Vote average:</strong> {vote_average}</p>
                        <p><strong>Vote count:</strong> {vote_count}</p>
                        <p><strong>Popularity:</strong> {popularity}</p>
                        <p>{release_date &&(<><strong>Release date:</strong> {release_date}</>)}</p>



                        </Content>
                    </div>                   
                </ContentDetail>
                <Movies
                    recommendation= {recommend}
                    movieType={"Recommendations"}
                
                />
                </>
              
                
           }
        </Container>
    )
}

export default Detail
