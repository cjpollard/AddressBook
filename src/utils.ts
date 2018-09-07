import aj from "axios";
import btoa from "btoa";

// All api calls are promisified through these functions
export const apiInterface = {
    get: (url) => {
        return aj.get(url).then((res) => {
            return Promise.resolve(res.data);
        }, (err) => {
            return Promise.reject(err);
        });
    },

    post: (url, data) => {
        // Create data object to post to server
        const reqData = {
            data: btoa(JSON.stringify(data))
        };
        return aj.post(url, reqData).then((res) => {
            return Promise.resolve(res.data);
        }, (err) => {
            return Promise.reject(err);
        });
    }
};

export default apiInterface;