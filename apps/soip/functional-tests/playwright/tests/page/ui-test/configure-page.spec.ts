import { test, expect, Page } from '@playwright/test';

import { SOIP_CONFIGURE_PAGE } from '../../../helpers/const';
import { ConfigurePage } from '../../../model';

test.describe('Glass configure', () => {
  test('configure page', async ({ page }) => {
    const configure = new ConfigurePage(page);
    await page.goto(SOIP_CONFIGURE_PAGE);

    await configure.selectSkyGlass();
    await configure.basketOpenAndClose();
    // await configure.selectframeColor();

    await configure.contractLength24m.click();
    await configure.contractLength48m.click();
    await configure.contractLengthUFP.click();
    await configure.continueButton.click();
    await expect(page).toHaveURL(/glass\/buy\/sky-live/);
  });
});
