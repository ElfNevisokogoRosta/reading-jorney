import { axiosRequest } from '../axios/axiosInstance';

const refreshToken = async () => {
  return await axiosRequest
    .get('auth/refresh')
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
      return err.message;
    });
};
export default refreshToken;
