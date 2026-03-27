import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const stackVariants = cva("flex", {
  variants: {
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-12",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    direction: "vertical",
    gap: "md",
  },
});

export interface IStackProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof stackVariants> {
  as?: React.ElementType;
}

export const Stack = React.forwardRef<HTMLElement, IStackProps>(
  (
    {
      children,
      className,
      direction = "vertical",
      gap = "md",
      align,
      justify,
      as: Comp = "div",
      ...props
    },
    ref,
  ) => {
    return (
      <Comp
        ref={ref}
        className={cn(stackVariants({ direction, gap, align, justify }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Stack.displayName = "Stack";
