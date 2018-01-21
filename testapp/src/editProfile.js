import React, {Component} from 'react';
import {fb, app, firestore} from './base';
import {Link} from 'react-router-dom';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            mail: "",
            phone: "",
            saveStatus: ""
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.saveProfile = this.saveProfile.bind(this);
        this.onChange = this.onChange.bind(this);
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
    saveProfile(event) {
        event.preventDefault();
        let docRef = firestore.collection("user").doc("N3HYPybBqvgifegiqHN8uWZhOGQ2");
        this.setState({saveStatus: "Opslaan..."})
        docRef.set({
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            mail: this.mail.value,
            phone: this.phone.value
        });
        this.setState({saveStatus: "Uw gegevens zijn opgeslagen!"})
    }
    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="editProfile">
                <h3>Pas uw gegevens aan.</h3>
                <form onSubmit={(event) => {
                    this.saveProfile(event)
                }}>
                    <input type="text" name="fName" value={this.state.fName} onChange={this.onChange} ref={(input) => {
                        this.firstName = input
                    }}/><br/>
                    <input type="text" name="lName" value={this.state.lName} onChange={this.onChange} ref={(input) => {
                        this.lastName = input
                    }}/><br/>
                    <input type="text" name="mail" value={this.state.mail} onChange={this.onChange} ref={(input) => {
                        this.mail = input
                    }}/><br/>
                    <input type="text" name="phone" onChange={this.onChange} value={this.state.phone} ref={(input) => {
                        this.phone = input
                    }}/><br/>
                    <input type="submit" value="Opslaan"/>
                </form>
                <Link to="/profile">Terug naar profiel</Link>
                <h5>{this.state.saveStatus}</h5>
            </div>

        );
    }
}
export default EditProfile