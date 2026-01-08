import * as React from "react"

import { cn } from "@/lib/utils"

type CardProps = React.ComponentProps<'div'> & { tone?: 'purple' | 'blue' | 'neutral' }

function Card({ className, tone = 'purple', ...props }: CardProps) {
  const toneClass = tone === 'purple'
    ? 'card-tone-purple bg-gradient-to-br from-[hsl(var(--brand-purple)/0.12)] to-transparent'
    : tone === 'blue'
      ? 'card-tone-blue bg-gradient-to-br from-[hsl(var(--brand-blue)/0.12)] to-transparent'
      : 'bg-white text-[var(--brand-blue)]';

  return (
    <div
      data-slot="card"
      className={cn(
        `text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm ${toneClass}`,
        className
      )}
      {...props}
    />
  )
} 

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
