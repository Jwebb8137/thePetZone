import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Signin from './components/Signin/Signin';
import FavoritesScreen from './components/FavoritesScreen/FavoritesScreen';
import SearchScreen from './components/SearchScreen/SearchScreen';
import NotFoundScreen from './components/NotFoundScreen/NotFoundScreen';
import BottomNav from './components/BottomNav/BottomNav';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/Signin' component={Signin} />
          <Route exact path='/Favorites' component={FavoritesScreen} />
          <Route exact path='/Search' component={SearchScreen} />
          <Route exact path='/' component={HomeScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
