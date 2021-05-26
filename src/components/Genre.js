import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {GenreMenu} from '../StyledComponents/Header'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styled from 'styled-components'
import {genreMap} from '../apis/api'
import { useHistory } from 'react-router';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #333',
      color: "white",
      backgroundColor: "#333",
      opacity: "0.8",      
    },
   
    
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.warning.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
  

const Genre= () => {
    const history = useHistory();
    const [anchorEl,setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleHistoryPush = (genrename) => {

          history.push(`/discover/${genrename}/${1}`)

      }
    return (
        <Container>
            <GenreMenu onClick={handleClick}>
                          <span>Movies</span>
                          <KeyboardArrowDownIcon/>
            </GenreMenu>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
        
             >
              
              {genreMap.map(g => (
                // <Link to={`discover/${g.name}/1` } key={g.id}>

              <StyledMenuItem key={g.id} onClick={handleHistoryPush.bind(this, g.name)}>
                   <div > {g.name}</div>
               </StyledMenuItem>
                // </Link>
                
              ))}
             </StyledMenu>
        </Container>
    )
}

export default Genre

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`