// Core UI components
export {
  Button,
  buttonVariants,
  Badge,
  badgeVariants,
  Card,
  cardVariants,
  Menu,
  Drawer,
  Avatar,
  avatarVariants,
  Tabs,
  Label,
  Input,
  Textarea,
  Checkbox,
  RadioGroup,
  Select,
  Switch,
  Slider,
  Text,
  FormLayout,
  Link,
  linkVariants,
  Alert,
  alertVariants,
  IconButton,
  iconButtonVariants,
  Loader,
  loaderVariants,
  Dialog,
  dialogContentVariants,
  Divider,
  dividerVariants,
  Stack,
  stackVariants,
  Flex,
  flexVariants,
  Grid,
  gridVariants,
  Container,
  containerVariants,
  // New primitives
  Accordion,
  ScrollArea,
  Skeleton,
  Progress,
  Tooltip,
  Collapsible,
  HoverCard,
  Popover,
  ContextMenu,
  DropdownMenu,
  Table,
  Menubar,
  NavigationMenu,
  navigationMenuTriggerStyle,
  Resizable,
  Chart,
  useChart,
  Toaster,
  Marquee,
  ImageCard,
  InputOTP,
  // Level 2
  AlertDialog,
  Breadcrumb,
  Calendar,
  Carousel,
  useCarousel,
  Pagination,
  Sheet,
  sheetContentVariants,
  Form,
  useFormField,
  Command,
  // Compound
  Combobox,
  DataTable,
  Sidebar,
  useSidebar,
  sidebarMenuButtonVariants,
} from "@/components/ui";

export type {
  IButtonProps,
  IBadgeProps,
  ICardProps,
  IInputProps,
  ITextareaProps,
  ICheckboxProps,
  IRadioGroupItemProps,
  IFormLayoutProps,
  IFormSectionProps,
  IFormFieldProps,
  IFormRowProps,
  IFormActionsProps,
  ILinkProps,
  IAlertProps,
  IIconButtonProps,
  ILoaderProps,
  IDialogContentProps,
  IDividerProps,
  IStackProps,
  IFlexProps,
  IGridProps,
  IContainerProps,
  // New types
  ISkeletonProps,
  IProgressProps,
  ChartConfig,
  IChartContainerProps,
  ISonnerProps,
  IMarqueeProps,
  IImageCardProps,
  IInputOTPProps,
  IAlertDialogContentProps,
  IBreadcrumbLinkProps,
  ICalendarProps,
  ICarouselProps,
  CarouselApi,
  IPaginationLinkProps,
  ISheetContentProps,
  IComboboxProps,
  IComboboxItem,
  IDataTableProps,
  AvatarShape,
} from "@/components/ui";

// Composite components
export { CardGrid } from "@/components/CardGrid";
export type { CardGridProps } from "@/components/CardGrid";

export { NavBar } from "@/components/NavBar";
export type {
  NavBarProps,
  NavLink,
  NavMenuItem,
  NavBrand,
  NavAuth,
} from "@/components/NavBar";

export { SimplePage } from "@/components/Page";
export type { SimplePageProps } from "@/components/Page";

export { SectionNav } from "@/components/SectionNav/SectionNav";
export type {
  SectionNavItem,
  ISectionNavProps,
} from "@/components/SectionNav/SectionNav";

export { TwoColumnLayout } from "@/components/TwoColumnLayout/TwoColumnLayout";

// Theme
export { ThemeProvider, useTheme } from "@/components/ThemeProvider";
export type { ColorTheme } from "@/components/ThemeProvider";
export { ThemeToggle } from "@/components/ThemeToggle";
export type { ThemeToggleProps } from "@/components/ThemeToggle";
export { ColorThemeToggle } from "@/components/ColorThemeToggle";
export type { ColorThemeToggleProps } from "@/components/ColorThemeToggle";

export { createTheme } from "@/lib/create-theme";
export type { ThemeConfig } from "@/lib/create-theme";

// Landing page components
export {
  Hero,
  Section,
  sectionVariants,
  Footer,
  PricingTable,
  FeatureSection,
  Testimonial,
  LogoCloud,
  CTABanner,
  FAQ,
  StatsBar,
  AnnouncementBanner,
  NewsletterSignup,
} from "@/components/landing";

export type {
  HeroProps,
  SectionProps,
  FooterProps,
  FooterLinkGroup,
  PricingTableProps,
  PricingTier,
  PricingFeature,
  FeatureSectionProps,
  Feature,
  TestimonialProps,
  TestimonialItem,
  LogoCloudProps,
  CTABannerProps,
  FAQProps,
  FAQItem,
  StatsBarProps,
  Stat,
  AnnouncementBannerProps,
  NewsletterSignupProps,
} from "@/components/landing";

// Utilities
export { cn } from "@/lib/utils";
