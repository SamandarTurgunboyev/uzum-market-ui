import { Input } from '@/shared/ui/input';
import { ScrollArea } from '@/shared/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { BrendData } from '../lib/data';
import { Checkbox } from '@/shared/ui/checkbox';
import { Label } from '@/shared/ui/label';
import { Button } from '@/shared/ui/button';

const FilterMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="border-none py-4 px-4">
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-center text-xl font-semibold">Turkumlar</h1>
              <div className="px-4 py-2 flex flex-col gap-2">
                <Link href="#">Avtotovarlar </Link>
                <Link href="#">Aksessuarlar</Link>
                <Link href="#">Maishiy texnika</Link>
                <Link href="#">Maishiy kimyoviy moddalar</Link>
                <Link href="#">Dacha, bog&apos; va tomorqa</Link>
                <Link href="#">Bolalar tovarlari</Link>
                <Link href="#">Salomatlik</Link>
                <Link href="#">Hayvonlar uchun tovarlar</Link>
                <Link href="#">Kanselyariya tovarlari</Link>
                <Link href="#">Kitoblar</Link>
                <Link href="#">Go&apos;zallik va parvarish</Link>
                <Link href="#">Oyoq kiyimlar</Link>
                <Link href="#">Kiyim</Link>
                <Link href="#">Oziq-ovqat mahsulotlari</Link>
                <Link href="#">Sport va hordiq</Link>
                <Link href="#">Qurilish va ta&apos;mirlash</Link>
                <Link href="#">Uy-ro&apos;zg&apos;or buyumlari</Link>
                <Link href="#">Xobbi va ijod</Link>
                <Link href="#">Elektronika</Link>
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <h1 className="text-center font-semibold text-xl">
                Narx so&apos;m
              </h1>
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
                    <div
                      key={e.label}
                      className="flex gap-2 items-center px-2 py-1"
                    >
                      <Checkbox
                        id={e.value}
                        className="bg-white border-gray-300"
                      />
                      <Label htmlFor={e.value}>{e.label}</Label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <Button className="mt-4 w-full bg-gray-100 text-black hover:bg-white cursor-pointer">
              Tozalash
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default FilterMobile;
