import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { error } from 'console';
import { useHistory } from 'react-router-dom';
import { history } from 'src/components/history';
import { refreshTokenApi } from './apiRefetchToken';

let isRefreshing = false; // Để kiểm tra việc refresh token đang được thực hiện
let failedQueue: any[] = []; // Hàng đợi chứa các request bị lỗi 401

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = []; // Làm rỗng hàng đợi sau khi xử lý
};

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_PUBLIC_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
});

axiosClient.interceptors.request.use(
    function (config: AxiosRequestConfig) {
		const token = localStorage.getItem('access_token');
		config.headers = config.headers || {};
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log(
            '::REQUEST::',
            config.baseURL,
            config.url,
            config.data || '',
            config.params || '',
        );

        return config;
    },
    function (error: AxiosError) {
        return Promise.reject(error);
    },
);

axiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
			if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                .then(token => {
                    originalRequest.headers['Authorization'] = `Bearer ${token}`;
                    return axiosClient(originalRequest);
                })
                .catch(err => Promise.reject(err));
            }
            originalRequest._retry = true;
			isRefreshing = true;
            try {
                const refresh_token = localStorage.getItem('refresh_token');
                if (!refresh_token) {
                    return Promise.reject(error);
                }
                const response = await refreshTokenApi({ refresh_token });
                if (response?.status === 200) {
                    const { access_token } = response.data;
                    localStorage.setItem('access_token', access_token);
					processQueue(null, access_token);
                    originalRequest.headers = originalRequest.headers || {};
                    originalRequest.headers[
                        'Authorization'
                    ] = `Bearer ${access_token}`;
                    return axiosClient(originalRequest);
                }
            } catch (refreshError) {
				processQueue(refreshError, null);
                return Promise.reject(refreshError);
            }finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    },
);
// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response: AxiosResponse) {
        return response?.data;
    },
    function (error: AxiosError) {
        console.error(
            JSON.stringify(error.response?.data, null, 2),
            error.response?.config.url,
            error,
            'ERROR RESPONSE',
        );
        return Promise.reject(error.response?.data);
    },
);

export default axiosClient;
