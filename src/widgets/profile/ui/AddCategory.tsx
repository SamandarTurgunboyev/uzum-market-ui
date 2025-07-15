import { Card, CardContent } from '@/shared/ui/card';
import AddBrand from './AddBrand';
import ChildCategory from './ChildCategory';
import CreateCategoryTabs from './CreateCategoryTabs';
import CreateSubCategoryTabs from './CreateSubCategoryTabs';

const AddCategoryDialog = () => {
  return (
    <Card className="w-full">
      <CardContent className="w-full flex flex-col gap-10 justify-center items-center py-6">
        <CreateCategoryTabs />
        <CreateSubCategoryTabs />
        <ChildCategory />
        <AddBrand />
      </CardContent>
    </Card>
  );
};

export default AddCategoryDialog;
