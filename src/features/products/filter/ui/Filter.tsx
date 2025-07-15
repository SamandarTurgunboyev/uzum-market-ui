'use client';

import { getBrand, getChildCategory } from '@/shared/config/api/categoryApi';
import formatPrice from '@/shared/lib/formatPrice';
import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Filter = () => {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: cat } = useQuery({
    queryKey: ['one-cate'],
    queryFn: () => getChildCategory({}),
    select: (res) => res.data,
  });

  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [brands, setBrands] = useState<number[]>([]);

  const { data: brand } = useQuery({
    queryKey: ['brand'],
    queryFn: getBrand,
  });

  useEffect(() => {
    setMin(searchParams.get('min_price') || '');
    setMax(searchParams.get('max_price') || '');
    const brandParam = searchParams.get('brand');
    const parsedBrands = brandParam
      ? brandParam
          .split(',')
          .map((id) => parseInt(id, 10))
          .filter(Boolean)
      : [];

    setBrands(parsedBrands);
  }, [searchParams]);

  return (
    <div className="w-[30%] border bg-gray-200/50 shadow-lg py-4 px-4 h-full max-lg:hidden">
      <div className="mb-4">
        <h1 className="text-xl font-semibold">Turkumlar</h1>
        <div className="px-4 py-2">
          {cat?.data?.map((e) => (
            <Link href={'/products/' + e.slug} key={e.id} className="block">
              {e.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="text-xl font-semibold">Narx (so`m)</h1>
        <div className="flex gap-2 mt-2">
          <Input
            placeholder="dan"
            value={formatPrice(min)}
            onChange={(e) => setMin(formatPrice(e.target.value))}
          />
          <Input
            placeholder="gacha"
            value={formatPrice(max)}
            onChange={(e) => setMax(formatPrice(e.target.value))}
          />
        </div>
      </div>

      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">Brend</h1>
        <ScrollArea className="h-[300px] pr-2 w-full">
          <div className="flex flex-col gap-2">
            {brand?.data.data.map((e) => (
              <div key={e.id} className="flex gap-2 items-center">
                <Checkbox
                  id={String(e.id)}
                  checked={brands.includes(e.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setBrands((prev) => [...prev, e.id]);
                    } else {
                      setBrands((prev) => prev.filter((id) => id !== e.id));
                    }
                  }}
                />
                <Label htmlFor={String(e.id)}>{e.name}</Label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <Button
        className="mt-4 w-full bg-white text-black hover:bg-white"
        onClick={() => {
          const params = new URLSearchParams();
          if (min) params.set('min_price', min);
          if (max) params.set('max_price', max);
          if (brands.length > 0) params.set('brand', brands.join(','));
          router.push(`${path}?${params.toString()}`);
        }}
      >
        Qo‘llash
      </Button>
    </div>
  );
};

export default Filter;
