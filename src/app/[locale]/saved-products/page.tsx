import Formalization from '@/widgets/saved/ui/formalization';
import Saved from '@/widgets/saved/ui/saved';
import React from 'react';

const SavedProducts = () => {
  return (
    <div className="custom-container h-full flex gap-4 max-md:flex-col">
      <Saved />
      <Formalization />
    </div>
  );
};

export default SavedProducts;
