import CategoriesCard from '@/features/categories/CategoriesCard';
import React from 'react';
import { CategoryData } from '../lib/data';
import CategoriesCardMobile from '@/features/categories/CategoriesCardMobile';

const Categories = () => {
  return (
    <div>
      <CategoriesCard data={CategoryData} />
      <CategoriesCardMobile data={CategoryData} />
    </div>
  );
};

export default Categories;
