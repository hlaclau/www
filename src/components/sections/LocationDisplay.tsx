import * as React from 'react';
import { MapPin } from 'lucide-react';

interface LocationDisplayProps {
  location: string;
}

export function LocationDisplay({ location }: LocationDisplayProps) {
  return (
    <p className="text-muted-foreground text-sm md:text-base flex items-center justify-center gap-2">
      <MapPin className="h-4 w-4 text-primary" />
      {location}
    </p>
  );
}

