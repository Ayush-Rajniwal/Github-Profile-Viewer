import axios from 'axios';
import { API_URL } from '@constants/variables';

const apiCall = (method, endpoint, payload) => {
    const config = {
        method,
        url: `${API_URL}${endpoint}`,
    };

    if (payload.isAuthenticated) {
        config.headers = { Authorization: `token ${payload.password}` };
    }

    return axios(config);
};
export default apiCall;
