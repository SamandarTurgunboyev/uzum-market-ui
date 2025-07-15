import MyFavorite from '@/widgets/favorites/ui';
import { Suspense } from 'react';

const Favorites = () => {
  return (
    <div className="custom-container">
      <Suspense fallback={<div>Yuklanmoqda...</div>}>
        <MyFavorite />
      </Suspense>
    </div>
  );
};

export default Favorites;
