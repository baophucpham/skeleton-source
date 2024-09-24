import axiosClient from './axiosClient';

export const loginApi = (data: any) => {
    const params = {
        code: data?.code,
        redirect_uri: data?.redirect_uri,
    }
    const url = `${process.env.REACT_APP_PUBLIC_URL}/login`
   return axiosClient.post(url, params)
   
};
