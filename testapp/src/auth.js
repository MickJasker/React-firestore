import React, {Component} from 'react';
//import { fb } from './base';
//import * as firebase from 'firebase';
import {Redirect} from 'react-router-dom';
import {app} from './base';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.loginEP = this.loginEP.bind(this);
        this.loginForm = this.loginForm.bind(this);
        this.state = {
            redirect: false
        }
    }

    loginEP(event) {
        event.preventDefault();
        app.auth().signInWithEmailAndPassword(this.mailInput.value, this.passInput.value)
            .then((result, error) => {
                if (error) {
                    console.log(error.message);
                } else {
                    this.setState({ redirect: true})
                }
            })
    }

    loginForm() {

    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="profile"/>
        }

        return (
            <div className="Auth">
                <div className="login">


                    <form onSubmit={(event) => {
                        this.loginEP(event)
                    }} ref={(form) => {
                        this.loginForm = form
                    } }>
                        <input name="mail" type="text" placeholder="Mail" ref={(input) => {
                            this.mailInput = input
                        }}/><br/>
                        <input name="pass" type="password" placeholder="Wachtwoord" ref={(input) => {
                            this.passInput = input
                        }}/><br/>
                        <input type="submit" value="Inloggen"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Auth;