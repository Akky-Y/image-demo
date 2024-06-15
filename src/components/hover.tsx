"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";

export default function Hover({
  title,
  description,
}: { title: string; description: string }) {
  return (
    <HoverCard>
      <HoverCardTrigger>{title}</HoverCardTrigger>
      <HoverCardContent className="w-80 border rounded-xl bg-primary">
        <div className="flex justify-between space-x-4 m-4">
          <p className="text-sm text-primary-foreground">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
