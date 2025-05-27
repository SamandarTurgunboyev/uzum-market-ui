import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/shared/ui/navigation-menu';
import { MenuItem } from '../lib/model';
import SubMenuLink from './SubMenuLink';

const RenderMenuItem = (item: MenuItem) => {
  // const t = useTranslations("")

  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>
          <p>{item.title}</p>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          <div className='w-80'>
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title} className="w-80">
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.url}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
        <div className="text-foreground">
          {item.icon && <item.icon className="size-5 shrink-0" />}
        </div>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default RenderMenuItem;
