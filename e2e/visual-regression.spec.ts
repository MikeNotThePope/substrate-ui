import { test, expect } from "@playwright/test";

const stories = [
  // Existing stories
  "primitives-button--all-variants",
  "primitives-button--all-sizes",
  "primitives-badge--all-variants",
  "primitives-card--all-variants",
  "primitives-input--default",
  "primitives-input--invalid",
  "primitives-alert--all-statuses",
  "primitives-text--type-scale",
  "primitives-link--all-variants",
  "primitives-icon-button--all-sizes",
  "primitives-loader--all-variants",
  "primitives-divider--horizontal",
  "primitives-divider--with-label",

  // Avatar
  "primitives-avatar--all-sizes",
  "primitives-avatar--with-fallback",

  // Checkbox
  "primitives-checkbox--all-variants",
  "primitives-checkbox--all-sizes",

  // Select
  "primitives-select--default",

  // Tabs
  "primitives-tabs--default",

  // Dialog
  "primitives-dialog--default",

  // Accordion
  "primitives-accordion--default",
  "primitives-accordion--multiple",

  // Table
  "primitives-table--default",
  "primitives-table--with-caption",

  // Progress
  "primitives-progress--default",
  "primitives-progress--stages",

  // Switch
  "primitives-switch--default",
  "primitives-switch--with-label",

  // Slider
  "primitives-slider--default",

  // RadioGroup
  "primitives-radiogroup--default",
  "primitives-radiogroup--all-sizes",

  // Tooltip
  "primitives-tooltip--default",

  // Drawer
  "primitives-drawer--default",

  // Skeleton
  "primitives-skeleton--default",
  "primitives-skeleton--card-skeleton",

  // Breadcrumb
  "primitives-breadcrumb--default",
  "primitives-breadcrumb--with-ellipsis",

  // Calendar
  "primitives-calendar--default",

  // Layout: Container
  "layout-container--medium",

  // Layout: Stack
  "layout-stack--vertical",
  "layout-stack--horizontal",

  // Layout: Flex
  "layout-flex--row",
  "layout-flex--wrapping",

  // Layout: Grid
  "layout-grid--three-columns",
  "layout-grid--responsive",
];

for (const storyId of stories) {
  test(`visual: ${storyId}`, async ({ page }) => {
    await page.goto(
      `/iframe.html?id=${storyId}&viewMode=story`,
    );
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveScreenshot(`${storyId}.png`);
  });
}
