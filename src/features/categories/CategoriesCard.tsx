'use client';

import { getCategory, getSubCategory } from '@/shared/config/api/categoryApi';
import { cn } from '@/shared/lib/utils';
import { CategoryFilter } from '@/widgets/category/lib/model';
import { useQuery } from '@tanstack/react-query';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';

interface Props {
  data: CategoryFilter[];
}

const CategoriesCard: FC<Props> = () => {
  const { data: category } = useQuery({
    queryKey: ['category'],
    queryFn: getCategory,
  });

  const [hoveredValue, setHoveredValue] = useState<number>(
    category?.data?.data[0]?.id || 1,
  );

  const { data: subCategory } = useQuery({
    queryKey: ['sub_category', hoveredValue],
    queryFn: () => getSubCategory({ categoryId: hoveredValue }),
  });

  return (
    <div className="flex max-lg:hidden">
      <div className="flex flex-col gap-2 bg-white w-[30%] shadow p-4">
        {category?.data.data.map((e) => (
          <div
            key={e.id}
            className={cn(
              'flex justify-between cursor-pointer p-2 rounded-sm',
              hoveredValue === e.id && 'bg-gray-300/30',
            )}
            onMouseEnter={() => setHoveredValue(e.id)}
          >
            <h1>{e.name}</h1>
            <ChevronRight />
          </div>
        ))}
      </div>
      <div className="ml-6 p-4 rounded w-full grid gap-10 grid-cols-3 h-full">
        {subCategory?.data.data.map((e) => (
          <div key={e.name}>
            <h1>{e.name}</h1>
            {e.subSubCategories.map((i) => {
              console.log(i, 'sub');

              return (
                <Link href={`/products/${i.slug}`} key={i.name}>
                  <p className="text-muted-foreground hover:text-blue-600">
                    {i.name}
                  </p>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;
