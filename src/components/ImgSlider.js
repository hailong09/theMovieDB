import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'


const ImgSlider = ({nowPlaying}) => {
   

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true
      };
     
    
    return (
       <Carousel {...settings}>
           {nowPlaying?.map(m => (
               <Wrap key= {m.id}>
                    <img src={m["backdrop_path"]} alt=""/>
                </Wrap>
           ))}
          
       </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
 margin-top: 20px;
 border:none;
 width: 100%;
 height: 100%;
  ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150,158, 171);
        }
    }
    li.slick-active button::before {
        color: white;
    }

    .slick-list{
        overflow:visible;
    }
    
    button{
        z-index:1;
    }


`

const Wrap = styled.div`
    cursor: pointer;
    border: none;
    img {
        border: 4px solid transparent;
       
        border-radius: 10px;
        width: 100%;
        height: 80vh;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        &:hover{
            border: 4px solid rgba(249,249,249,0.8);
        }
        
    }
    
`