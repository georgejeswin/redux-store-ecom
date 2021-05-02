import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route path="/" exact component={ProductListing} />
          <Route>
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
