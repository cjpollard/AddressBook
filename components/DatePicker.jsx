import React, {Component} from "react";
import PropTypes from "prop-types";
import DayPickerInput from "react-day-picker/DayPickerInput";
import {formatDate} from "../client/utils";

class DatePicker extends Component {

    constructor(props) {
        super(props);
    }

    onDayChange = (day) => {
        this.props.onDayChange(day, this.props.inputProps);
    }

    parseDate = (str) => {
        if (typeof str !== "string") {
            return undefined;
        }
        var split = str.split("-");
        if (split.length !== 3) {
            return undefined;
        }
        var day = parseInt(split[0], 10);
        var month = parseInt(split[1], 10) - 1;
        var year = parseInt(split[2], 10);
        if (isNaN(year) || isNaN(month) || isNaN(day) || day <= 0 || day > 31 || month < 0 || month >= 12) {
            return undefined;
        }

        return new Date(year, month, day);
    }

    render() {
        return (
            <DayPickerInput onDayChange={this.onDayChange} {...(this.props.value && {value: this.props.value})}
                formatDate={formatDate} parseDate={this.parseDate} placeholder={this.props.placeholder} inputProps={this.props.inputProps} />
        );
    }

}

DatePicker.propTypes = {
    inputProps: PropTypes.object,
    onDayChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

export default DatePicker;