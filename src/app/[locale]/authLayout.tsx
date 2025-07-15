'use client';

import { getMe } from '@/shared/config/api/authApi';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getMe'],
    queryFn: getMe,
    staleTime: 0,
  });

  const navigate = useRouter();

  useEffect(() => {
    if (!isLoading && !data?.data) {
      navigate.push('/auth/');
    }
  }, [data, isLoading, navigate]);

  if (isLoading) return null; // yoki loading indicator

  if (data?.data) {
    return <>{children}</>;
  }

  return null;
};

export default AuthLayout;
