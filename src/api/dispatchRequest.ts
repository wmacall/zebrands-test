import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
});

export const dispatchRequest = async (request: AxiosRequestConfig) => {
  try {
    axiosInstance.defaults.headers!.common['Content-Type'] = 'application/json';
    axiosInstance.defaults.headers!.common!.Accept = 'application/json';
    const resource = await axiosInstance.request(request);
    return Promise.resolve(resource);
  } catch (error) {
    return Promise.reject(error);
  }
};
