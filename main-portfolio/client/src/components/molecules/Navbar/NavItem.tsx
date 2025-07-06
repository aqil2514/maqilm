import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export default function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "px-4 py-2 rounded-md transition-colors text-white hover:text-yellow-500 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 ring-offset-1 ring-accent",
            isActive && "text-yellow-500 font-semibold bg-slate-700"
          )}
        >
          {label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
