import { userStore } from '@/shared/hooks/userStore';
import { Roles } from '@/shared/types/role';
import type { ReactNode } from 'react';

interface Props {
  role: Roles[] | undefined;
  children: ReactNode;
}

const WithRole = ({ role, children }: Props) => {
  const currentUserRole = userStore.getState().user?.roles;

  if (!currentUserRole || !role?.includes(currentUserRole as Roles)) {
    return <></>;
  }

  return <>{children}</>;
};

export default WithRole;
