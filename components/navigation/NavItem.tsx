'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@/lib/navigation';
import { cn } from '@/lib/utils';

interface NavItemProps {
  href: string;
  label: string;
}

export function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "text-primary" : "text-muted-foreground hover:text-primary",
        "after:absolute after:bottom-0 after:left-0 after:right-0",
        "after:h-[2px] after:bg-primary",
        isActive 
          ? "after:opacity-100" 
          : "after:opacity-0 hover:after:opacity-100",
        "after:transition-opacity after:duration-200"
      )}
    >
      {label}
    </Link>
  );
}