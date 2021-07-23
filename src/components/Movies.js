import React, { useState } from 'react'


import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import ContentType from './ContentType'
import {Container, TrendBar, Content, StyledTab, StyledTabs} from '../StyledComponents/Movies'


  
// Note Drama types (movies or TV series)
const MoviesType = ({movieType, topRated, popular, upcoming, tvToprated, tvPopular, onAir, recommendation}) => {
    const [value, setValue] = useState('0');
    const handleChange = (event, newValue) => {
        setValue(newValue);

      };

    return (
        <Container>
            {recommendation ? <>
            <h2>{movieType}</h2>
            <Content>
                <ContentType 
                    trend = {recommendation}
                  
                    />
                </Content>   
            
            
            </>:
            
            <TabContext value={value}>
            <TrendBar>
                <h2>{movieType}</h2>
                <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                    <StyledTab label="Top rated" value={'0'} />
                    <StyledTab label="Popular" value={'1'} />
                    <StyledTab label={movieType === "Movies" ? "Upcomming" : "On the air"} value={'2'}/>
                </StyledTabs>
            </TrendBar>
                    <TabPanel value={'0'}>
                        <Content>
                            <ContentType 
                                trend = {movieType === "Movies" ? topRated : tvToprated}
                                movieType ={movieType}
                                />
                        </Content>   
                    </TabPanel>
                    <TabPanel value={'1'}>
                        <Content>
                            <ContentType 
                                trend = {movieType === "Movies" ? popular : tvPopular}
                                movieType ={movieType}
                            />
                        </Content>
                    </TabPanel>
                    <TabPanel value={'2'}>
                        <Content>
                            <ContentType 
                                trend = {movieType === "Movies" ? upcoming :  onAir}
                                movieType = {movieType}
                            />

                        </Content>
                    </TabPanel>         
           </TabContext>
       
        
        }
    </Container>
    )

}



// Note full Home Component
const Movies = ({movieType, topRated, popular, upcoming, onAir, tvToprated, tvPopular, recommendation}) => {
    return (
            <MoviesType 
                topRated={topRated} 
                movieType={movieType} 
                popular={popular}
                upcoming={upcoming}
                onAir={onAir}
                tvToprated={tvToprated}
                tvPopular={tvPopular}
                recommendation= {recommendation}     
            />
                
           
     
    )
}

export default Movies


