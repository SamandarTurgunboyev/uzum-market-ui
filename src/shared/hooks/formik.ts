'use client';

import { z } from 'zod';

export const formSchema = z.object({
  phoneNumber: z.string().min(2),
  userName: z.string().min(3),
  longtitude: z.string(),
  latitude: z.string(),
  address: z.string().min(10),
  paymentMethod: z.string(),
});

export const registerSchema = z.object({
  phoneNumber: z.string().min(2),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  password: z
    .string()
    .min(8, {
      message: "Parol kamida 8 ta belgidan iborat bo'lishi kerak",
    })
})

export const loginSchema = z.object({
  phoneNumber: z.string().min(2),
  password: z
    .string()
    .min(8, {
      message: "Parol kamida 8 ta belgidan iborat bo'lishi kerak",
    })
})

export const otpSchema = z.object({
  phoneNumber: z.string().min(2),
  otp: z
    .string()
    .min(4, {
      message: "Parol kamida 4 ta belgidan iborat bo'lishi kerak",
    })
})