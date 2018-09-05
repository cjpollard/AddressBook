import aj from "axios";
import btoa from "btoa";


export const apiInterface = {
    get: (url) => {
        return aj.get(url).then((res) => {
            return Promise.resolve(res.data);
        }, (err) => {
            return Promise.reject(err);
        });
    },

    post: (url, data) => {
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