import { Route, Switch, Link } from 'react-router-dom';
import ProductScreen from './pages/product/Product';
import logo from './logo.svg';
import './App.scss';

const MainScreen = () => {
  return (
    <div className="App">
      <Link to="/"> Go Home </Link>
      <Link to="product"> Go To Product </Link>
        <Switch>
      <header className="App-header">
        <Route exact path="/">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.ts</code> and save to reload.
          </p>
        </Route>
        <Route path="/product">
          <ProductScreen />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Route>
      </header>
      </Switch>
    </div>
  );
}

export default MainScreen;
