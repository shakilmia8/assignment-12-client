import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home/Home';
import CarDetails from './pages/Home/CarDetails/CarDetails';
import MoreCars from './pages/MoreCars/MoreCars/MoreCars';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/moreCars'>
            <MoreCars></MoreCars>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/carDetails/:productId'>
            <CarDetails></CarDetails>
          </PrivateRoute>
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
