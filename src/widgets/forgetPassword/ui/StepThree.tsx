import { authForgetNewPassword } from '@/shared/config/api/authApi';
import { useAuthStore } from '@/shared/hooks/authStore';
import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { newPasswordValidation } from '../lib/validation';

interface Props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const StepThree = ({ setStep, step }: Props) => {
  const { accessToken } = useAuthStore();
  const form = useForm<z.infer<typeof newPasswordValidation>>({
    resolver: zodResolver(newPasswordValidation),
    defaultValues: {
      new_password: '',
      new_password_confirm: '',
    },
  });

  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async (body: z.infer<typeof newPasswordValidation>) => {
      if (!accessToken) {
        throw new Error('Access token topilmadi');
      }
      return authForgetNewPassword({ ...body, token: accessToken });
    },
    onSuccess: () => {
      router.push('/auth/');
      toast.success('Parolingiz yangilandi');
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.message || 'Xatolik yuz berdi');
    },
  });

  function onSubmit(values: z.infer<typeof newPasswordValidation>) {
    mutate(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-4">
          <FormField
            control={form.control}
            name="new_password"
            render={({ field }) => (
              <FormItem>
                <Label>Yangi parol kiriting</Label>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="Yangi parol"
                    disabled={isPending}
                  />
                </FormControl>
                {form.formState.errors.new_password && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.new_password.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="new_password_confirm"
            render={({ field }) => (
              <FormItem>
                <Label>Yangi parol qayta kiriting</Label>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="Yangi parol qayta kiriting"
                    disabled={isPending}
                  />
                </FormControl>
                {form.formState.errors.new_password_confirm && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.new_password_confirm.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button
              type="button"
              className="font-medium"
              size="sm"
              onClick={() => setStep(step - 1)}
              disabled={isPending}
            >
              Back
            </Button>
            <Button
              type="submit"
              size="sm"
              className="font-medium"
              disabled={isPending}
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default StepThree;
