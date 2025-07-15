'use client';

import { register } from '@/shared/config/api/authApi';
import { getAllCountry } from '@/shared/config/api/countries';
import { registerSchema } from '@/shared/hooks/formik';
import { usePhoneNumber } from '@/shared/hooks/phoneStore';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/shared/ui/command';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  Check,
  ChevronsUpDown,
  Loader,
  LockIcon,
  UnlockIcon,
} from 'lucide-react';
import { ApiError } from 'next/dist/server/api-utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const RegisterForm = () => {
  const { data: country } = useQuery({
    queryKey: ['country'],
    queryFn: getAllCountry,
  });
  const [value, setValue] = useState('');
  const [pass, setPass] = useState<boolean>(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { setPhone } = usePhoneNumber();

  const { mutate, isPending } = useMutation({
    mutationFn: (body: z.infer<typeof registerSchema>) => {
      return register({ ...body });
    },
    onSuccess: () => {
      const fullPhoneNumber = `${value}${form.getValues().phone}`;
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
      phone: value + values.phone,
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
                  <Label>Telefon raqami</Label>
                  <FormControl>
                    <div className="flex gap-2">
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[100px] justify-between"
                          >
                            {value ? (
                              <>
                                <Image
                                  src={`https://flagcdn.com/16x12/${country?.data.find((framework) => framework.phonecode === value)?.isoCode.toLowerCase()}.png`}
                                  width={12}
                                  height={15}
                                  alt={'coutry'}
                                />
                                {
                                  country?.data.find(
                                    (framework) =>
                                      framework.phonecode === value,
                                  )?.phonecode
                                }
                              </>
                            ) : (
                              'Code'
                            )}
                            <ChevronsUpDown className="opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] h-[250px] p-0">
                          <Command>
                            <CommandInput
                              placeholder="Search Code..."
                              className="h-9"
                            />
                            <CommandList>
                              <CommandEmpty>No Code found.</CommandEmpty>
                              <CommandGroup>
                                {country?.data.map((framework) => (
                                  <CommandItem
                                    key={framework.phonecode}
                                    value={framework.phonecode}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ''
                                          : currentValue,
                                      );
                                      setOpen(false);
                                    }}
                                  >
                                    <Image
                                      src={`https://flagcdn.com/16x12/${framework.isoCode.toLowerCase()}.png`}
                                      alt={framework.name}
                                      width={12}
                                      height={16}
                                    />
                                    {framework.phonecode}
                                    <Check
                                      className={cn(
                                        'ml-auto',
                                        value === framework.phonecode
                                          ? 'opacity-100'
                                          : 'opacity-0',
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
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
                    <div className="relative">
                      <Input
                        type={pass ? 'text' : 'password'}
                        placeholder="Parol"
                        {...field}
                        disabled={isPending}
                      />
                      <Button
                        type="button"
                        className="absolute right-0 bottom-0 hover:bg-none"
                        variant={'ghost'}
                        onClick={() => setPass((prev) => !prev)}
                      >
                        {pass ? <UnlockIcon /> : <LockIcon />}
                      </Button>
                    </div>
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
