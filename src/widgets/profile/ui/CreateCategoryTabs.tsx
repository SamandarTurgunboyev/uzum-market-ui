import { createCategory } from '@/shared/config/api/categoryApi';
import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { categoryForm } from '../lib/product.validation';

const CreateCategoryTabs = () => {
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof categoryForm>>({
    resolver: zodResolver(categoryForm),
    defaultValues: { name_en: '', name_ru: '', name_uz: '' },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (body: z.infer<typeof categoryForm>) => createCategory(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] });
      toast.success("Kategoriya qo'shildi");
      form.reset();
    },
    onError: (err: AxiosError) => {
      toast.error(err.message || 'Xatolik yuz berdi');
    },
  });

  function onSubmit(values: z.infer<typeof categoryForm>) {
    console.log('Submitting:', values);
    mutate(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <Label>Kategoriya qo`shish</Label>
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
                  <FormControl>
                    <Input
                      placeholder="Nomi(uz)"
                      {...field}
                      value={field.value || ''}
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
              name="name_ru"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Nomi(ru)"
                      {...field}
                      value={field.value || ''}
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
              name="name_en"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Nomi(en)"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>
        </Tabs>
        <Button type="submit" disabled={isPending}>
          {isPending ? <Loader className="animate-spin" /> : 'Qo‘shish'}
        </Button>
      </form>
    </Form>
  );
};

export default CreateCategoryTabs;
