import { Heart, Logs, Percent, ShoppingBag, ShoppingCart } from 'lucide-react';
import { MenuItem } from './model';
import { LanguageRoutes } from '@/shared/config/i18n/types';

const menu: MenuItem[] = [
  { title: 'Bosh sahifa', url: '/' },
  {
    title: 'Mahsulotlar',
    url: 'products',
    items: [
      {
        title: "Eng ko'p sotilgan",
        description: "Oy davomida eng ko'p sotilgan mahsulotlar",
        icon: ShoppingBag,
        url: "/products/Eng ko'p sotilgan",
      },
      {
        title: 'Ommabop',
        description: "Ommabop mahsulotlar ro'yxati",
        icon: ShoppingBag,
        url: '/products/Ommabop',
      },
      {
        title: 'Chegirmalar',
        description: 'Chegirma narxidagi mahsulotlar',
        icon: Percent,
        url: '/products/Chegirmalar',
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
    name: 'Ўзбекча',
    key: LanguageRoutes.KI,
  },
  {
    name: 'Русский',
    key: LanguageRoutes.RU,
  },
];

export { menu, languages };
