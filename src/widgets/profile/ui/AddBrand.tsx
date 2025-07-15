import { createBrand } from '@/shared/config/api/categoryApi';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { brandForm } from '../lib/product.validation';

const AddBrand = () => {
  const form = useForm<z.infer<typeof brandForm>>({
    resolver: zodResolver(brandForm),
    defaultValues: {
      name: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (body: z.infer<typeof brandForm>) => createBrand(body),
    onSuccess: () => {
      toast.success("Brand qo'shildi");
      form.reset();
    },
    onError: (err: AxiosError) => {
      toast.error(err.message || 'Xatolik yuz berdi');
    },
  });

  function onSubmit(values: z.infer<typeof brandForm>) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <Label>Brand qo`shish</Label>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Nomi"
                  {...field}
                  value={field.value || ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? <Loader className="animate-spin" /> : 'Qo‘shish'}
        </Button>
      </form>
    </Form>
  );
};

export default AddBrand;
