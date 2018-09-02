import React, {Component} from "react";

import apiInterface from "../client/api";

const createForm = (middleware) => (FormComponent, data) => {

    class Form extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            if(data) {
                this.modifyState({
                    ...data
                });
            }
        }

        handleInputChange = (event, cb) => {
            event && event.preventDefault();
            const {name, type, value} = event.target;

            this.modifyState({
                [name]: type === "checkbox" ? event.target.checked ? 1 : 0 : value
            }, cb);
        }

        handleFormSubmit = (event, api, success, error) => {
            event.preventDefault();
            apiInterface.post(api, this.state).then(success, error);
        }

        modifyState = (newState, cb) => {
            this.setState(newState, cb);
        }

        render() {
            const propsObject = {
                disableSubmit: this.disableSubmit,
                formData: this.state,
                handleFormSubmit: this.handleFormSubmit,
                handleInputChange: this.handleInputChange,
                modifyState: this.modifyState
            };

            const newProps = Object.assign(
                {},
                this.props,
                typeof middleware === "function" ? middleware(propsObject) : propsObject
            );
            return React.createElement(FormComponent, newProps);
        }
    }

    return Form;
};

export default createForm;