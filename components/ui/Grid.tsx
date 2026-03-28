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

type ColumnCount = 1 | 2 | 3 | 4 | 5 | 6;

const smColsMap: Record<number, string> = {
  1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3",
  4: "sm:grid-cols-4", 5: "sm:grid-cols-5", 6: "sm:grid-cols-6",
};
const mdColsMap: Record<number, string> = {
  1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3",
  4: "md:grid-cols-4", 5: "md:grid-cols-5", 6: "md:grid-cols-6",
};
const lgColsMap: Record<number, string> = {
  1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3",
  4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-6",
};

export interface IGridProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof gridVariants> {
  as?: React.ElementType;
  /** Column count at the `sm` breakpoint (640px+) */
  columnsSm?: ColumnCount;
  /** Column count at the `md` breakpoint (768px+) */
  columnsMd?: ColumnCount;
  /** Column count at the `lg` breakpoint (1024px+) */
  columnsLg?: ColumnCount;
}

export const Grid = React.forwardRef<HTMLElement, IGridProps>(
  (
    {
      children,
      className,
      columns = 1,
      gap = "md",
      columnsSm,
      columnsMd,
      columnsLg,
      as: Comp = "div",
      ...props
    },
    ref,
  ) => {
    return (
      <Comp
        ref={ref}
        className={cn(
          gridVariants({ columns, gap }),
          columnsSm && smColsMap[columnsSm],
          columnsMd && mdColsMap[columnsMd],
          columnsLg && lgColsMap[columnsLg],
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Grid.displayName = "Grid";
