import React, { Component } from 'react';
import './App.css';
import { fb, app } from './base';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './auth';
import Header from './header';
import Profile from './profile';
import EditProfile from './editProfile';

class App extends Component {

    constructor() {
        super();
        this.state = {
            auth: false
        }
    }

    componentWillMount() {
        this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    auth: true
                })
            } else {
                this.setState({
                    auth: false
                })
            }
        });
    }

    componentWillUnmount() {
        this.removeAuthListener();
    }

  render() {
    return (
      <div className="App">

       <BrowserRouter>

           <div className="main">
               <Header/>
               <div className="workspace">
                   <h1>React app</h1>
                    <Route exact path="/auth" component={Auth}/>
                   <Route exact path="/profile" component={Profile}/>
                   <Route exact path="/editProfile" component={EditProfile}/>
               </div>
           </div>
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
