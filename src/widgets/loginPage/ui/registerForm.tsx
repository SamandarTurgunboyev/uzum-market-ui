'use client';

import { register } from '@/shared/config/api/authApi';
import { registerSchema } from '@/shared/hooks/formik';
import { usePhoneNumber } from '@/shared/hooks/phoneStore';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Loader } from 'lucide-react';
import { ApiError } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const RegisterForm = () => {
  const [phoneCode, setPhoneCode] = useState<string>('998');
  const router = useRouter();
  const { setPhone } = usePhoneNumber();

  const { mutate, isPending } = useMutation({
    mutationFn: (body: z.infer<typeof registerSchema>) => {
      return register({ ...body });
    },
    onSuccess: () => {
      const fullPhoneNumber = `${phoneCode}${form.getValues().phone}`;
      setPhone(fullPhoneNumber);
      toast.success("Ro'yxatdan o'tish muvaffaqiyatli!");
      router.push('/auth/confirm');
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data?.message || 'Xatolik yuz berdi'); // 🔥 Error toast
    },
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      phone: '',
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      password: values.password,
      phone: `${phoneCode}${values.phone}`,
    };
    mutate(payload);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hisobga kirish</CardTitle>
        <CardDescription>
          {"Ma'lumotlarni to'ldiring va ro'yxatdan o'ting!"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <Label>Ismingizni kiriting</Label>
                  <FormControl>
                    <Input placeholder="Ism" {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName" // Fixed: Changed from "firstName" to "lastName"
              render={({ field }) => (
                <FormItem>
                  <Label>Familiyangizni kiriting</Label>
                  <FormControl>
                    <Input
                      placeholder="Familiya"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <Label>Aloqa uchun telefon raqami</Label>
                  <FormControl>
                    <div className="flex gap-2">
                      <Select
                        onValueChange={setPhoneCode}
                        defaultValue="998"
                        disabled={isPending}
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
                      <Input
                        placeholder="Telefon raqami"
                        {...field}
                        disabled={isPending}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password" // Added: Password field
              render={({ field }) => (
                <FormItem>
                  <Label>Parol</Label>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Parol"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-gray-300/40 shadow"
              variant="ghost"
              disabled={isPending}
            >
              {isPending ? <Loader className="animate-spin" /> : 'Davom etish'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
