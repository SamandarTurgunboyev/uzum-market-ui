import { removeAccToken, removeRefToken } from '@/shared/lib/token';
import { Card, CardContent } from '@/shared/ui/card';
import { FileDrop } from '@/shared/ui/file-drop';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import store_request from '../lib/store.request';
import { storeForm } from '../lib/store.validation';

const CreateSeller = () => {
  const form = useForm<z.infer<typeof storeForm>>({
    resolver: zodResolver(storeForm),
    defaultValues: {
      address: '',
      banner: [],
      latitude: '',
      longitude: '',
      store_name: '',
    },
  });

  const navigation = useRouter();

  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);

  const { mutate } = useMutation({
    mutationFn: (body: FormData) => {
      return store_request.createStore(body);
    },
    onSuccess: () => {
      toast.success('Siz sotuvchiga ayladingiz');
      removeAccToken('uzum-acc');
      removeRefToken('uzum-ref');
      navigation.push('auth');
    },
    onError: (err: AxiosError) => {
      toast.error(err.message || 'Xatolik yuz berdi');
    },
  });

  function onSubmit(values: z.infer<typeof storeForm>) {
    const formData = new FormData();
    formData.append('store_name', values.store_name);
    formData.append('latitude', values.latitude);
    formData.append('longitude', values.longitude);
    formData.append('address', values.address);
    values.banner.forEach((e) => {
      formData.append('banner', e);
    });
    mutate(formData);
  }

  return (
    <Card className="w-full">
      <CardContent className="w-full flex flex-col gap-10 justify-center items-center py-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-10"
          >
            <FormField
              control={form.control}
              name="store_name"
              render={({ field }) => (
                <FormItem>
                  <Label>Magazin nomi</Label>
                  <FormControl>
                    <Input
                      placeholder="nomi"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <Label>Magazin manzili</Label>
                  <FormControl>
                    <Input
                      placeholder="manzil"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="banner"
              render={({ field }) => (
                <FormItem>
                  <Label>Banner</Label>
                  <FormControl>
                    <FileDrop
                      accept="image/*"
                      onFilesChange={(files) => field.onChange(files)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <YMaps query={{ load: 'package.full' }}>
              <Map
                defaultState={{ center: [41.3111, 69.2797], zoom: 10 }}
                width="100%"
                height="400px"
                onClick={(e: ymaps.IEvent<HTMLElement, [number, number]>) => {
                  const coords = e.get('coords') as [number, number];
                  setCoordinates(coords);
                  form.setValue('latitude', coords[0].toString());
                  form.setValue('longitude', coords[1].toString());
                }}
              >
                {coordinates && <Placemark geometry={coordinates} />}
              </Map>
            </YMaps>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              Saqlash
            </button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateSeller;
