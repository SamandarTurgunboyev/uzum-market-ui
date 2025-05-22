import { Checkbox } from '@/shared/ui/checkbox';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import Link from 'next/link';
import React from 'react';
import { BrendData } from '../lib/data';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { Button } from '@/shared/ui/button';

const Filter = () => {
  return (
    <div className="w-[30%] border bg-gray-200/50 shadow-lg border-none py-4 px-4 h-full max-lg:hidden">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-center text-xl font-semibold">Turkumlar</h1>
        <div className="px-4 py-2 flex flex-col gap-2">
          <Link href="#">Avtotovarlar </Link>
          <Link href="#">Aksessuarlar</Link>
          <Link href="#">Maishiy texnika</Link>
          <Link href="#">Maishiy kimyoviy moddalar</Link>
          <Link href="#">Dacha, bog&lsquo va tomorqa</Link>
          <Link href="#">Bolalar tovarlari</Link>
          <Link href="#">Salomatlik</Link>
          <Link href="#">Hayvonlar uchun tovarlar</Link>
          <Link href="#">Kanselyariya tovarlari</Link>
          <Link href="#">Kitoblar</Link>
          <Link href="#">Go&lsquozallik va Linkarvarish</Link>
          <Link href="#">Linkoyabzallar</Link>
          <Link href="#">Kiyim</Link>
          <Link href="#">Oziq-ovqat mahsulotlari</Link>
          <Link href="#">SLinkort va hordiq</Link>
          <Link href="#">Qurilish va taʼmirlash</Link>
          <Link href="#">Uy-ro&lsquozg&lsquoor buyumlari</Link>
          <Link href="#">Xobbi va ijod</Link>
          <Link href="#">Elektronika</Link>
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <h1 className="text-center font-semibold text-xl">Narx so&lsquom</h1>
        <div className="flex gap-2 mt-2">
          <Input className="bg-white border-none" placeholder="dan" />
          <Input className="bg-white border-none" placeholder="gacha" />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start mt-4">
        <h1 className="text-center text-xl font-semibold mb-2">Brend</h1>
        <ScrollArea className="h-[900px] pr-2 w-full">
          <div className="flex flex-col gap-2 h-[900px]">
            {BrendData.map((e) => (
              <div key={e.label} className="flex gap-2 items-center px-2 py-1">
                <Checkbox id={e.value} className="bg-white border-gray-300" />
                <Label htmlFor={e.value}>{e.label}</Label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <Button className="mt-4 w-full bg-white text-black hover:bg-white cursor-pointer">
        Tozalash
      </Button>
    </div>
  );
};

export default Filter;
