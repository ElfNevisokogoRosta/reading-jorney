import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { FC } from 'react';
import BaseButton from '../../../components/UI/Button';
import BaseInput from '../../../components/UI/Input';
import { registerUser } from '../../../utils/actions';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${SITE_NAME} - Register`,
  };
}

const Registration: FC = () => {
  return (
    <form action={registerUser}>
      <BaseInput name="name" error={false} label="name" />
      <BaseInput name="email" error={false} label="Email" />
      <BaseInput name="password" error={false} label="Password" />
      <BaseButton>Registration</BaseButton>
    </form>
  );
};

export default Registration;
