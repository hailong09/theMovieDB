import styled from 'styled-components'

export const Container = styled.main`
min-height: calc(100vh - 100px);
padding: 20px calc(3.5vw + 5px);
position: relative;
overflow: hidden;
background-color: rgba(10,10,10,0.5);


`

export const BackGround = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8;



img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
`

export const ContentDetail = styled.div`

margin-top: 50px;

`


export const Content = styled.div`

h1{
    color: #FF9505;
}
p{
    max-width: 730px;
    

}

`

export const Controls = styled.div`
display: flex;
align-items: center;

`

export const TrailerButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;
background-color: rgba(1,1,1, 0.8);
border: 1px solid rgb(249,249,249);
padding: 0px 24px;
margin-right: 22px;
letter-spacing: 1.8px;
cursor: pointer;
text-transform: uppercase;
color: white;



&:hover{
    background: rgba(198, 198, 198, 0.5);
   
}
`

export const Site = styled(TrailerButton)`
background-color: rgba(249,249, 249, 0.8);
color: black;
border: 1px solid rgb(1,1,1);


`