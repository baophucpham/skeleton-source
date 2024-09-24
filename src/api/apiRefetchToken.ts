import axiosClient from './axiosClient';

export const refreshTokenApi = (data: any) => {
    const url = `${process.env.REACT_APP_PUBLIC_URL}/refresh-token`;
    return axiosClient.post(url, data);
};
