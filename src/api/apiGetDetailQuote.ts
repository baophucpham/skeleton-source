import axiosClient from './axiosClient';

export const getDetailQuote = (dataParam?: any): Promise<any> => {
    const url = `${process.env.REACT_APP_PUBLIC_URL}/documents/api/quotes-document`;
    return axiosClient.get(url);
};
