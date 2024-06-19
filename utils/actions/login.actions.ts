'use server';

import { login } from '../api';

async function loginUser(formData: FormData) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) throw new Error('no data');
    const result = await login(email!, password!);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
export default loginUser;
