import { axiosRequest } from '../axios/axiosInstance';

const login = async (
  email: FormDataEntryValue,
  password: FormDataEntryValue,
) => {
  return await axiosRequest
    .post('/users/signin', { email, password })
    .then((res) => res.data)
    .catch((e) => e.message);
};

export default login;
