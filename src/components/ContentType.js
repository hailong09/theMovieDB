import React from 'react'
import {useHistory} from 'react-router-dom'
import {Wrap, Moreinfo} from '../StyledComponents/ContentType'

// Note indivitual item (a movie)
 
const ContentType = ({trend, movieType}) => {
   
    const history = useHistory();
    const handleClick = (id) => {
      
            if(trend[0].media_type){
               
                history.replace(`/${trend[0].media_type}/${id}`)
            }
            else{
                history.push(`/${movieType=== "Movies" ? "movie" : "tv"}/${id}`)
            }
             
    }
    return (
        <>
            {trend?.map(m => (
                <Wrap key={m.id}>
                    <img src={m["poster_path"]} alt=""/>
                    <Moreinfo>
                    
                        <div onClick={handleClick.bind(this, m.id)} >Detail</div>
                        <p>{m.title ? m.title : m.name}</p>
                    </Moreinfo>
                </Wrap>
            ))}
        </>
    )
}

export default ContentType




