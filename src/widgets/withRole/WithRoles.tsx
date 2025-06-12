import { userStore } from '@/shared/hooks/userStore';
import { Roles } from '@/shared/types/role';
import type { ReactNode } from 'react';

interface Props {
  role: Roles[];
  children: ReactNode;
}

const WithRole = ({ role, children }: Props) => {
  const currentUserRole = userStore.getState().role;
  const roles = role.includes(currentUserRole);

  if (!roles) {
    return <></>;
  }

  return <>{children}</>;
};

export default WithRole;
