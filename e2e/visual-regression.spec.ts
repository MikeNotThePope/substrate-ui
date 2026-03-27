import { test, expect } from "@playwright/test";

const stories = [
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
