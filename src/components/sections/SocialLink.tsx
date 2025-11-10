import * as React from 'react';
import { Linkedin, Github, ExternalLink } from 'lucide-react';

export function LinkedInLink({
    href,
    variant = 'primary',
}: {
    href: string;
    variant?: 'primary' | 'secondary';
}) {
    if (variant === 'primary') {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-foreground/20 bg-foreground/5 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10 hover:border-foreground/30"
            >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-foreground/10 bg-transparent px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground hover:border-foreground/20"
        >
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>
    );
}

export function GitHubLink({
    href,
    variant = 'secondary',
}: {
    href: string;
    variant?: 'primary' | 'secondary';
}) {
    if (variant === 'primary') {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-foreground/20 bg-foreground/5 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10 hover:border-foreground/30"
            >
                <Github className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-foreground/10 bg-transparent px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground hover:border-foreground/20"
        >
            <Github className="h-4 w-4" />
            GitHub
            <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>
    );
}
