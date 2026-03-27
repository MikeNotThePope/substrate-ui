import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const gridVariants = cva("grid", {
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
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
  },
  defaultVariants: {
    columns: 1,
    gap: "md",
  },
});

export interface IGridProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof gridVariants> {
  as?: React.ElementType;
}

export const Grid = React.forwardRef<HTMLElement, IGridProps>(
  (
    {
      children,
      className,
      columns = 1,
      gap = "md",
      as: Comp = "div",
      ...props
    },
    ref,
  ) => {
    return (
      <Comp
        ref={ref}
        className={cn(gridVariants({ columns, gap }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Grid.displayName = "Grid";
