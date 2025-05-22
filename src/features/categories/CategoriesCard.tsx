'use client';

import { cn } from '@/shared/lib/utils';
import { CategoryFilter } from '@/widgets/category/lib/model';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { FC, useState } from 'react';

interface Props {
  data: CategoryFilter[];
}

const CategoriesCard: FC<Props> = ({ data }) => {
  const [hoveredValue, setHoveredValue] = useState<string>(data[0].value);

  return (
    <div className="flex max-lg:hidden">
      <div className="flex flex-col gap-2 bg-white w-[30%] shadow p-4">
        {data.map((e) => (
          <div
            key={e.label}
            className={cn(
              'flex justify-between cursor-pointer p-2 rounded-sm',
              hoveredValue === e.value && 'bg-gray-300/30',
            )}
            onMouseEnter={() => setHoveredValue(e.value)}
          >
            <h1>{e.label}</h1>
            <ChevronRight />
          </div>
        ))}
      </div>
      <div className="ml-6 p-4 rounded w-full grid gap-10 grid-cols-3 h-full">
        {data.map(
          (e) =>
            e.value === hoveredValue &&
            e.items.map((item) => (
              <div key={item.value}>
                <h1>{item.label}</h1>
                {item.items.map((i) => (
                  <Link href={`/products/${i.label}`} key={i.value}>
                    <p className="text-muted-foreground hover:text-blue-600">
                      {i.label}
                    </p>
                  </Link>
                ))}
              </div>
            )),
        )}
      </div>
    </div>
  );
};

export default CategoriesCard;
