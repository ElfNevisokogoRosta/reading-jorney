import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${SITE_NAME} - Register`,
  };
}

const Registration: FC = () => {
  return <div>page</div>;
};

export default Registration;
