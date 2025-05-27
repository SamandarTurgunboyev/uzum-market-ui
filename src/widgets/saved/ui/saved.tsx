'use client';

import { Button } from '@/shared/ui/button';
import { Minus, PackageMinus, Plus, Star } from 'lucide-react';
import Image from 'next/image';
import { Bestseller } from '../lib/data';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { useProduct } from '@/shared/hooks/productsave';
import { Checkbox } from '@/shared/ui/checkbox';

const Saved = () => {
  const { product, updateCount, removeProduct, setCreate } = useProduct();

  const handleIncrement = (index: number) => {
    const item = Bestseller[index];
    if (!item.id || !item.price) {
      console.error('Invalid product data:', item);
      return;
    }
    updateCount(
      item.id,
      (product.find((p) => p.id === item.id)?.count || 0) + 1,
    );
  };

  const handleDecrement = (index: number) => {
    const item = Bestseller[index];
    if (!item.id || !item.price) {
      console.error('Invalid product data:', item);
      return;
    }
    const currentCount = product.find((p) => p.id === item.id)?.count || 0;
    if (currentCount > 1) {
      updateCount(item.id, currentCount - 1);
    }
  };

  return (
    <ScrollArea className="flex flex-col h-[700px] w-[70%] max-md:w-full">
      <ScrollArea className="h-[650px]">
        {Bestseller.slice(0, 12).map((e, index) => {
          const cleanPrice = Number(String(e.price).replace(/[\s.]/g, '')); // Handle "3 250 000" or "3.250.000"
          const count = product.find((p) => p.id === e.id)?.count || 1;

          return (
            <div
              key={e.id}
              className="relative flex gap-2 mt-4 max-md:flex-col"
            >
              <div className="relative">
                <Image
                  src={e.image}
                  width={200}
                  height={200}
                  className="max-md:w-full"
                  alt={`Product${e.id}`}
                />
                <Button
                  variant={'outline'}
                  className="absolute top-1 right-1 cursor-pointer"
                  onClick={() => removeProduct(e.id)}
                >
                  <PackageMinus />
                </Button>
                <Checkbox
                  className="absolute top-1 left-1 bg-white cursor-pointer"
                  checked={product.some((p) => p.id === e.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setCreate(e.id, e.name, e.price, count);
                    } else {
                      removeProduct(e.id);
                    }
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="px-2">
                  {e.name.length > 60 ? e.name.slice(0, 60) + '...' : e.name}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Star fill="gold" color="gold" size={12} />
                  <p>{e.rating}</p>
                </div>
                <p className="font-bold">
                  {e.price} {"so'm"}
                  <span className="text-muted-foreground px-2 line-through">
                    {e.discount?.toLocaleString()} {"so'm"}
                  </span>
                </p>
                <div className="flex gap-4 items-center mt-4 max-md:flex-col">
                  <div className="flex gap-4 items-center mt-4">
                    <Button onClick={() => handleIncrement(index)}>
                      <Plus />
                    </Button>
                    <Button
                      className="shadow w-16 h-full text-center flex justify-center items-center rounded-md"
                      disabled
                    >
                      <h1>{count}</h1>
                    </Button>
                    <Button onClick={() => handleDecrement(index)}>
                      <Minus />
                    </Button>
                  </div>
                  <div>
                    <h1 className="font-semibold text-xl">
                      Summasi: {(cleanPrice * count).toLocaleString()} {"so'm"}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </ScrollArea>
  );
};

export default Saved;
