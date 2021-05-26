
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//Note styling 
export const Container = styled.div`
    
    h2{
        border-left : 4px solid #FF9505;
        padding-left: 15px;
        letter-spacing: 1.5px;      
    }
   
`
export const TrendBar = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px;
  
`
 export const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));


   
    @media (max-width: 930px){
    grid-template-columns: repeat(3, minmax(0, 1fr));

   }


   @media (max-width: 500px){
     grid-template-columns: repeat(2, minmax(0, 1fr));
   }

   @media (max-width: 300px){
     grid-template-columns: repeat(1, minmax(0, 1fr));
   }
   
 
`

// Note Style Tab from Materials UI
 export const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 50,
        width: '100%',
        backgroundColor: '#FF9505',
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  


 export const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);

  
