import React, {Component} from 'react';
import {fb, app, firestore} from './base';
import {Link} from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            mail: "",
            phone: ""
        };
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount() {
       // let user = app.auth().currentUser.uid;
        let docRef = firestore.collection("user").doc("N3HYPybBqvgifegiqHN8uWZhOGQ2");
        docRef.onSnapshot((doc) => {
            if (doc && doc.exists) {
                const data = doc.data();
                console.log(data);
                let firstName = data['firstName'];
                let lastName = data['lastName'];
                let mail = data['mail'];
                let phone = data['phone'];

                this.setState({
                    fName: firstName,
                    lName: lastName,
                    mail: mail,
                    phone: phone
                });
            }
        })
    }
    render() {
        return (
            <div className="profile">
                <h3>Mijn profiel</h3>
                <Link to="/editProfile">Pas profiel aan</Link><br/>
                <table>
                    <tbody>
                    <tr>
                        <td>Voornaam:</td>
                        <td>{this.state.fName}</td>
                    </tr>
                    <tr>
                        <td>Achternaam:</td>
                        <td>{this.state.lName}</td>
                    </tr>
                    <tr>
                        <td>Mail:</td>
                        <td>{this.state.mail}</td>
                    </tr>
                    <tr>
                        <td>Telefoonnummer:</td>
                        <td>{this.state.phone}</td>
                    </tr>
                    </tbody>

                </table>
            </div>

        );
    }
}
export default Profile