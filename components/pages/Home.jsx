import React from "react";
import PropTypes from "prop-types";
import Contacts from "./Contacts.jsx";

import apiInterface from "../../client/api";


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        this.getContacts();
    }

    getContacts = () => {
        return apiInterface.get("/apis/getContacts").then((data) => {
            if(data.hasOwnProperty("contacts")) {
                this.setState({contacts: data.contacts});
            }
        }, (error) => {
            console.log(error);
        });
    }

    notify = (msg, typ) => {
        setTimeout(() => {
            this.setState({notify: false});
        }, 3000);
        this.setState({message: msg, type: typ, notify: true});
    }

    render(){
        return (
            <div>
                <Contacts contacts={this.state.contacts} notify={this.notify} update={this.getContacts}></Contacts>
            </div>
        );
    }
}

Home.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
};