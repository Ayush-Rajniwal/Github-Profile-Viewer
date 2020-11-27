import axios from "axios";
import { API_URL } from "@constants/variables";

const GET = (endpoint, payload) => {
    let config = {
        method: "get",
        url: `${API_URL}${endpoint}`,
    };

    if (payload.isAuthenticated) {
        config.headers = { Authorization: `token ${payload.password}` };
    }

    return axios(config);
};
export default GET;
