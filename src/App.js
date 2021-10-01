import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import NotFound from './components/error/NotFound';
import Header from './components/header/Header';
import Inventory from './components/inventory/Inventory';
import OrderReview from './components/orderReview/OrderReview';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div>
      <Router>
      <Header/>
         <Switch>
           <Route exact path="/">
               <Shop/>
           </Route>
           <Route path="/order-review">
               <OrderReview/>
           </Route>
           <Route path="/manage-inventory">
               <Inventory/>
           </Route>
           <Route path="">
               <NotFound/>
           </Route>
         </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
