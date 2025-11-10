import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

interface InteractiveHoverButtonProps {
    children: React.ReactNode;
    className?: string;
    asChild?: boolean;
    href?: string;
    onClick?: () => void;
    target?: string;
    rel?: string;
    icon?: React.ReactNode;
}

export function InteractiveHoverButton({
    children,
    className,
    asChild = false,
    href,
    onClick,
    target,
    rel,
    icon,
    ...props
}: InteractiveHoverButtonProps) {
    const baseClassName = cn(
        'group bg-background border-border text-foreground relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold transition-colors hover:border-foreground/30',
        className
    );

    const content = (
        <>
            <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
                {icon && (
                    <span className="text-foreground inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                        {icon}
                    </span>
                )}
                <span className="text-foreground inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    {children}
                </span>
            </div>
            <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
                {icon && <span>{icon}</span>}
                <span>{children}</span>
                <ArrowRight className="h-4 w-4" />
            </div>
        </>
    );

    if (asChild) {
        return (
            <Slot className={baseClassName} {...props}>
                {content}
            </Slot>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={baseClassName}
                {...props}
            >
                {content}
            </a>
        );
    }

    return (
        <button className={baseClassName} onClick={onClick} {...props}>
            {content}
        </button>
    );
}
