import styled from 'styled-components'
export const Wrap = styled.div`
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
    }


    &:hover {
        transform: scale(1.05);
        border-color: rgba(249,249,249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
       img{
        opacity: 0.3;
       }

        div{
            opacity: 1;
        }
    }
`

export const Moreinfo  = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: .5s ease;
   
    div{
        border: 1px solid #FF9505;
        padding: 8px 16px ;
        border-radius: 4px;
        cursor: pointer;
        color: #FF9505;
        text-transform: uppercase;
        letter-spacing: 1.5px;
    }

    p {
        
        color: white;
        position: absolute;
        bottom: 5%;
        font-size: 14px;
        text-align: center;
        font-weight: 800;
        margin: 0px 10px;

    }

    a{
        text-decoration: none;
    }

    @media (max-width: 1000px){

        div{
            font-size: 12px;
        }
        p{
            font-size: 12px;
        }

    }

    @media (max-width: 550px){

        div{
            font-size: 10px;
        }
        p{
            font-size: 10px;
        }
   

   }

`