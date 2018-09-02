"use strict";
import React, {Component} from "react";
import PropTypes from "prop-types";

import createForm from "../Form";
import DatePicker from "../DatePicker.jsx";
import {formatDate} from "../../client/utils";

class ContactsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.contact
        };
        this.updateContactFormInfo(this.props.contact);

    }

    componentDidUpdate() {
        const contact = this.props.contact;
        if(contact.firstname !== undefined && this.state.firstname !== undefined && contact.firstname !== this.state.firstname) {
            this.updateContactFormInfo(contact);
            this.setState({
                ...contact
            });
        }
    }

    handleDayChange = (day) => {
        this.props.modifyState({date: day});
    }

    handleEndChange = (day) => {
        this.props.modifyState({end: day});
    }

    handleFormSubmit = (e) => {
        const {value} = e.target;
        let api;
        let msg = "Contact ";
        switch(value) {
            case "Add Contact":
                api = "/apis/addContact";
                msg += "added";
                break;
            case "Delete Contact":
                api = "/apis/deleteContact";
                msg += "deleted";
                break;
            case "Update Contact":
                api = "/apis/editContact";
                msg += "updated";
                break;
        }
        this.props.handleFormSubmit(e, api, () => {
            this.props.notify(msg, "success");
            this.props.update("contacts");
        },() => {
            this.props.notify("Something went wrong", "error");
        });
    }

    updateContactFormInfo(contact) {
        this.props.modifyState({
            firstname: contact.firstname,
            date: formatDate(new Date(contact.dob)),
            id: contact.id
        });
    }

    render() {
        let {contact} = this.props;
        let editAdd = contact.firstname ? true : false;

        return (
            <div id="AddContact">
                <div>
                    <form id="contactForm">
                        <h1><span >{editAdd ? "Edit" : "Add"} Contact</span></h1>
                        <div>
                            <div>
                                <label htmlFor="firstname">First name</label>
                                <input type="text" placeholder="First name" name="firstname" id="firstname" key="firstname"
                                    {...(editAdd && {value: this.props.formData ? this.props.formData.firstname : contact.firstname})} onChange={this.props.handleInputChange} required/>
                            </div>
                            <div>
                                <label htmlFor="firstname">Surname</label>
                                <input type="text" placeholder="Surname" name="surname" id="surname" key="surname"
                                    {...(editAdd && {value: this.props.formData ? this.props.formData.surname : contact.surname})} onChange={this.props.handleInputChange} required/>
                            </div>
                            <div>
                                <label htmlFor="dob">Date of birth</label>
                                <DatePicker onDayChange={this.handleDayChange} {...(editAdd && {value: this.props.formData ? this.props.formData.date : contact.dob})}
                                    placeholder="D-M-YYYY" inputProps={{name: "date"}} key="dob"/>
                            </div>
                        </div>
                        <input type="submit" value={contact.firstname ? "Update Contact" : "Add Contact"} onClick={this.handleFormSubmit}/>
                        {contact.firstname && <input type="submit" value="Delete Contact" onClick={this.handleFormSubmit}/>}
                    </form>
                </div>
            </div>
        );
    }
}

ContactsForm.propTypes = {
    formData: PropTypes.object,
    handleInputChange: PropTypes.func,
    handleFormSubmit: PropTypes.func,
    modifyState: PropTypes.func,
    notify: PropTypes.func,
    contact: PropTypes.object,
    update: PropTypes.func
};

export default createForm()(ContactsForm);
