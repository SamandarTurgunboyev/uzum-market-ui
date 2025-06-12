import { z } from 'zod';

export const forgetPasswordValidations = z.object({
  phone: z.string({ required_error: 'majburiy maydon' }),
});

export const forgetOtpValidations = z.object({
  phone: z.string({ required_error: 'Majburiy maydon' }),
  otp: z.string({ required_error: 'Majburiy maydon' }),
});

export const newPasswordValidation = z
  .object({
    new_password: z.string().min(6, "Parol kamida 6 belgi bo'lishi kerak"),
    new_password_confirm: z
      .string()
      .min(6, "Parol tasdiqlash kamida 6 belgi bo'lishi kerak"),
  })
  .refine((data) => data.new_password === data.new_password_confirm, {
    message: 'Parollar mos kelmaydi',
    path: ['new_password_confirm'],
  });
