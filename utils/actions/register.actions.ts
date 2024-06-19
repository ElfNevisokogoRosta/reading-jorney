'use server';

import { register } from '../api';

async function registerUser(formData: FormData) {
  try {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !name || !password) throw new Error('no data');
    const result = await register({ name, email, password });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
export default registerUser