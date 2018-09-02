const isDate = (date) => {
    return date instanceof Date && !isNaN(date.valueOf());
};

const utils = {

    formatDate: (d) => {
        if (isDate(d)) {
            var year = d.getFullYear();
            var month = "" + (d.getMonth() + 1);
            var day = "" + d.getDate();
            return day + "-" + month + "-" + year;
        }
        return "";
    }

};

module.exports = utils;