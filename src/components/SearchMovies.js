import React, { useEffect, useState } from 'react'
import { Content, TrendBar } from '../StyledComponents/Movies'
import {Container} from '../StyledComponents/Home'
import styled from 'styled-components'
import { useHistory, useLocation} from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import ContentType from './ContentType'
import LoadingIndicator from '../LoadingIndicator'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string'
import {colectionSeletor,isLoadingSelector,fetchSearch} from '../features/search/searchSlice'
import useDocumentTitle from '../useDocumentTitle'
import background from '../images/home-background.png'
const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#fff"
      }
    }
  }));
const SearchMovies = () => {
    const dispatch = useDispatch()
    const collections = useSelector(colectionSeletor)
    const isLoading = useSelector(isLoadingSelector)
    const classes = useStyles();
    const history = useHistory()
    const {search} = useLocation();
    const {searchTerm, page} = queryString.parse(search);
    const [pages, setPages] = useState(1);


    const handleChange = (event, value) => {
        setPages(value);
        history.push(`/search?searchTerm=${searchTerm}&page=${value}`)
        
        
        
      };
    
    useEffect(() => {

       searchTerm !== "" ? dispatch(fetchSearch({searchTerm, page})) : history.replace('/')

    }, [dispatch, searchTerm, page, history])
    useDocumentTitle(`Search for ${searchTerm}`)
    return (
          
       <SearchContainer bg={background}>
       {isLoading ? <LoadingIndicator/>:
       
       <>
       <h1>Search For "{searchTerm}"</h1>
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
            
       </SearchContainer>
    )
}

export default SearchMovies
const SearchContainer = styled(Container)`
    padding-bottom: 30px;
    h1{
        text-align: center;
    }

    h2{
        border-left : 4px solid #FF9505;
        padding-left: 15px;
        letter-spacing: 1.5px;      
    }

`