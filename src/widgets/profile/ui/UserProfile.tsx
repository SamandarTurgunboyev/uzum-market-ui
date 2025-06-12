'use client';
import { Roles } from '@/shared/types/role';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import WithRole from '@/widgets/withRole/WithRoles';

const UserProfile = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="account" className="!flex flex-row w-full">
        <TabsList className="flex-col h-full justify-start w-40 gap-2">
          <TabsTrigger
            value="account"
            className="max-h-fit px-4 py-2 text-md leading-none w-full p-4"
          >
            Account
          </TabsTrigger>
          <WithRole role={[Roles.Seller]}>
            <TabsTrigger
              value="password"
              className="max-h-fit px-4 py-2 text-md leading-none w-full p-4"
            >
              Password
            </TabsTrigger>
          </WithRole>
        </TabsList>
        <TabsContent value="account" className="w-full  ">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
