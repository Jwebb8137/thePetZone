import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Account from "./components/Account/Account";
import VideoChat from "./components/VideoChat/src/index";
import PetProfile from "./components/PetProfile/PetProfile";
import FavoritesScreen from "./components/FavoritesScreen/FavoritesScreen";
import SearchScreen from "./components/SearchScreen/SearchScreen";
import NotFoundScreen from "./components/NotFoundScreen/NotFoundScreen";
import BottomNav from "./components/BottomNav/BottomNav";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/Account" component={Account} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Favorites" component={FavoritesScreen} />
          <Route exact path="/Search" component={SearchScreen} />
          <Route exact path="/Chat/:RoomId" component={VideoChat} />
          <Route exact path="/PetProfile/:PetPage" component={PetProfile} />
          <Route exact path="/" component={HomeScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
