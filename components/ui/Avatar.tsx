import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex h-10 w-10 border-2 overflow-hidden",
  {
    variants: {
      shape: {
        circle: "rounded-full",
        square: "rounded-none",
        rounded: "rounded-lg",
        hexagon:
          "rounded-none border-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]",
        diamond:
          "rounded-none rotate-45 border-2",
        squircle:
          "rounded-none border-0 [clip-path:url(#squircle)]",
        shield:
          "rounded-none border-0 [clip-path:polygon(50%_0%,100%_0%,100%_70%,50%_100%,0%_70%,0%_0%)]",
      },
    },
    defaultVariants: {
      shape: "circle",
    },
  },
);

export type AvatarShape = NonNullable<VariantProps<typeof avatarVariants>["shape"]>;

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, shape = "circle", children, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    data-shape={shape}
    className={cn(avatarVariants({ shape }), className)}
    {...props}
  >
    {shape === "squircle" && (
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="squircle" clipPathUnits="objectBoundingBox">
            <path d="M 0.5 0 C 0.9 0, 1 0.1, 1 0.5 C 1 0.9, 0.9 1, 0.5 1 C 0.1 1, 0 0.9, 0 0.5 C 0 0.1, 0.1 0, 0.5 0" />
          </clipPath>
        </defs>
      </svg>
    )}
    {children}
  </AvatarPrimitive.Root>
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(
      "aspect-square h-full w-full [[data-shape=diamond]>&]:-rotate-45",
      className,
    )}
    {...props}
  />
));
AvatarImage.displayName = "Avatar.Image";

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center bg-primary text-primary-foreground font-head text-sm",
      "[[data-shape=circle]>&]:rounded-full",
      "[[data-shape=rounded]>&]:rounded-lg",
      "[[data-shape=diamond]>&]:-rotate-45",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = "Avatar.Fallback";

const AvatarComponent = Object.assign(Avatar, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

export { AvatarComponent as Avatar, avatarVariants };
