import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';

import OurServices from './components/OurServices/OurServices';
import AboutUs from './components/AboutUs/AboutUs';
import UkUniversities from './components/UkUniversities/UkUniversities';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/ukuniversities'>
            <UkUniversities></UkUniversities>
          </Route>
          <Route path='/ourservices'>
            <OurServices></OurServices>
          </Route>
          <Route path='/aboutus'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
       
    </div>
  );
}

export default App;
