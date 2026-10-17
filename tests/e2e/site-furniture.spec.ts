import {expect, test} from '@playwright/test';

test.describe('Site furniture', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test('should display a header', async ({page}) => {
        await expect(page.getByTestId('site-header')).toBeVisible();
    });

    test('should display a footer', async ({page}) => {
        await expect(page.getByTestId('site-footer')).toBeVisible();
    });

    test('should display a social links menu', async ({page}) => {
        const socialLinks = page.getByTestId('social-links');
        await expect(socialLinks).toBeVisible();
        await expect(socialLinks.getByLabel('Instagram')).toBeVisible();
        await expect(socialLinks.getByLabel('Threads')).toBeVisible();
        await expect(socialLinks.getByLabel('X')).toBeVisible();
        await expect(socialLinks.getByLabel('Bluesky')).toBeVisible();
    });

    test.describe('Desktop', () => {
        // xl breakpoint, the header title preview is hidden below it
        test.use({viewport: {width: 1280, height: 500}});

        test('should display a main navigation', async ({page}) => {
            await expect(page.getByTestId('main-navigation')).toBeVisible();
            await expect(
                page.getByTestId('site-footer').getByTestId('main-navigation-static')
            ).toBeVisible();
        });

        test('should have a home link', async ({page}) => {
            await page.goto('/about');
            await page.getByTestId('site-header-logo').click();
            await expect(page).toHaveURL('/');
        });

        test('should have functioning main links', async ({page}) => {
            // previous pages stay mounted (hidden) after client-side navigation
            const mainNavigation = page.getByTestId('main-navigation').filter({visible: true});
            await mainNavigation.getByText('About').click();
            await expect(page).toHaveURL('/about');
            await mainNavigation.getByText('Contact').click();
            await expect(page).toHaveURL('/contact');
            await mainNavigation.getByText('Services').click();
            await expect(page).toHaveURL('/services');
        });

        test('should display a dynamic collections menu', async ({page}) => {
            // hover over the personal work-type trigger to open the menu
            await page.getByRole('button', {name: /personal/i}).hover();
            // navigation menu is rendered inside a portal inside main page layout,
            // otherwise base ui renders into body by default
            const mainNavigationPortal = page.getByTestId('page-content');
            const collectionsGrid = mainNavigationPortal.getByTestId('personal-collections-grid');
            await expect(collectionsGrid).toBeVisible();
            // links to all collections of that work type
            await expect(mainNavigationPortal.getByText('View all personal')).toBeVisible();
        });

        test('should display a categories menu', async ({page}) => {
            await page.getByRole('button', {name: /categories/i}).hover();
            const categoriesGrid = page.getByTestId('page-content').getByTestId('categories-grid');
            await expect(categoriesGrid).toBeVisible();
            await expect(categoriesGrid.getByText('View all categories')).toBeVisible();
        });

        test('should link to collections in the dynamic menu', async ({page}) => {
            // hover over the personal work-type trigger to open the menu
            await page.getByRole('button', {name: /personal/i}).hover();
            const mainNavigationPortal = page.getByTestId('page-content');
            const collectionsGrid = mainNavigationPortal.getByTestId('personal-collections-grid');
            await collectionsGrid.getByText('Example collection 1', {exact: true}).click();
            await expect(page).toHaveURL('/example-collection-1');
        });

        test('should handle keyboard navigation', async ({page}) => {
            const mainNavigationPortal = page.getByTestId('page-content');
            const collectionsGrid = mainNavigationPortal.getByTestId('personal-collections-grid');
            // test keyboard navigation - press escape to close menu
            await page.keyboard.press('Escape');
            await expect(collectionsGrid).not.toBeVisible();
            // test opening menu with keyboard
            await page.getByRole('button', {name: /personal/i}).focus();
            await page.keyboard.press('Enter');
            await expect(collectionsGrid).toBeVisible();
        });

        test('should show the page title in the header as user scrolls', async ({page}) => {
            const titlePreview = page.getByTestId('page-header-title-preview');
            await expect(titlePreview).toBeAttached();
            // we can't use 'toBeHidden' because it's just invisible because of opacity, this
            // is required for the animation we use
            await expect(titlePreview).toHaveCSS('opacity', '0');
            await page.evaluate(() => {
                window.scrollTo(0, 1000);
            });
            await expect(titlePreview).toBeVisible();
            await expect(titlePreview.getByText('Home page title example')).toBeVisible();
        });
    });

    test.describe('Mobile', () => {
        test.use({viewport: {width: 640, height: 1024}});

        test.beforeEach(async ({page}) => {
            await page.getByTestId('mobile-menu-toggle').click();
        });

        test('should display a mobile menu', async ({page}) => {
            await expect(page.getByTestId('mobile-menu')).toBeVisible();
            await page.getByTestId('mobile-menu-toggle').click();
            await expect(page.getByTestId('mobile-menu')).not.toBeVisible();
        });

        test('should show main menu', async ({page}) => {
            const navigation = page.getByTestId('mobile-menu-collections-navigation');
            await expect(navigation.getByRole('link', {name: 'About'})).toBeVisible();
            await expect(navigation.getByRole('link', {name: 'Services'})).toBeVisible();
            await expect(navigation.getByRole('link', {name: 'Contact'})).toBeVisible();
        });

        test('should show collections menu', async ({page}) => {
            await expect(page.getByTestId('mobile-menu-collections-navigation')).toBeVisible();
            await page.getByTestId('mobile-menu-worktype-toggle-personal').click();
            await expect(
                page
                    .getByTestId('mobile-menu-collections-navigation')
                    .getByText('Example collection 1', {exact: true})
            ).toBeVisible();
            await expect(
                page
                    .getByTestId('mobile-menu-collections-navigation')
                    .getByText('Example collection 2', {exact: true})
            ).toBeVisible();
        });

        test('should link to collections in the mobile menu', async ({page}) => {
            await page.getByTestId('mobile-menu-worktype-toggle-personal').click();
            await page.getByText('View all personal').click();
            await expect(page).toHaveURL('/personal');
        });
    });
});
