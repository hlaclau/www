import * as React from 'react';
import { ArrowRight } from 'lucide-react';

interface ActionButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function ActionButton({ href, children, variant = 'primary' }: ActionButtonProps) {
  if (variant === 'primary') {
    return (
      <a
        href={href}
        className="group inline-flex items-center gap-2 border border-foreground/20 bg-foreground/5 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10 hover:border-foreground/30"
      >
        {children}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 border border-foreground/10 bg-transparent px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground hover:border-foreground/20"
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

