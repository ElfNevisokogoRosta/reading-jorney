import { axiosRequest } from '../axios/axiosInstance';

const register = async (data: {
  name: FormDataEntryValue;
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}) => {
  return await axiosRequest
    .post('/users/signup', data)
    .then((res) => res.data)
    .catch((e) => e.message);
};

export default register;
