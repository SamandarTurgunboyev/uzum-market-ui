'use client';

import { Button } from '@/shared/ui/button';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Bestseller } from '../lib/data';
import { ScrollArea } from '@/shared/ui/scroll-area';

const Saved = () => {
  const [count, setCount] = useState(1);
  return (
    <ScrollArea className="flex h-[700px] w-[70%]">
      <ScrollArea className="h-[700px]">
        {Bestseller.slice(0, 12).map((e, index) => (
          <div key={index} className="relative flex gap-2 mt-4">
            <Image
              src="https://placehold.co/300x400.jpg"
              width={200}
              height={200}
              alt="Product1"
            />
            <div className="flex flex-col gap-2">
              <h1 className="px-2">
                {e.name.length > 60 ? e.name.slice(0, 60) : e.name}...
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star fill="gold" color="gold" size={12} />
                <p>{e.rating}</p>
              </div>
              <p className="font-bold">
                {e.price}
                <span className="text-muted-foreground px-2 line-through">
                  {e.discount}
                </span>
              </p>
              <div className="flex gap-4">
                <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
                <div className="bg-white shadow w-16 text-center flex">
                  <h1>{count}</h1>
                </div>
                <Button onClick={() => setCount((prev) => prev - 1)}>-</Button>
              </div>
              {/* <Button className='rounded-md w-10' variant={"outline"}>
                                <ShoppingCart />
                            </Button> */}
            </div>
          </div>
        ))}
      </ScrollArea>
    </ScrollArea>
  );
};

export default Saved;
