import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import Test from './Components/Test';
import Login from './Components/Login';
import Terms from './Components/Terms';
import Privacy from './Components/Privacy';
import Refund from './Components/Refund';
import Disclaimer from './Components/Disclaimer';
import Form from './Components/Form';
import About from './Components/About';
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
import Rif from './Components/Refundnew';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {

    return (
      <div>
        
        <Router>
          <div className="App">
            <switch>
            <Route exact path="/" component={Test} />
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/pricing" component={Pricing}/>
            
              <Route  path="/Terms" component={Terms} />
              <Route  path="/privacy" component={Privacy} />
              <Route  path="/refund" component={Refund} />
              <Route  path="/Disclaimer" component={Disclaimer} />
            
              <Route  path="/form" component={Form} />
              <Route  path="/Efund" component={Rif}/>
              <Route exact path="/login" component={Login} />
              
              
              
              
            </switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
