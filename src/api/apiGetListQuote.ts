import axiosClient from './axiosClient';

export const getListQuote = (dataParam?: any) => {
    const url = `${process.env.REACT_APP_PUBLIC_URL}/quotes/api/quotes${dataParam}`;
    return axiosClient.get(url);
};
