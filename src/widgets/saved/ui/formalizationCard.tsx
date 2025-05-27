'use client';

import { formSchema } from '@/shared/hooks/formik';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { Label } from '@/shared/ui/label';
import { useProduct } from '@/shared/hooks/productsave';
import { ScrollArea } from '@/shared/ui/scroll-area';
import dynamic from 'next/dynamic';
import { IEvent, Map } from 'yandex-maps';
import Image from 'next/image';
import Money from "@/assets/to'lov/money.png";
import Payme from "@/assets/to'lov/payme.png";
import Click from "@/assets/to'lov/click.png";
import Uzum from "@/assets/to'lov/uzum.png";

const YMaps = dynamic(
  () => import('@pbe/react-yandex-maps').then((mod) => mod.YMaps),
  { ssr: false },
);
const YandexMap = dynamic(
  () => import('@pbe/react-yandex-maps').then((mod) => mod.Map),
  { ssr: false },
);
const Placemark = dynamic(
  () => import('@pbe/react-yandex-maps').then((mod) => mod.Placemark),
  { ssr: false },
);
const GeolocationControl = dynamic(
  () => import('@pbe/react-yandex-maps').then((mod) => mod.GeolocationControl),
  { ssr: false },
);
const ZoomControl = dynamic(
  () => import('@pbe/react-yandex-maps').then((mod) => mod.ZoomControl),
  { ssr: false },
);

interface Product {
  id: number;
  title: string;
  price: string;
  count: number;
}

const FormalizationCard = () => {
  const { product } = useProduct();
  const [phoneCode, setPhoneCode] = useState<string>('998');
  const [coords, setCoords] = useState<[number, number] | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null,
  );
  const mapRef = useRef<Map | undefined>(undefined);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const totalPrice = product.reduce((sum, item) => {
      const cleanPrice = Number(String(item.price).replace(/[\s.]/g, ''));
      return sum + cleanPrice * item.count;
    }, 0);
    setPrice(totalPrice);
  }, [product]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: '',
      latitude: '',
      longtitude: '',
      userName: '',
      address: '',
      paymentMethod: '',
    },
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          setCoords([latitude, longitude]);
        },
        (error) => {
          console.error('Geolocation error:', error.message);
        },
      );
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const mapInstance = mapRef.current;
      const handleClick = (event: object | IEvent) => {
        const e = event as IEvent;
        const clickedCoords = e.get('coords') as [number, number];
        setCoords(clickedCoords);
        setUserLocation(null);
        mapRef.current?.setCenter(clickedCoords, 15, { duration: 300 });
        form.setValue('latitude', String(clickedCoords[0]));
        form.setValue('longtitude', String(clickedCoords[1]));
      };
      mapInstance.events.add('click', handleClick);
      return () => {
        mapInstance.events.remove('click', handleClick);
      };
    }
  }, [form]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const payload = {
      phone: phoneCode + values.phoneNumber,
      userName: values.userName,
      latitude: values.latitude,
      longtitude: values.longtitude,
      address: values.address,
      paymentMethod: values.paymentMethod,
    };
    console.log(payload, 'form');
  };

  return (
    <div className="w-full bg-white shadow p-2 max-w-full">
      <ScrollArea className="h-[400px] w-full border p-4">
        {product.length === 0 ? (
          <p className="text-center text-muted-foreground">
            {"Hech narsa yo'q"}
          </p>
        ) : (
          product.map((pro: Product) => (
            <div
              key={pro.id}
              className="bg-white shadow w-full mt-4 p-2 flex flex-col"
            >
              <h1 className="text-sm font-semibold">
                {pro.title.length > 100
                  ? pro.title.slice(0, 100) + '...'
                  : pro.title}
              </h1>
              <h1 className="text-md font-semibold text-end">
                {(
                  Number(pro.price.replace(/[\s.]/g, '')) * pro.count
                ).toLocaleString()}{' '}
                {"so'm"}
              </h1>
            </div>
          ))
        )}
      </ScrollArea>

      <div className="mt-5 bg-white shadow p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <Label>Ismingizni kiriting</Label>
                  <FormControl>
                    <Input placeholder="Ism" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <Label>Aloqa uchun telefon raqami</Label>
                  <FormControl>
                    <div className="flex gap-2">
                      <Select
                        onValueChange={(e) => setPhoneCode(e)}
                        defaultValue="998"
                      >
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="998">+998</SelectItem>
                          <SelectItem value="1">+1</SelectItem>
                          <SelectItem value="996">+996</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="Telefon raqami" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <Label>Manzilingiz</Label>
                  <FormControl>
                    <Input
                      placeholder="Bekobod shahar 14daha 83dom 3xonadon"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Yandex Maps */}
            <YMaps query={{ load: 'package.full' }}>
              <YandexMap
                instanceRef={(map) => {
                  mapRef.current = map || undefined;
                }}
                width="100%"
                height="300px"
                state={{ center: coords || [41.2995, 69.2401], zoom: 9 }}
                modules={['geoObject.addon.balloon']}
              >
                <ZoomControl
                  options={{ position: { right: 10, top: 10 }, size: 'small' }}
                />
                <GeolocationControl options={{ float: 'left' }} />
                {coords && (
                  <Placemark
                    geometry={coords}
                    options={{
                      iconLayout: 'default#image',
                      iconImageHref:
                        'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                      iconImageSize: [30, 30],
                      iconImageOffset: [-15, -30],
                      balloonCloseButton: false,
                    }}
                  />
                )}
                {userLocation && (
                  <Placemark
                    geometry={userLocation}
                    options={{
                      iconLayout: 'default#image',
                      iconImageHref:
                        'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                      iconImageSize: [30, 30],
                      iconImageOffset: [-15, -30],
                      balloonCloseButton: false,
                    }}
                  />
                )}
              </YandexMap>
            </YMaps>

            {/* Payment Method */}
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <Label>{"To'lov usuli"}</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      type="button"
                      variant={field.value === 'money' ? 'default' : 'outline'}
                      onClick={() => form.setValue('paymentMethod', 'money')}
                    >
                      <Image src={Money} alt="Naqd" width={40} height={40} />{' '}
                      Naqd
                    </Button>
                    <Button
                      type="button"
                      variant={field.value === 'payme' ? 'default' : 'outline'}
                      onClick={() => form.setValue('paymentMethod', 'payme')}
                    >
                      <Image src={Payme} alt="Payme" width={40} height={40} />{' '}
                      Payme
                    </Button>
                    <Button
                      type="button"
                      variant={field.value === 'click' ? 'default' : 'outline'}
                      onClick={() => form.setValue('paymentMethod', 'click')}
                    >
                      <Image src={Click} alt="Click" width={40} height={40} />{' '}
                      Click
                    </Button>
                    <Button
                      type="button"
                      variant={field.value === 'uzum' ? 'default' : 'outline'}
                      onClick={() => form.setValue('paymentMethod', 'uzum')}
                    >
                      <Image src={Uzum} alt="Uzum" width={40} height={40} />{' '}
                      Uzum
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Rasmiylashtirish ({price.toLocaleString()} {"so'm"})
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormalizationCard;
