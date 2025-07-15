import { z } from 'zod';

export const ProfileUpdateForm = z.object({
  firstName: z
    .string({ required_error: 'Majburiy maydon' })
    .min(3, { message: 'Eng kamida 3ta belgi' }),
  lastName: z
    .string({ required_error: 'Majburiy maydon' })
    .min(3, { message: 'Eng kamida 3ta belgi' }),
});

export const NewPasswordForm = z.object({
  old_password: z
    .string({ required_error: 'Majburiy maydon' })
    .min(8, { message: 'Eng kamida 8ta belgi' }),
  new_password: z
    .string({ required_error: 'Majburiy maydon' })
    .min(8, { message: 'Eng kamida 8ta belgi' }),
  password_confirm: z
    .string({ required_error: 'Majburiy maydon' })
    .min(8, { message: 'Eng kamida 8ta belgi' }),
});
