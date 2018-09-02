"use strict";
import React, {Component} from "react";
import PropTypes from "prop-types";

import ContactsForm from "./ContactsForm.jsx";

export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            editActive: false
        };
    }

    addEditContact = (e) => {
        e && e.preventDefault();
        this.setContact({});
    }

    setContact = (e) => {
        const contact = e.currentTarget ? this.props.contacts[e.currentTarget.getAttribute("index")] : {};
        this.setState({
            editActive: false
        }, () => {
            this.setState({
                editActive: true,
                contact: contact
            });
        });
    }

    render(){
        const {contacts} = this.props;
        return(
            <div>
                <div>
                    <button id="addContactButton" onClick={this.addEditContact}>Add contact</button>
                    {(contacts && contacts.length > 0) && <p id="desc">Click contact to edit</p>}
                </div>
                {contacts && contacts.map((contact, i) => (
                    <button
                        index={i}
                        key={contact.id}
                        onClick={this.setContact}>{contact.firstname}
                    </button>
                ))}
                <div>
                    {this.state.editActive && <ContactsForm active={this.state.editActive} contact={this.state.contact} notify={this.props.notify} update={this.props.update}/>}
                </div>
            </div>
        );
    }
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    notify: PropTypes.func,
    type: PropTypes.string,
    update: PropTypes.func
};
