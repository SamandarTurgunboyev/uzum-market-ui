import { z } from 'zod';

export const storeForm = z.object({
  store_name: z.string({ required_error: 'Majburiy maydon' }),
  address: z.string({ required_error: 'Majburiy maydon' }),
  banner: z.array(z.instanceof(File)),
  latitude: z.string({ required_error: 'Majburiy maydon' }),
  longitude: z.string({ required_error: 'Majburiy maydon' }),
});
