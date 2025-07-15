'use client';
import { userStore } from '@/shared/hooks/userStore';
import { removeAccToken, removeRefToken } from '@/shared/lib/token';
import { Roles } from '@/shared/types/role';
import { Button } from '@/shared/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import WithRole from '@/widgets/withRole/WithRoles';
import { useQueryClient } from '@tanstack/react-query';
import {
  CircleUserRound,
  FunnelPlus,
  LogOut,
  MessageSquare,
  PackageIcon,
  PackagePlus,
  ShoppingBasket,
  ShoppingCart,
  Store,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AddCategoryDialog from './AddCategory';
import AddProduct from './AddProduct';
import CreateSeller from './CreateSeller';
import MyProduct from './MyProduct';
import Profile from './Profile';

const UserProfile = () => {
  const navgiate = useRouter();
  const { onChangeUser } = userStore((state) => state);
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState<string>('account');

  const logout = async () => {
    removeAccToken('uzum-acc');
    removeRefToken('uzum-ref');
    onChangeUser(undefined);
    await queryClient.resetQueries({ queryKey: ['getMe'] });
    navgiate.push('/');
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs
        defaultValue="account"
        className="!flex flex-row w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="flex-col h-full justify-start w-fit gap-2">
          <TabsTrigger
            value="account"
            className="max-h-fit py-4 text-md leading-none w-full flex justify-start"
          >
            <CircleUserRound className="size-5" />
            <p className="max-md:hidden">Account</p>
          </TabsTrigger>
          <WithRole role={[Roles.User]}>
            <TabsTrigger
              value="seller"
              className="max-h-fit py-4 text-md leading-none w-full flex justify-start"
            >
              <Store className="size-5" />
              <p className="max-md:hidden">Sotuvchi bo`lish</p>
            </TabsTrigger>
          </WithRole>
          <WithRole role={[Roles.Seller]}>
            <TabsTrigger
              value="my-product"
              className="max-h-fit py-4 text-md leading-none w-full flex justify-start"
            >
              <PackageIcon className="size-5" />
              <p className="max-md:hidden">Mahsulotlarim</p>
            </TabsTrigger>
          </WithRole>
          <WithRole role={[Roles.Seller]}>
            <TabsTrigger
              value="add-product"
              className="max-h-fit py-4 text-md leading-none w-full flex justify-start"
            >
              <PackagePlus className="size-5" />
              <p className="max-md:hidden">Mahsulot qo`shish</p>
            </TabsTrigger>
          </WithRole>
          <TabsTrigger
            value="comment"
            className="max-h-fit py-4 text-md leading-none w-full flex justify-start"
          >
            <MessageSquare className="size-5" />
            <p className="max-md:hidden">Sharhlarim</p>
          </TabsTrigger>
          <TabsTrigger
            value="ordered"
            className="max-h-fit py-4 text-md leading-none w-full flex justify-start"
          >
            <ShoppingCart className="size-5" />
            <p className="max-md:hidden">Sotib olgan mahlulotlarim</p>
          </TabsTrigger>
          <WithRole role={[Roles.Seller]}>
            <TabsTrigger
              value="by-ordered"
              className="max-h-fit py-4 text-md leading-none w-full flex justify-start"
            >
              <ShoppingBasket className="size-5" />
              <p className="max-md:hidden">Sotib olingan mahlulotlar</p>
            </TabsTrigger>
          </WithRole>
          <WithRole role={[Roles.Seller]}>
            <TabsTrigger
              value="add-category"
              className="max-h-fit py-4 text-md leading-none w-full flex justify-start"
            >
              <FunnelPlus className="size-5" />
              <p className="max-md:hidden">Katgoriya qo`shish</p>
            </TabsTrigger>
          </WithRole>
          <Button
            className="w-full mt-auto flex cursor-pointer"
            variant={'destructive'}
            onClick={logout}
          >
            <LogOut />
            <p>Chiqish</p>
          </Button>
        </TabsList>
        <TabsContent value="account" className="flex-1">
          <Profile />
        </TabsContent>
        <TabsContent value="my-product" className="flex-1">
          <MyProduct />
        </TabsContent>
        <TabsContent value="add-product" className="flex-1">
          <AddProduct setActiveTab={setActiveTab} />
        </TabsContent>
        <TabsContent value="add-category" className="flex-1">
          <AddCategoryDialog />
        </TabsContent>
        <TabsContent value="seller" className="flex-1">
          <CreateSeller />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
