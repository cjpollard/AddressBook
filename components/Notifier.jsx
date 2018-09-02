import React, {Component} from "react";
import PropTypes from "prop-types";

class Notifier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    componentDidMount() {
        this.setState({
            open: (this.props.type === "success" || this.props.type === "error")
        });
    }

    close = () => {
        this.setState({
            open: false
        });
    }

    render() {
        const {message, type} = this.props;
        const open = this.state.open ? " open" : "";
        return (
            <div className={"notifier " + type + open} onClick={this.close}>
                <span>{message}</span>
            </div>
        );
    }

}

Notifier.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
};

export default Notifier;