import { LanguageRoutes } from '@/shared/config/i18n/types';
import { Heart, Logs, Percent, ShoppingBag, ShoppingCart } from 'lucide-react';
import { MenuItem } from './model';

const menu: MenuItem[] = [
  { title: 'Bosh sahifa', url: '/' },
  {
    title: 'Mahsulotlar',
    url: 'products',
    items: [
      {
        title: 'Katta chegirmalar',
        description: 'Eng katta chegirmadagi mahsulotat',
        icon: ShoppingBag,
        url: '/big-discount',
      },
      {
        title: 'Oy mahsuloti',
        description: 'Shu oydagi mahsulotlar',
        icon: ShoppingBag,
        url: '/monthly',
      },
      {
        title: 'Chegirmalar',
        description: 'Chegirma narxidagi mahsulotlar',
        icon: Percent,
        url: '/discount',
      },
      {
        title: 'Kategoriyalar',
        description: "Mahsulot bo'yicha kategoriyalar",
        icon: Logs,
        url: '/category',
      },
    ],
  },
  {
    title: 'Tanlangan mahsulotlarim',
    url: 'select-product',
    items: [
      {
        title: 'Yoqtirilgan mahsulotlar',
        description: 'Sizga yoqqan mahsulotlar',
        icon: Heart,
        url: '/favorites',
      },
      {
        title: 'Savatdagi mahsulotlar',
        description: 'Siz savtga joylagan mahsulotlar',
        icon: ShoppingCart,
        url: '/saved-products',
      },
      // {
      //   title: 'Sharhlar',
      //   description: 'Siz yozgan sharhlar',
      //   icon: MessagesSquare,
      //   url: 'comments',
      // },
    ],
  },
];

const languages: { name: string; key: LanguageRoutes }[] = [
  {
    name: "O'zbekcha",
    key: LanguageRoutes.UZ,
  },
  {
    name: 'Russian',
    key: LanguageRoutes.RU,
  },
  {
    name: 'English',
    key: LanguageRoutes.EN,
  },
];

export { languages, menu };
