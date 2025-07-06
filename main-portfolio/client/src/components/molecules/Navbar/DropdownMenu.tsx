import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, usePathname } from "@/i18n/routing";
import { professions } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function DropdownMenu({
  baseHref,
  label,
  locale,
}: {
  baseHref: string;
  label: string;
  locale: "id" | "en";
}) {
  const pathname = usePathname();

  const isActive =
    pathname === baseHref || pathname.startsWith(`${baseHref}/`);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "bg-transparent px-4 py-2 rounded-md transition-colors",
          isActive && "text-yellow-500 font-semibold bg-slate-700"
        )}
      >
        <NavigationMenuLink
          asChild
          className={cn(
            "bg-transparent text-white transition-colors hover:text-yellow-500",
            isActive && "text-yellow-500"
          )}
        >
          <Link href={baseHref}>{label}</Link>
        </NavigationMenuLink>
      </NavigationMenuTrigger>

      <NavigationMenuContent className="bg-gray-800/90 backdrop-blur rounded-md shadow-lg p-2 text-white">
        <ul className="grid w-[220px] gap-1">
          {professions
            .filter((prof) => prof.fieldid !== "unselected")
            .map((prof) => {
              const href = `${baseHref}/${prof.fieldid}`;
              const isLinkActive = pathname === href;

              return (
                <li key={prof.fieldid}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={href}
                      className={cn(
                        "block px-3 py-2 rounded-md transition-colors text-sm hover:bg-slate-700 hover:text-yellow-500 focus:outline-none focus-visible:ring-2 ring-offset-1 ring-accent",
                        isLinkActive &&
                          "bg-slate-700 text-yellow-500 font-medium"
                      )}
                    >
                      {locale === "en" ? prof.enLabel : prof.idLabel}
                    </Link>
                  </NavigationMenuLink>
                </li>
              );
            })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
