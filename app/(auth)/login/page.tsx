import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { FC } from 'react';
import BaseButton from '../../../components/UI/Button';
import BaseInput from '../../../components/UI/Input';
import { loginUser } from '../../../utils/actions';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${SITE_NAME} - Login`,
  };
}

const Login: FC = async () => {
  console.log(process.env.API_URL);
  return (
    <>
      <form action={loginUser}>
        <BaseInput name="email" error={false} label="Email" />
        <BaseInput name="password" error={false} label="Password" />
        <BaseButton>Log in</BaseButton>
      </form>
    </>
  );
};
export default Login;
