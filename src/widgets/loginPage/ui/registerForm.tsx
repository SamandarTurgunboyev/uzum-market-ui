'use client';

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
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const RegisterForm = () => {
  const [phoneCode, setPhoneCode] = useState<string>('998');
  const router = useRouter();
  const { setPhone } = usePhoneNumber();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      phoneNumber: '',
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    const fullPhoneNumber = `+${phoneCode}${values.phoneNumber}`;
    setPhone(fullPhoneNumber);
    router.push('/auth/confirm');
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
                    <Input placeholder="Ism" {...field} />
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
                    <Input placeholder="Familiya" {...field} />
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
                      <Select onValueChange={setPhoneCode} defaultValue="998">
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
              name="password" // Added: Password field
              render={({ field }) => (
                <FormItem>
                  <Label>Parol</Label>
                  <FormControl>
                    <Input type="password" placeholder="Parol" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-gray-300/40 shadow"
              variant="ghost"
            >
              Davom etish
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
