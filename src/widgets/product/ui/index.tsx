// components/ProductPage.tsx
'use client';

import { Button } from '@/shared/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { Check, Heart, Minus, Plus, Star } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import Description from './description';
import ImageCard from './imageCard';
import Money from "@/assets/to'lov/money.png";
import Payme from "@/assets/to'lov/payme.png";
import Click from "@/assets/to'lov/click.png";
import Uzum from "@/assets/to'lov/uzum.png";
import { useProduct } from '@/shared/hooks/productsave';

const ProductPage = () => {
  const [added, setAdded] = useState<boolean>(false);
  const { setCreate } = useProduct();

  const product = {
    id: 1,
    title:
      "Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f C07/3, 500 varaq",
    price: "39.000 so'm",
    count: 1,
  };

  const handleAddToCart = () => {
    setCreate(product.id, product.title, product.price, product.count);
    setAdded(true);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">{product.title}</h1>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={12} fill="gold" color="gold" />
        ))}
        <p className="ml-2 text-muted-foreground inline-block">5</p>
        <span className="ml-1 text-muted-foreground text-sm">(5 sharh)</span>
      </div>
      <div className="flex max-lg:flex-col">
        <div className="w-[70%] max-lg:w-full">
          <div className="flex gap-5">
            <Carousel
              orientation="vertical"
              className="w-full max-w-36 relative h-[600px] max-2xl:h-[450px] max-xl:h-[350px] mt-auto max-md:hidden"
            >
              <CarouselContent className="h-[600px] max-2xl:h-[450px] max-xl:h-[350px]">
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/3 max-xl:basis-1/2"
                  >
                    <div className="p-1">
                      <Image
                        src="https://placehold.co/300x400.jpg"
                        width={300}
                        height={400}
                        alt="Product image"
                        className="w-full h-auto"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute top-0 left-1/2 h-full flex justify-between flex-col items-center">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
            <Carousel className="w-full relative">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 max-md:basis-1/1"
                  >
                    <div className="p-1">
                      <Image
                        src="https://placehold.co/300x400.jpg"
                        width={300}
                        height={400}
                        alt="Product image"
                        className="w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute w-full flex justify-between top-1/2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
          {/* sharhlar */}
          <Carousel className="w-full relative mt-5">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 bg-white shadow max-md:basis-1/1 p-4 flex-col items-center ml-1"
                >
                  <div className="flex justify-between">
                    <h1>Samandar</h1>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index}>
                          <Star size={16} fill="gold" color="gold" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs">20-may</p>
                  <p className="mt-10">{"Juda zo'r tavar ekan menga yoqdi"}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute w-full flex justify-between top-1/2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
            <Button
              className="w-full mt-4 bg-white shadow text-black font-semibold text-lg"
              variant={'outline'}
            >
              {"Hammasini ko'rish"}
            </Button>
          </Carousel>
          <Tabs defaultValue="description" className="mt-10">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="description">Mahsulot tavsifi</TabsTrigger>
              <TabsTrigger value="image">Mahsulot rasmlari</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <Description />
            </TabsContent>
            <TabsContent value="image" className="mt-4">
              <ImageCard />
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-[30%] max-lg:mt-5 max-lg:w-full min-lg:p-4">
          <div className="bg-white shadow p-2">
            <p className="font-semibold text-lg inline-block">
              {product.price}
            </p>
            <span className="ml-4 font-semibold text-sm line-through">
              {"49.000 so'm"}
            </span>
            <div className="flex mt-5 gap-2 p-2">
              <Button
                className="bg-gray-200 text-black w-[90%]"
                variant={'ghost'}
                onClick={() => setAdded(true)}
              >
                Mahsulot soni eng kamida 1ta
              </Button>
              <Button className="bg-gray-200" variant={'ghost'}>
                <Heart size={20} color="black" />
              </Button>
            </div>
            {added && (
              <div className="p-2 flex justify-between">
                <Button className="bg-white shadow w-[10%]" variant={'ghost'}>
                  <Minus />
                </Button>
                <Button className="bg-white shadow w-[70%]" variant={'ghost'}>
                  1
                </Button>
                <Button className="bg-white shadow w-[10%]" variant={'ghost'}>
                  <Plus />
                </Button>
              </div>
            )}
            <div className="p-2">
              <Button className="w-full" onClick={handleAddToCart}>
                {"Savatga qo'shish"}
              </Button>
            </div>
            <div className="p-2 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Button
                  className="bg-green-500/50 hover:bg-green-500/50 cursor-pointer"
                  variant={'ghost'}
                >
                  <Check />
                </Button>
                <p>{"1kishi eng ko'pi bilan 2ta zakaz qila oladi"}</p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  className="bg-yellow-500/50 hover:bg-green-500/50 cursor-pointer"
                  variant={'ghost'}
                >
                  <Star />
                </Button>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={12} fill="gold" color="gold" />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-center font-semibold text-md">
                  {"To'lov usullari:"}
                </p>
                <div className="flex items-center gap-4">
                  <Image src={Money} alt="money" width={40} height={40} />
                  <p>Naxt</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={Payme} alt="payme" width={40} height={40} />
                  <p>Payme orqali</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={Click} alt="click" width={40} height={40} />
                  <p>Click orqali</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={Uzum} alt="payme" width={40} height={40} />
                  <p>UzumBank orqali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
