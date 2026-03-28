import * as React from "react";
import * as RadioPrimitive from "@radix-ui/react-radio-group";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const radioVariants = cva("border-2 border-border shrink-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50", {
  variants: {
    variant: {
      default: "",
      outline: "",
      solid: "",
    },
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    shape: {
      circle: "rounded-full",
      diamond: "rotate-45",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "circle",
  },
});

const radioIndicatorVariants = cva("flex", {
  variants: {
    variant: {
      default: "bg-primary border-2 border-border",
      outline: "border-2 border-border",
      solid: "bg-border",
    },
    size: {
      sm: "h-2.5 w-2.5",
      md: "h-3 w-3",
      lg: "h-4 w-4",
    },
    shape: {
      circle: "rounded-full",
      diamond: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "circle",
  },
});

const RadioGroupRoot = React.forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioPrimitive.Root
    ref={ref}
    className={cn("grid gap-2", className)}
    {...props}
  />
));
RadioGroupRoot.displayName = "RadioGroup";

export interface IRadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioPrimitive.Item>,
    VariantProps<typeof radioVariants> {}

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Item>,
  IRadioGroupItemProps
>(({ className, size, variant, shape, children, ...props }, ref) => (
  <RadioPrimitive.Item
    ref={ref}
    className={cn(radioVariants({ size, variant, shape }), className)}
    {...props}
  >
    <RadioPrimitive.Indicator className="flex justify-center items-center">
      <span className={radioIndicatorVariants({ size, variant, shape })} />
    </RadioPrimitive.Indicator>
    {children}
  </RadioPrimitive.Item>
));
RadioGroupItem.displayName = "RadioGroup.Item";

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
});
