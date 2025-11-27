import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SITE } from '@/constants/site';
import { TypingAnimation } from '@/components/ui/typing-animation';

interface NavItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

interface VerticalNavProps {
    items: NavItem[];
    className?: string;
}

const VerticalNav = React.forwardRef<HTMLElement, VerticalNavProps>(
    ({ items, className, ...props }, ref) => {
        const [currentPath, setCurrentPath] = React.useState('');

        React.useEffect(() => {
            setCurrentPath(window.location.pathname);
        }, []);

        return (
            <nav
                ref={ref}
                className={cn('bg-sidebar flex h-full flex-col', className)}
                {...props}
            >
                {/* Logo/Name Section */}
                <div className="p-6 pb-4">
                    <div className="h-8">
                        <TypingAnimation className="text-sidebar-foreground text-2xl font-bold">
                            {SITE.username}
                        </TypingAnimation>
                    </div>
                </div>

                {/* Navigation Items */}
                <div className="flex flex-1 flex-col px-4">
                    {items.map((item, index) => {
                        const isActive =
                            currentPath === item.href ||
                            (item.href === '/' && currentPath === '/');

                        return (
                            <Button
                                key={index}
                                variant="ghost"
                                className={cn(
                                    'mb-1 h-auto justify-start p-3 text-left transition-all duration-200',
                                    isActive
                                        ? 'bg-sidebar-foreground/10 text-sidebar-foreground border-sidebar-foreground/30 border-l-2 font-medium'
                                        : 'text-sidebar-foreground hover:bg-sidebar-foreground/5 hover:text-sidebar-foreground'
                                )}
                                asChild
                            >
                                <a
                                    href={item.href}
                                    className="flex w-full items-center space-x-3"
                                >
                                    {item.icon && (
                                        <span
                                            className={cn(
                                                'text-sm',
                                                isActive
                                                    ? 'text-sidebar-foreground'
                                                    : 'text-sidebar-foreground/70'
                                            )}
                                        >
                                            {item.icon}
                                        </span>
                                    )}
                                    <span className="font-medium">
                                        {item.label}
                                    </span>
                                    {isActive && (
                                        <div className="bg-sidebar-foreground/60 ml-auto h-1.5 w-1.5 rounded-full"></div>
                                    )}
                                </a>
                            </Button>
                        );
                    })}
                </div>

                {/* Status Indicator */}
                <div className="px-6 py-4">
                    <div className="text-sidebar-foreground/60 flex items-center gap-2 text-xs">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                        <span>Status : 200 OK</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-sidebar-border border-t px-6 py-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-sidebar-foreground/60">
                        <span>Made with</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-red-500"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>by {SITE.username}</span>
                    </div>
                    <div className="text-xs text-sidebar-foreground/50">
                        <span>Built with Astro & Bun</span>
                    </div>
                </div>
            </nav>
        );
    }
);

VerticalNav.displayName = 'VerticalNav';

export { VerticalNav, type NavItem };
