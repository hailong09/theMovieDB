import styled from 'styled-components'
export const Nav = styled.nav`
    
height: 100px;
background:#020d18;
display: flex;
align-items: center;
padding: 0 30px;
overflow-x: hidden;
position: sticky;
top: 0;
z-index: 999;

.search-icon{
  font-size: 40px;
  cursor: pointer;
}

`

export const BrandLogo = styled.img`
cursor: pointer;
`

export const NavMenu = styled.div`
width: 100%;
height: 100%;
display: flex;
flex: 1;


`

export const HomeMenu = styled.div`
display: flex;
align-items: center;
text-decoration: none;
color: #abb7c4;
text-transform: uppercase;
margin-left: 20px;
cursor: pointer;

a{
    font-weight: 700;
    letter-spacing: 1.2px;
    text-decoration: none;
    color: #abb7c4;
    
    &:hover{
    color: #dcf836;
}
   
}





`

export const GenreMenu = styled(HomeMenu)`

  display: flex;
  align-items: center;
  font-weight: 700;
    letter-spacing: 1.2px;
    text-decoration: none;
    color: #abb7c4;

  &:hover{
    color: #dcf836;
}

`


export const SearchContainer = styled.div`
  overflow:hidden;
  position: fixed;
  z-index: 999;
  width: 99%;
`