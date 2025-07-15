import { authForgetConfirm } from '@/shared/config/api/authApi';
import { useAuthStore } from '@/shared/hooks/authStore';
import { usePhoneNumber } from '@/shared/hooks/phoneStore';
import { Button } from '@/shared/ui/button';
import { Form, FormField } from '@/shared/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { forgetOtpValidations } from '../lib/validation';

interface Props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const StepTwo = ({ setStep, step }: Props) => {
  const { setTokens } = useAuthStore();
  const { phone } = usePhoneNumber();
  const { mutate, isPending } = useMutation({
    mutationFn: (body: z.infer<typeof forgetOtpValidations>) => {
      return authForgetConfirm({ ...body, phone });
    },
    onSuccess: (res) => {
      if (res.data.refreshToken && res.data.refreshToken) {
        setTokens({ access: res.data.accessToken });
      }
      setStep(step + 1);
      toast.success('Tasdiqlash kodi qabul qilindi');
    },
    onError: () => {
      toast.error('Xatolik yuz berdi');
    },
  });

  const form = useForm<z.infer<typeof forgetOtpValidations>>({
    resolver: zodResolver(forgetOtpValidations),
    defaultValues: {
      otp: '',
      phone,
    },
  });

  function onSubmit(values: z.infer<typeof forgetOtpValidations>) {
    mutate(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-4">
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
          <div className="flex justify-between">
            <Button
              type="button"
              className="font-medium"
              size="sm"
              onClick={() => setStep(step - 1)}
              disabled={step === 0 || isPending}
            >
              Back
            </Button>
            <Button
              type="submit"
              size="sm"
              className="font-medium"
              disabled={isPending}
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default StepTwo;
