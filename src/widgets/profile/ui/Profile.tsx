'use client';
import { BASE_URL } from '@/shared/config/api/URLs';
import { userStore } from '@/shared/hooks/userStore';
import { removeAccToken, removeRefToken } from '@/shared/lib/token';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Loader2, Trash, Upload } from 'lucide-react';
import { ApiError } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { UpdatePasswordBodyModels } from '../lib/profileUpdate.models';
import profile_update_request from '../lib/profileUpdate.request';
import {
  NewPasswordForm,
  ProfileUpdateForm,
} from '../lib/profileUpdate.validation';

const Profile = () => {
  const { user, onChangeUser } = userStore((state) => state);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [passError, setPassError] = useState<string>();
  const queryClient = useQueryClient();
  const navigate = useRouter();

  const form = useForm<z.infer<typeof ProfileUpdateForm>>({
    resolver: zodResolver(ProfileUpdateForm),
    defaultValues: {
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
    },
  });

  useEffect(() => {
    if (user) {
      form.setValue('firstName', user.firstName);
      form.setValue('lastName', user.lastName);
    }
  }, [user]);

  const { mutate, isPending } = useMutation({
    mutationFn: (body: FormData) => profile_update_request.updateProfile(body),
    onSuccess: () => {
      toast.success("Profile ma'lumot o'zgatirildi");
    },
    onError: (err: AxiosError<ApiError>) => {
      toast.error(err.message || 'Xatolik yuz berdi');
    },
  });

  function onSubmit(value: z.infer<typeof ProfileUpdateForm>) {
    const formData = new FormData();
    formData.append('firstName', value.firstName);
    formData.append('lastName', value.lastName);
    if (file) {
      formData.append('images', file);
    }
    mutate(formData);
  }

  const passForm = useForm<z.infer<typeof NewPasswordForm>>({
    resolver: zodResolver(NewPasswordForm),
    defaultValues: {
      old_password: '',
      new_password: '',
      password_confirm: '',
    },
  });

  const { mutate: passMutate, isPending: passPending } = useMutation({
    mutationFn: (body: UpdatePasswordBodyModels) =>
      profile_update_request.updatePassword(body),
    onSuccess: (res) => {
      toast.success(res.data.message || "Parolingiz o'zgardi");
      removeAccToken('uzum-acc');
      removeRefToken('uzum-ref');
      onChangeUser(undefined);
      navigate.push('/');

      queryClient.invalidateQueries({ queryKey: ['getMe'] });
    },
    onError: (err: AxiosError<ApiError>) => {
      setPassError(err.response?.data.message || 'Xatolik yuz berdi');
      toast.error(err.response?.data.message || 'Xatolik yuz berdi');
    },
  });

  function passSubmit(values: z.infer<typeof NewPasswordForm>) {
    passMutate(values);
  }

  return (
    <Card className="w-full">
      <CardContent className="w-full flex flex-col gap-10 justify-center items-center py-6">
        <Form {...form}>
          <form className="w-full max-w-2xl flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    src={avatarPreview || BASE_URL + `/${user?.images}`}
                    alt="Avatar"
                  />
                  <AvatarFallback>{user?.firstName.slice(0, 1)}</AvatarFallback>
                </Avatar>
                {avatarPreview ? (
                  <Button
                    className="w-8 h-8 absolute bottom-0 right-0 cursor-pointer"
                    variant={'outline'}
                    onClick={(e) => {
                      e.preventDefault();
                      setAvatarPreview(null);
                    }}
                  >
                    <Trash color="red" />
                  </Button>
                ) : (
                  <div className="w-8 h-8 absolute bottom-0 right-0 cursor-pointer bg-white shadow-md rounded-md">
                    <Label
                      htmlFor="avatar"
                      className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center cursor-pointer"
                    >
                      <Upload className="w-4 h-4" />
                    </Label>
                    <Input
                      id="avatar"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (e.target.files) {
                          setFile(e.target.files[0]);
                        }
                        if (file) {
                          const imageUrl = URL.createObjectURL(file);
                          setAvatarPreview(imageUrl);
                        }
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-semibold">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-muted-foreground text-sm">{user?.roles}</p>
                <p className="text-muted-foreground text-sm">+{user?.phone}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full h-full flex flex-col justify-start">
                      <FormLabel>Ism</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full h-full flex flex-col justify-start">
                      <FormLabel>Familiya</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                name="phone"
                render={() => (
                  <FormItem className="w-full h-full flex flex-col justify-start">
                    <FormLabel>Telefon nomer</FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        placeholder="+998..."
                        value={'+' + user?.phone || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="w-fit"
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={isPending}
                >
                  {isPending ? <Loader2 className="animate-spin" /> : 'Submit'}
                </Button>
              </div>
            </div>
          </form>
        </Form>

        <Form {...passForm}>
          <form
            onSubmit={passForm.handleSubmit(passSubmit)}
            className="w-full max-w-2xl flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={passForm.control}
                name="old_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hozirgi parolingiz</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="••••••••"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={passForm.control}
                  name="new_password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Yangi parol</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="••••••••"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={passForm.control}
                  name="password_confirm"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Parolni qayta kiriting</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="••••••••"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {passError && <FormMessage>{passError}</FormMessage>}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="w-fit"
                  onClick={passForm.handleSubmit(passSubmit)}
                  disabled={passPending}
                >
                  {passPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    'Submit'
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Profile;
