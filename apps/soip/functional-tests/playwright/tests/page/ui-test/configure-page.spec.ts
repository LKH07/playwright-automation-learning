// @ts-check
import { test, expect, Page } from "@playwright/test";
import { SOIP_CONFIGURE_PAGE } from "../../../helpers/const";
import { ConfigurePage } from "../../../model";

test.describe("Glass configure", () => {
  test("configure page", async ({ page }) => {
    let configure = new ConfigurePage(page);
    await page.goto(SOIP_CONFIGURE_PAGE);

    await configure.selectSkyGlass();
    await configure.basketOpenAndClose();
    await configure.selectLlamaGlass();
  });
});
