import React, { useState}  from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory} from 'react-router-dom';
import{BrandLogo} from '../../StyledComponents/Header'
import Homelogo from '../../images/LogoBrand.svg'
const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100px;
  background: #020d18;
  padding: 0 30px;
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 999;
  .logo {
    padding: 15px 0;
  }
`
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    position: "fixed",
    zIndex: "999",
    left: "0",
    right: "16px",
    
    
    
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const history = useHistory()


  const handleShow = () => {
    setShow(!show);
}

const handleSearch = e => {
    setSearchValue(e.target.value)
    
}

const handleSubmit = e => {
  e.preventDefault();
 history.push(`/search?searchTerm=${searchValue}&page=${1}`);
  setSearchValue("")
  setShow(false)
}
  return (
  <>
    <Nav>
      <div className="logo">
      <Link to="/movie">
                    <BrandLogo src={Homelogo} alt="logo-brand"/>
                </Link>
      </div>
    
      <Burger />
      <SearchIcon className="search-icon" onClick={handleShow} style={{cursor: "pointer", fontSize:"40px"}}  />
    </Nav>

    {show && (
                  
      <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
          <InputBase
              className={classes.input}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search google maps' }}
              value={searchValue}
              onChange={handleSearch}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
          </IconButton>    
      </Paper>

          
    
    )}
  </>
  )}

export default Navbar