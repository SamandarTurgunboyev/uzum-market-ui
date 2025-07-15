import { z } from 'zod';

export const productForm = z
  .object({
    name_uz: z
      .string()
      .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
    name_ru: z
      .string()
      .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
    name_en: z
      .string()
      .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
    description_uz: z
      .string()
      .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
    description_en: z
      .string()
      .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
    description_ru: z
      .string()
      .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
    price: z
      .string()
      .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
    categoryId: z.string(),
    brandId: z.string(),
    disCount: z.boolean(),
    disPrice: z.union([z.string().min(3), z.literal('')]).optional(),
    banner: z.array(z.instanceof(File)),
    media: z.array(z.instanceof(File)),
  })
  .superRefine((data, ctx) => {
    if (data.disCount && (!data.disPrice || data.disPrice.trim() === '')) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['disPrice'],
        message: 'Chegirma narxi shart, chunki chegirma mavjud',
      });
    }
  });

export const categoryForm = z.object({
  name_uz: z
    .string({ required_error: 'Majburiy maydon' })
    .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
  name_ru: z
    .string({ required_error: 'Majburiy maydon' })
    .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
  name_en: z
    .string({ required_error: 'Majburiy maydon' })
    .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
});

export const subCategoryForm = z.object({
  name_uz: z
    .string({ required_error: 'Majburiy maydon' })
    .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
  name_ru: z
    .string({ required_error: 'Majburiy maydon' })
    .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
  name_en: z
    .string({ required_error: 'Majburiy maydon' })
    .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
  id: z.string({ required_error: 'Majburiy maydon' }),
});

export const brandForm = z.object({
  name: z
    .string({ required_error: 'Majburiy maydon' })
    .min(3, { message: "Eng kamida 3ta belgi bo'lishi kerak" }),
});
