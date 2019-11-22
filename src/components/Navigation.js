import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Temp2 from './Temp2';
import Temp1 from './Temp1';
import Ir from './Ir';
import Rh from './Rh';
import Vis from './Vis';
import Uv from './Uv';
import Dewpoint from './Dewpoint';
import All from './All';

class Navigation extends Component {
    render() {
        return(
            <Router>
                <Header />
                <Switch>
                    <Route path="/temp1" component={Temp1}/>
                    <Route path="/temp2" component={Temp2}/>
                    <Route path="/ir" component={Ir}/>
                    <Route path="/rh" component={Rh}/>
                    <Route path="/vis" component={Vis}/>
                    <Route path="/uv" component={Uv}/>
                    <Route path="/dewpoint" component={Dewpoint}/>
                    <Route path="/" component={All}/>
                </Switch>
                <Footer />
            </Router>
        )
    }
}

export default Navigation;
