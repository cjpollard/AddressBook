const arrayIntoObj = (array: Array<any>, obj: Object, value: any): Object => {
    let retObj: Object = obj;
    if(array.length > 1) {
        retObj[array[0]] = Object.assign({}, retObj[array[0]], arrayIntoObj(array.splice(1), {}, value));
    } else {
        retObj[array[0]] = value;
    }
    return retObj;
};

const unflattenFormData = (formData: Object): Object => {
    let expanded: Object = {};
    let finalForm: Object = {};
    for(let prop in formData) {
        if(prop.indexOf(":") > 0) {
            expanded = Object.assign({}, expanded, arrayIntoObj(prop.split(":"), expanded, formData[prop]));
            delete formData[prop];
        }
    }
    finalForm = Object.assign({}, formData, expanded);
    return finalForm;
};

// Fleshes out the schema's arrays with duplicate objects or empty strings to the length of the array sent in formData.
const lengthenArrays = (formData: Object, objMap: Object): Object => {
    let returnObj: Object = objMap;
    for(let prop in objMap) {
        if(!isNaN(parseInt(prop, 10)) && formData.hasOwnProperty(prop)) {
            for(let i=0; i<Object.keys(formData).length; i++) {
                if(typeof objMap[prop] === "object") {
                    returnObj[i] = {...objMap[0]};
                }
                if(typeof objMap[prop] === "string") {
                    returnObj[i] = "";
                }
            }
        }
    }
    return returnObj;
};

const formToObjectMapping = (formData: Object, objMap: Object, write: boolean = true): Object => {
    let returnObj: Object = lengthenArrays(formData, objMap); // Arrays can be deep inside schema object, so need to do this every time.
    for(let prop in objMap) {
        if(typeof objMap[prop] === "string" && formData.hasOwnProperty(prop) && write) {
            returnObj[prop] = formData[prop];
        }
        if(typeof objMap[prop] === "object") {
            for(let formProp in formData) {
                if(typeof formData[formProp] === "object") {
                    const write: boolean = formProp === prop; // This prevents data buried in an array from being overwritten.
                    returnObj[prop] = formToObjectMapping(formData[formProp], objMap[prop], write);
                }
            }
        }
    }
    return returnObj;
};

const mergeFormWithSchema = (formData: Object, objMap: Object): Object => {
    let fullData: Object = unflattenFormData(formData);
    return formToObjectMapping(fullData, objMap);
};

module.exports = {
    arrayIntoObj,
    mergeFormWithSchema,
    unflattenFormData,
};