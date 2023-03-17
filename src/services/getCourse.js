import axios from "axios";
import accessToken from "./accessToken";

const getCourse = id => {
    const options = {
        method: "GET",
        url: `https://api.wisey.app/api/v1/core/preview-courses/${id}`,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Bearer ${accessToken}`
        }
    }
    return axios.request(options)
}

export default getCourse;