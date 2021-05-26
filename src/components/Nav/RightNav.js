import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HomeMenu } from '../../StyledComponents/Header';
import Genre from '../Genre';
import {genreMap} from '../../apis/api'
const Ul = styled.div`
  display: flex;
  flex-flow: row nowrap ;
  align-items: center;
  min-width: 0;
  .genre-2 , .home-2{
      visibility: hidden;
    }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    .genre-1 , .home-1{
      display: none;
    }
    .genre-2 , .home-2{
      visibility: visible;
    }
   
    .home-2{
      border-bottom: 1px solid #333;
    }
    .genre{
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      a{
        text-decoration: none;
        color: #fff;
        margin: 5px;
        padding: 5px;
        &:hover{
          opacity: 0.8;
        }
      }
    }
    div {
      color: #fff;
      text-align: center;
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      a{
        text-decoration: none;
      }
      h4{
        color: #FF9505;
        &:hover{
          opacity: 0.8;
        }
      }
      
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {/* {!open && <>  */}
     
        <HomeMenu className='home-1'>
        <Link to="/">Home</Link>
        </HomeMenu> 
        <div className='genre-1'> <Genre /></div>
     
      {/* </>} */}
      {/* {open && <>  */}
        <div className='home-2'><Link to="/"><h4>HOME</h4></Link></div>
        <div className='genre-2' >
          <h4>MOVIE</h4>
          <div className='genre'>
            {genreMap.map(g => (
                <a href={`/discover/${g.name}/1`} key={g.id}>{g.name}</a>
            ))}
          </div>
         
        </div>
       {/* </>
      } */}
     
    </Ul>
  )
}

export default RightNav