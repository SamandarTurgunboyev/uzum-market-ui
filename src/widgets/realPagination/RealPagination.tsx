'use client';

import { Button } from '@/shared/ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';

interface Props {
  currentPage: number;
  totalPages: number;
}

const RealPagination: FC<Props> = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-end space-x-2 mt-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Oldingi
      </Button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Keyingi
      </Button>
    </div>
  );
};

export default RealPagination;
