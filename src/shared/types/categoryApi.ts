export interface CategoryResModels {
  data: [
    {
      id: number;
      name: string;
      slug: string;
      createdAt: string;
      updateAt: string;
    },
  ];
}

export interface SubCategoryResModels {
  data: [
    {
      id: number;
      name: string;
      slug: string;
      createdAt: string;
      updateAt: string;
      subSubCategories: {
        id: number;
        name: string;
        slug: string;
        createdAt: string;
        updateAt: string;
      }[];
    },
  ];
}

export interface OneSubCategoryResModels {
  id: number;
  name: string;
  subCategory: {
    id: number;
    name: string;
    slug: string;
    createdAt: string;
    updateAt: string;
  };
  slug: string;
  createdAt: string;
  updateAt: string;
}

export interface BrandResModel {
  data: [
    {
      id: number;
      name: string;
    },
  ];
}
