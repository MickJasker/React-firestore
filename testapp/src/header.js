import React, {Component} from 'react';
import {Redirect, Link } from 'react-router-dom';
import {app} from './base';

class Header extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
        this.state = {
            redirect: false
        };
    }

    signOut() {
        app.auth().signOut().then(() => {
            this.setState({redirect: true});
        });
    }

    render(){
        if (this.state.redirect === true) {
            return <Redirect to="/"/>
        }
        return (

            <nav>
                <div>
                    {this.props.auth
                    ? <Link to="/auth">Inloggen</Link>
                    :  <div className="auth">
                            <Link to="/auth">Inloggen</Link>
                            <button onClick={this.signOut}>Uitloggen</button>
                        </div>
                    }
                </div>
            </nav>
        );
    }
}

export default Header