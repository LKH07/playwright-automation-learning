import { Page, Locator, expect } from "@playwright/test";

export class ConfigurePage {
  readonly smallGlass: Locator;
  readonly mediumGlass: Locator;
  readonly largeGlass: Locator;

  readonly basketOpen: Locator;
  readonly basketClose: Locator;

  readonly frameColorBlack: Locator;
  readonly frameColorBlue: Locator;
  readonly frameColorGreen: Locator;
  readonly frameColorPink: Locator;

  constructor(page: Page) {
    this.smallGlass = page.getByTestId("configure-size-selection-43");
    this.mediumGlass = page.getByTestId("configure-size-selection-55");
    this.largeGlass = page.getByTestId("configure-size-selection-65");
    this.basketOpen = page.getByTestId("basket-trigger-button");
    this.basketClose = page.locator('[data-tracking-label="basket-close"]');

    this.frameColorBlack = page
      .locator('button[data-test-id="configure-frame-selection-LLAMA_BLACK"]')
      .first();
    this.frameColorBlue = page
      .locator('button[data-test-id="configure-frame-selection-LLAMA_BLUE"]')
      .first();
    this.frameColorGreen = page
      .locator('button[data-test-id="configure-frame-selection-LLAMA_GREEN"]')
      .first();
    this.frameColorPink = page
      .locator('button[data-test-id="configure-frame-selection-LLAMA_PINK"]')
      .first();
  }

  async selectSkyGlass() {
    await this.smallGlass.click();
    await this.mediumGlass.click();
    await this.largeGlass.click();
  }

  async basketOpenAndClose() {
    await this.basketOpen.click();
    await this.basketClose.click();
  }

  async selectLlamaGlass() {
    this.frameColorBlack.click();
    await expect(this.frameColorBlack).toHaveAttribute("aria-checked", "true");
    this.frameColorBlue.click();
    await expect(this.frameColorBlue).toHaveAttribute("aria-checked", "true");
    this.frameColorGreen.click();
    await expect(this.frameColorGreen).toHaveAttribute("aria-checked", "true");
    this.frameColorPink.click();
    await expect(this.frameColorPink).toHaveAttribute("aria-checked", "true");
  }
}
