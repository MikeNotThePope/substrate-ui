import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const containerVariants = cva("mx-auto px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      sm: "max-w-2xl",
      md: "max-w-4xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export interface IContainerProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLElement, IContainerProps>(
  (
    {
      children,
      className,
      size = "lg",
      as: Comp = "div",
      ...props
    },
    ref,
  ) => {
    return (
      <Comp
        ref={ref}
        className={cn(containerVariants({ size }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Container.displayName = "Container";
