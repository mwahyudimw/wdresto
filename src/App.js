import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './component/Home';
import Contact from './component/Contact';
import Product from './component/Product';


class App extends React.Component {
   render() {
      return (
         <Router>
            <div>
               <div className="header">
               <div className="logo">WD Resto</div>
               <ul className="nav">
                  <div className="nav_link"><Link to={'/'} className="nav_link"> Home </Link></div>
                  <div className="nav_link"><Link to={'/product'} className="nav_link"> Product </Link></div>
                  <div className="nav_link"><Link to={'/contact'} className="nav_link"> Contact </Link></div>
               </ul>
               </div>
               
                <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/product' component={Product} />
              <Route path='/contact' component={Contact} />
          </Switch>
            </div>
         </Router>
      )
   }
}
export default App;
