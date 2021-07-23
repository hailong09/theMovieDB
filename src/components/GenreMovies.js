import React, { useEffect, useState } from 'react'
import { Content, TrendBar } from '../StyledComponents/Movies'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import {colectionSeletor, fetchGenre, isLoadingSelector} from '../features/genres/genreSlice'
import ContentType from './ContentType'
import LoadingIndicator from '../LoadingIndicator'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import background from '../images/home-background.png'
const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#fff"
      }
    }
  }));
  
const GenreMovies = () => {
    const {genreName, page} = useParams()
    const dispatch = useDispatch()
    const collections = useSelector(colectionSeletor)
    const isLoading = useSelector(isLoadingSelector)
    const classes = useStyles();
    const history = useHistory()
    const [pages, setPages] = useState(1);
    useEffect(() => {
        dispatch(fetchGenre({genreName, page}))
    }, [dispatch, genreName, page])

    const handleChange = (event, value) => {
        setPages(value);
        history.replace(`/discover/${genreName}/${value}`)
        
      };
    return (
      
        
       <GenreContainer bg={background}>
       {isLoading ? <LoadingIndicator/>:
       
       <>
       <h1>{genreName}</h1>
            <div>
            <Pagination 
                count={collections.pageNumbers} 
                page={pages} 
                onChange={handleChange} 
                color="secondary"
                classes={{ ul: classes.ul }}
            />
            </div>
            <TrendBar>
                <h2>Movies</h2>
            </TrendBar>
            <Content>
                <ContentType
                    movieType={"Movies"}
                    trend={collections.movies}
                />
            </Content>
            <TrendBar>
                <h2>TV Series</h2>
            </TrendBar>
            <Content>
                <ContentType
                    movieType={"TV Series"}
                    trend={collections.tvSeries}
                />
            </Content>
        </>
       }
            
       </GenreContainer>
      
    )
}

export default GenreMovies


const GenreContainer = styled.div`
    padding-bottom: 30px;
    h1{
        text-align: center;
    }

    h2{
        border-left : 4px solid #FF9505;
        padding-left: 15px;
        letter-spacing: 1.5px;      
    }
    min-height: calc(100vh - 100px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
    &:before{
        background: ${props => ` url(${props.bg}) center center / cover no-repeat fixed`} ;
        content: "";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: -1
    }

`