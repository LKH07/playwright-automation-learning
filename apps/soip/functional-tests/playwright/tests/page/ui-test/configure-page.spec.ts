// @ts-check
import { test, expect } from '@playwright/test';
import { SOIP_CONFIGURE_PAGE } from '../../../helpers/const';

test.only('homepage has title and links to personalise-sky-glass page', async ({ page }) => {
  // await page.goto('https://pam-soip-master-u01.cf.dev-paas.bskyb.com/glass/buy?sc=glass-small-48m');
  await page.goto(SOIP_CONFIGURE_PAGE);
  
  // Locator to clear the notification
  const notificationsToggle = page.getByTestId('masthead-alerts-toggle-button-icon');
  await notificationsToggle.click();

  const mediumGlass = page.locator('[data-test-id="configure-size-selection-55"]');
  await mediumGlass.click({delay: 200});
  await expect(mediumGlass).toHaveAttribute('aria-checked', 'true');

  const pinkFrame = page.locator('button[data-test-id="configure-frame-selection-LLAMA_PINK"]');
  await pinkFrame.click({delay: 200});
  await expect(pinkFrame).toHaveAttribute('aria-checked', 'true');

  const whiteSpeaker = page.locator('button[data-test-id="configure-frame-selection-LLAMA_WHITE"]');
  await whiteSpeaker.click({delay: 200});
  await expect(whiteSpeaker).toHaveAttribute('aria-checked', 'true');
  
});