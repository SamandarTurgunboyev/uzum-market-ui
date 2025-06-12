'use client';

import { registerConfirm } from '@/shared/config/api/authApi';
import { otpSchema } from '@/shared/hooks/formik';
import { usePhoneNumber } from '@/shared/hooks/phoneStore';
import { saveAccToken, saveRefToken } from '@/shared/lib/token';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Form, FormField } from '@/shared/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ConfirmPage = () => {
  const { phone } = usePhoneNumber();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (body: z.infer<typeof otpSchema>) => {
      return registerConfirm({ ...body, phone });
    },
    onSuccess: (res) => {
      saveAccToken('uzum-acc', res?.data.access_token);
      saveRefToken('uzum-ref', res?.data.refreshToken);
      router.push('/');
    },
  });

  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
      phone,
    },
  });

  function onSubmit(values: z.infer<typeof otpSchema>) {
    mutate(values);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Tasdiqlash kodini kiriting</CardTitle>
          <CardDescription>
            Telefon nomeringizga kelgan tasdiqlash kodini kiriting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <InputOTP
                    disabled={isPending}
                    maxLength={4}
                    pattern={REGEXP_ONLY_DIGITS}
                    {...field}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-gray-300/40 shadow"
                variant="ghost"
              >
                {isPending ? <Loader className="animate-spin" /> : 'Tasdiqlash'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfirmPage;
