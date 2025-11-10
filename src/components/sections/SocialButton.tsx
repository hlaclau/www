import * as React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

export function LinkedInButton({ href }: { href: string }) {
  return (
    <InteractiveHoverButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      icon={<Linkedin className="h-4 w-4" />}
    >
      LinkedIn
    </InteractiveHoverButton>
  );
}

export function GitHubButton({ href }: { href: string }) {
  return (
    <InteractiveHoverButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      icon={<Github className="h-4 w-4" />}
    >
      GitHub
    </InteractiveHoverButton>
  );
}

