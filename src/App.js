import React, {Suspense} from 'react';
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
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
          <Route  path="/search" component={SearchMovies}/>
          <Route  path="/discover/:genreName/:page" component={GenreMovies}/>
          <Route  path="/:movieType/:id" component={Detail} />
          
          <Route  path="/movie" component={Home}/>
          <Redirect from="/theMovieDB" to="/movie" exact />
          </Switch>   
      </div>
 </Suspense>
  
     
  
   
    
  );
}

export default App;
