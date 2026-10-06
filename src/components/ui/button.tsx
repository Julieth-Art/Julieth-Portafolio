import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-ui text-[1rem] transition-[transform,background-color,box-shadow,color] duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        solid:
          "bg-accent text-card shadow-soft hover:brightness-110",
        outline:
          "border border-accent bg-card/70 text-ink hover:bg-card",
        ghost: "text-ink hover:bg-card/70",
        pill: "border border-cream/80 bg-cream/20 text-cream backdrop-blur-sm hover:bg-cream/35",
      },
      size: {
        md: "h-11 rounded-pill px-5",
        sm: "h-9 rounded-pill px-3.5 text-sm",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
