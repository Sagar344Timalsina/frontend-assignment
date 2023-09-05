import axios from "axios";

const axiosInstance: any = axios.create({
  baseURL: "https://fakestoreapi.com",
  // baseURL: process.env.NEXT_PUBLIC_BACKURL,

  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config: any) {
    

    try {
     
      return config;
    } catch (err) {
      // console.log("error in axios", err)
    }

    // Do something before request is sent
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response: any) {
    return response.data;
  },
  function (error: any) {
    if (error.response && error.response.status === 401) {
      //when 401 i.e unauthorized comes
      //write function to clear session
      // console.log('its 401')
    }

    if (error.response && error.response.status === 403) {
      // store.dispatch(errorNotify('not authorized'))
    }

    return Promise.reject(error?.response?.data?.message);
  }
);

export default axiosInstance;
