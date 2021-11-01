import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import NotFound from './components/error/NotFound';
import Header from './components/header/Header';
import Inventory from './components/inventory/Inventory';
import Login from "./components/login/Login";
import OrderReview from './components/orderReview/OrderReview';
import Orders from "./components/orders/Orders";
import PlaceOrder from "./components/placeOrder/PlaceOrder";
import Register from "./components/register/Register";
import Shipping from "./components/shipping/Shipping";
import Shop from './components/shop/Shop';
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./privaeRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route path="/order-review">
              <OrderReview />
            </Route>
            <PrivateRoute path="/manage-inventory">
              <Inventory />
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping />
            </PrivateRoute>
            {/* <Route path="/placeorder">
               <PlaceOrder/>
           </Route> */}
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/placeorder">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route path="">
              <NotFound />
            </Route>
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
