import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const alertVariants = cva(
  "relative w-full border-2 border-border p-4",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        solid: "bg-secondary text-secondary-foreground",
      },
      status: {
        error: "bg-error text-error-foreground border-error-foreground",
        success: "bg-success text-success-foreground border-success-foreground",
        warning: "bg-warning text-warning-foreground border-warning-foreground",
        info: "bg-info text-info-foreground border-info-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface IAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const AlertRoot = React.forwardRef<HTMLDivElement, IAlertProps>(
  ({ className, variant, status, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant, status }), className)}
      {...props}
    />
  ),
);
AlertRoot.displayName = "Alert";

interface IAlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const AlertTitle = React.forwardRef<HTMLHeadingElement, IAlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("font-head text-base mb-1", className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = "Alert.Title";

interface IAlertDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  IAlertDescriptionProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-sans text-sm", className)}
    {...props}
  />
));
AlertDescription.displayName = "Alert.Description";

const AlertComponent = Object.assign(AlertRoot, {
  Title: AlertTitle,
  Description: AlertDescription,
});

export { AlertComponent as Alert };
