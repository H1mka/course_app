import axios from "axios";
import accessToken from "./accessToken";

const getCourses = () => {
    const options = {
        method: "GET",
        url: 'https://api.wisey.app/api/v1/core/preview-courses',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Bearer ${accessToken}`
        }
    }
    return axios.request(options)
}

export default getCourses;