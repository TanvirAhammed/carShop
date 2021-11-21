import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products';


import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Purchase from './Pages/Home/Purchase/Purchase';
import Payment from './Pages/Dashboard/Payment/Payment';
import Explore from './Pages/Home/Explore/Explore';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';

function App() {
  return (

    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          {/* <PrivateRoute path="/myOrder/:productId">
            <MyOrder></MyOrder>
          </PrivateRoute> */}
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/products">
            <Products></Products>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>


  );
}

export default App;
