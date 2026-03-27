import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      column: "flex-col",
      "column-reverse": "flex-col-reverse",
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
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
    direction: "row",
    gap: "md",
  },
});

export interface IFlexProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof flexVariants> {
  as?: React.ElementType;
}

export const Flex = React.forwardRef<HTMLElement, IFlexProps>(
  (
    {
      children,
      className,
      direction = "row",
      wrap,
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
        className={cn(
          flexVariants({ direction, wrap, gap, align, justify }),
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Flex.displayName = "Flex";
