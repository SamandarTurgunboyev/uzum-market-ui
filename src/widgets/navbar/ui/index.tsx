import { Accordion } from '@/shared/ui/accordion';
import { Button } from '@/shared/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/shared/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';
import { Menu } from 'lucide-react';
import { menu } from '../lib/data';
import { PRODUCT_INFO } from '@/shared/constants/data';
import RenderMenuItem from './RenderItem';
import RenderMobileMenuItem from './RenderMobileMenuItem';
import { ChangeLang } from './ChangeLang';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const auth = {
    login: { title: 'Login', url: '/auth' },
  };

  return (
    <section className="py-4">
      <div className="custom-container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link
              href={'/'}
              className="flex items-center gap-2 w-full h-20 aspect-[3/2]"
            >
              <Image
                src={PRODUCT_INFO.logo}
                width={100}
                height={100}
                className="w-full"
                alt={PRODUCT_INFO.name}
              />
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => RenderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <ChangeLang />
            <Link href={auth.login.url}>
              <Button variant="outline">{auth.login.title}</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={'/'} className="flex items-center gap-2 h-14">
              <Image
                width={100}
                height={100}
                src={PRODUCT_INFO.logo}
                className="w-auto h-auto"
                alt={PRODUCT_INFO.name}
              />
            </Link>
            <Sheet>
              <div className="space-x-2">
                <ChangeLang />
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
              </div>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={'/'} className="flex items-center gap-2">
                      <Image
                        src={PRODUCT_INFO.logo}
                        className="max-h-16"
                        width={100}
                        height={100}
                        alt={PRODUCT_INFO.name}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => RenderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link href={auth.login.url}>{auth.login.title}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
