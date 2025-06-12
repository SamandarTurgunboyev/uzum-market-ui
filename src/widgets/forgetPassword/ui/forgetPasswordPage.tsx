'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { useState } from 'react';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const ForgetPasswordPage = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <div className="space-y-4 h-screen flex justify-center items-center">
      <Card className="shadow-sm w-96">
        <CardHeader>
          <CardTitle className="text-lg">Forget Password</CardTitle>
          <CardDescription>
            {step === 0
              ? 'Telefon nomerni kiriting'
              : step === 1
                ? 'tasdiqlash kodini kiritng'
                : 'Yangi parolni kiritng'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StepOne setStep={setStep} step={step} />
          {step === 1 && <StepTwo setStep={setStep} step={step} />}
          {step === 2 && <StepThree setStep={setStep} step={step} />}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgetPasswordPage;
