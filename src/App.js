import React, {Suspense} from 'react';
import './App.css'
import {Switch, Route} from 'react-router-dom'
import LoadingIndicator from './LoadingIndicator';

const Home = React.lazy(() => import('./components/Home'))
const Detail = React.lazy(() => import('./components/Detail'))
const Header = React.lazy(() => import('./components/Nav/Navbar'))
const GenreMovies = React.lazy(() => import('./components/GenreMovies'))
const SearchMovies = React.lazy(() => import('./components/SearchMovies'))


function App() {
  return (
    
    <Suspense fallback={<LoadingIndicator/>}>
      <div className="App">
          <Header/>
          <Switch>
          <Route exact path="/search" component={SearchMovies}/>
          <Route exact path="/discover/:genreName/:page" component={GenreMovies}/>
          <Route exact path="/:movieType/:id" component={Detail} />
          
          <Route exact path="/" component={Home}/>    
          </Switch>   
      </div>
 </Suspense>
  
     
  
   
    
  );
}

export default App;
