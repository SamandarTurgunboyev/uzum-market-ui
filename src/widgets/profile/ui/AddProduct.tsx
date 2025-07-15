import {
  getBrand,
  getCategory,
  getChildCategory,
  getSubCategory,
} from '@/shared/config/api/categoryApi';
import formatPrice from '@/shared/lib/formatPrice';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import { FileDrop } from '@/shared/ui/file-drop';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { Switch } from '@/shared/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { Textarea } from '@/shared/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { product_request } from '../lib/product.request';
import { productForm } from '../lib/product.validation';

interface Props {
  setActiveTab: (tab: string) => void;
}

const AddProduct = ({ setActiveTab }: Props) => {
  const [cat, setCat] = useState<string>();
  const navigator = useRouter();
  const [subCat, setSubCat] = useState<string>();
  const form = useForm<z.infer<typeof productForm>>({
    resolver: zodResolver(productForm),
    defaultValues: {
      name_uz: '',
      name_ru: '',
      name_en: '',
      description_uz: '',
      description_en: '',
      description_ru: '',
      price: '',
      categoryId: '',
      brandId: '',
      disCount: false,
      disPrice: '',
      banner: [],
      media: [],
    },
  });

  const { data: categories } = useQuery({
    queryKey: ['category'],
    queryFn: getCategory,
  });

  const { data: subCategories } = useQuery({
    queryKey: ['sub-category', cat],
    queryFn: () => getSubCategory({ categoryId: cat }),
  });

  const { data: category } = useQuery({
    queryKey: ['child-category', subCat],
    queryFn: () => getChildCategory({ categoryId: subCat }),
  });

  const { data: brand } = useQuery({
    queryKey: ['brand'],
    queryFn: getBrand,
  });

  const [disCount, setDisCount] = useState<boolean>(false);

  const { mutate, isPending } = useMutation({
    mutationFn: (body: FormData) => {
      return product_request.createProduct(body);
    },
    onSuccess: () => {
      toast.success("Mahsulot qo'shildi");
      navigator.push('/profile');
    },
    onError: (err: AxiosError) => {
      toast.error(err.message || 'Xatolik yuz berdi');
    },
  });

  function submit(values: z.infer<typeof productForm>) {
    const formData = new FormData();
    formData.append('name_uz', values.name_uz);
    formData.append('name_ru', values.name_ru);
    formData.append('name_en', values.name_en);
    formData.append('description_uz', values.description_uz);
    formData.append('description_ru', values.description_ru);
    formData.append('description_en', values.description_en);
    formData.append('disCount', String(values.disCount));
    formData.append('disPrice', String(values.disPrice));
    formData.append('price', values.price);
    formData.append('brandId', values.brandId);
    formData.append('categoryId', values.categoryId);
    values.banner.forEach((b) => {
      formData.append('banner', b);
    });
    values.media.forEach((b) => {
      formData.append('media', b);
    });
    mutate(formData);
  }

  return (
    <>
      <Card>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className="space-y-8">
              <Tabs defaultValue="uz">
                <TabsList className="h-12">
                  <TabsTrigger value="uz">Nomi(uz)</TabsTrigger>
                  <TabsTrigger value="ru">Nomi(ru)</TabsTrigger>
                  <TabsTrigger value="en">Nomi(en)</TabsTrigger>
                </TabsList>
                <TabsContent value="uz">
                  <FormField
                    control={form.control}
                    name="name_uz"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nomi(uz)</FormLabel>
                        <FormControl>
                          <Input placeholder="Nomi(uz)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TabsContent>
                <TabsContent value="ru">
                  <FormField
                    control={form.control}
                    name="name_ru"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nomi(ru)</FormLabel>
                        <FormControl>
                          <Input placeholder="Nomi(ru)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TabsContent>
                <TabsContent value="en">
                  <FormField
                    control={form.control}
                    name="name_en"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nomi(en)</FormLabel>
                        <FormControl>
                          <Input placeholder="Nomi(en)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TabsContent>
              </Tabs>
              <Tabs defaultValue="uz">
                <TabsList className="h-12">
                  <TabsTrigger value="uz">Tavsif(uz)</TabsTrigger>
                  <TabsTrigger value="ru">Tavsif(ru)</TabsTrigger>
                  <TabsTrigger value="en">Tavsif(en)</TabsTrigger>
                </TabsList>
                <TabsContent value="uz">
                  <FormField
                    control={form.control}
                    name="description_uz"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tavsif(uz)</FormLabel>
                        <FormControl>
                          <Textarea
                            className="min-h-36 max-h-56"
                            placeholder="Tavsif(uz)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TabsContent>
                <TabsContent value="ru">
                  <FormField
                    control={form.control}
                    name="description_ru"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tavsif(ru)</FormLabel>
                        <FormControl>
                          <Textarea
                            className="min-h-36 max-h-56"
                            placeholder="Tavsif(ru)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TabsContent>
                <TabsContent value="en">
                  <FormField
                    control={form.control}
                    name="description_en"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tavsif(en)</FormLabel>
                        <FormControl>
                          <Textarea
                            className="min-h-36 max-h-56"
                            placeholder="Tavsif(en)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TabsContent>
              </Tabs>
              <div className="grid grid-cols-3 justify-start items-center gap-20">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Narxi</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          inputMode="numeric"
                          placeholder="Narxi"
                          value={formatPrice(field.value)}
                          onChange={(e) => {
                            field.onChange(formatPrice(e.target.value));
                          }}
                          className="no-spinner"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="disCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chegirma bormi?</FormLabel>
                      <FormControl>
                        <Switch
                          id="disCount"
                          checked={disCount}
                          onCheckedChange={(e) => {
                            field.onChange(e);
                            setDisCount(e);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {disCount && (
                  <FormField
                    control={form.control}
                    name="disPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Chegirma narxi</FormLabel>
                        <FormControl>
                          <Input
                            inputMode="numeric"
                            value={formatPrice(field.value || '')}
                            onChange={(e) => {
                              field.onChange(formatPrice(e.target.value));
                            }}
                            placeholder="Chegirma narxi"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
              <div className="grid grid-cols-3 justify-start items-center gap-20">
                <Select value={cat} onValueChange={(value) => setCat(value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Kategoriyani tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="flex flex-col gap-2">
                      <SelectLabel>Kategoriya</SelectLabel>
                      {categories?.data.data.map((e) => (
                        <SelectItem value={String(e.id)} key={e.id}>
                          {e.name}
                        </SelectItem>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setActiveTab('add-category')}
                      >
                        Yangi kategoriya qo`shish
                      </Button>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select
                  value={subCat}
                  onValueChange={(value) => setSubCat(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Kategoriyani tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="flex flex-col gap-2">
                      <SelectLabel>Kategoriya</SelectLabel>
                      {subCategories?.data.data.map((e) => (
                        <SelectItem value={String(e.id)} key={e.id}>
                          {e.name}
                        </SelectItem>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setActiveTab('add-category')}
                      >
                        Yangi kategoriya qo`shish
                      </Button>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Kategoriyani tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="flex flex-col gap-2">
                          <SelectLabel>Kategoriya</SelectLabel>
                          {category?.data.data.map((e) => (
                            <SelectItem value={String(e.id)} key={e.id}>
                              {e.name}
                            </SelectItem>
                          ))}
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setActiveTab('add-category')}
                          >
                            Yangi kategoriya qo`shish
                          </Button>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="brandId"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Brandni tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="flex flex-col gap-2">
                        <SelectLabel>Brand</SelectLabel>
                        {brand?.data.data.map((e) => (
                          <SelectItem value={String(e.id)} key={e.id}>
                            {e.name}
                          </SelectItem>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setActiveTab('add-category')}
                        >
                          Yangi brand qo`shish
                        </Button>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              <FormField
                control={form.control}
                name="banner"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Banner yuklang</FormLabel>
                    <FormControl>
                      <FileDrop
                        multiple
                        accept="image/*"
                        onFilesChange={(files) => field.onChange(files)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="media"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Media fayl yuklang</FormLabel>
                    <FormControl>
                      <FileDrop
                        multiple
                        accept="image/*"
                        onFilesChange={(files) => field.onChange(files)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending}>
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddProduct;
