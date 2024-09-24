import axiosClient from './axiosClient';

export const getImageApi = (id?: string) => {
    const url = `${process.env.REACT_APP_PUBLIC_URL}/documents/api/quotes-asset/${id}`;
    return axiosClient.get(url);
};
