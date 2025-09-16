import {expect, test} from '@playwright/test';

test.describe('Collections', () => {
    test.describe('List page', () => {
        test.beforeEach(async ({page}) => {
            await page.goto('/collections');
        });

        test('should load page successfully', async ({page}) => {
            await expect(page).toHaveTitle(/All photo collections/);
        });

        test('should display a list of collections', async ({page}) => {
            await expect(page.getByText('Example collection 1', {exact: true})).toBeVisible();
            await expect(page.getByText('Example collection 1 description.')).toBeVisible();
            await expect(page.getByText('Example collection 2', {exact: true})).toBeVisible();
            await expect(page.getByText('Example collection 2 description.')).toBeVisible();
        });

        test('should link to a collection detail page', async ({page}) => {
            await page.getByText('Example collection 1', {exact: true}).click();
            await expect(page).toHaveURL('/example-collection-1');
        });
    });

    test.describe('Detail page', () => {
        test.beforeEach(async ({page}) => {
            await page.goto('/example-collection-1');
        });

        test('should load page successfully', async ({page}) => {
            await expect(page).toHaveTitle(/Example collection 1/);
        });

        test('should use meta content for SEO', async ({page}) => {
            await expect(page).toHaveTitle(/Example collection 1 meta title/);

            const metaDescription = page.locator('meta[name="description"]');
            await expect(metaDescription).toHaveAttribute(
                'content',
                'Example collection 1 meta description.'
            );
        });

        test('should display title and description', async ({page}) => {
            await expect(
                page.getByText('Example collection 1 page title', {exact: true})
            ).toBeVisible();
            await expect(page.getByText('Example collection 1 description.')).toBeVisible();
        });

        test('should display a get in touch cta', async ({page}) => {
            await page.getByText('Get in touch').click();
            await expect(page).toHaveURL('/contact');
        });

        test('should display a custom cta link with referer', async ({page}) => {
            await expect(page.getByText('Example collection 1 CTA label')).toBeVisible();
            await expect(page.getByText('Example collection 1 CTA label')).toHaveAttribute(
                'href',
                'https://www.google.com?utm_source=seanislegend.com&utm_medium=referral'
            );
        });

        test('should display a photo grid', async ({page}) => {
            await expect(page.getByTestId('photo-grid')).toBeVisible();
            await expect(page.getByTestId('photo-link')).toHaveCount(2);
        });

        test('should link to a photo detail page for each photo', async ({page}) => {
            await page.getByTestId('photo-link').first().click();
            await expect(page).toHaveURL('/example-collection-1/example-photo-1-slug#photo');
        });

        test('should display a related collections section', async ({page}) => {
            await expect(page.getByTestId('related-collections')).toBeVisible();
            await expect(
                page.getByTestId('related-collections').getByText('Example collection 2')
            ).toBeVisible();
            await page.getByTestId('related-collections').getByText('Example collection 2').click();
            await expect(page).toHaveURL('/example-collection-2');
        });

        test('should display a tags section', async ({page}) => {
            await expect(page.getByTestId('tags-list')).toBeVisible();
            await page.getByTestId('tags-list').getByText('Example tag 1').click();
            await expect(page).toHaveURL('/example-tag-1-photography');
        });

        test.describe('Optional views', () => {
            test.beforeEach(async ({page}) => {
                await page.goto('/example-collection-2');
            });

            test('should not show custom cta link if not provided', async ({page}) => {
                await expect(page.getByText('Example collection 2 CTA label')).toBeHidden();
            });

            test('should not show related collections if not provided', async ({page}) => {
                await expect(page.getByTestId('related-collections')).toBeHidden();
            });
        });

        test.describe('Custom layouts', () => {
            test.beforeEach(async ({page}) => {
                await page.goto('/example-collection-2');
            });

            test('should support custom layout if defined for collection', async ({page}) => {
                const blocksContainer = page.getByTestId('blocks-container');
                const photoGrids = blocksContainer.getByTestId('photo-grid');
                // FourInARow
                const fourInARowGrid = photoGrids.nth(0);
                await expect(fourInARowGrid).toBeVisible();
                await expect(fourInARowGrid.getByTestId('photo-link')).toHaveCount(4);

                // LandscapeOneBigTwoMedium
                const landscapeOneBigTwoMediumGrid = photoGrids.nth(1);
                await expect(landscapeOneBigTwoMediumGrid).toBeVisible();
                await expect(landscapeOneBigTwoMediumGrid.getByTestId('photo-link')).toHaveCount(3);

                // LandscapeTwoBigFourSmall
                const landscapeTwoBigFourSmallGrid = photoGrids.nth(2);
                await expect(landscapeTwoBigFourSmallGrid).toBeVisible();
                await expect(landscapeTwoBigFourSmallGrid.getByTestId('photo-link')).toHaveCount(6);

                // LandscapeTwoBigTwoMediumFourSmall
                const landscapeTwoBigTwoMediumFourSmallGrid = photoGrids.nth(3);
                await expect(landscapeTwoBigTwoMediumFourSmallGrid).toBeVisible();
                await expect(
                    landscapeTwoBigTwoMediumFourSmallGrid.getByTestId('photo-link')
                ).toHaveCount(8);

                // LandscapeTwoBigTwoSmall
                const landscapeTwoBigTwoSmallGrid = photoGrids.nth(4);
                await expect(landscapeTwoBigTwoSmallGrid).toBeVisible();
                await expect(landscapeTwoBigTwoSmallGrid.getByTestId('photo-link')).toHaveCount(4);

                // OneLandScapeTwoPortrait
                const oneLandScapeTwoPortraitGrid = photoGrids.nth(5);
                await expect(oneLandScapeTwoPortraitGrid).toBeVisible();
                await expect(oneLandScapeTwoPortraitGrid.getByTestId('photo-link')).toHaveCount(3);

                // OnePortraitOneLandscapeMediumFourLandscapeSmall
                const onePortraitOneLandscapeMediumFourLandscapeSmallGrid = photoGrids.nth(6);
                await expect(onePortraitOneLandscapeMediumFourLandscapeSmallGrid).toBeVisible();
                await expect(
                    onePortraitOneLandscapeMediumFourLandscapeSmallGrid.getByTestId('photo-link')
                ).toHaveCount(6);

                // OnePortraitOneLandscapeMediumTwoLandscapeSmall
                const onePortraitOneLandscapeMediumTwoLandscapeSmallGrid = photoGrids.nth(7);
                await expect(onePortraitOneLandscapeMediumTwoLandscapeSmallGrid).toBeVisible();

                // OnePortraitTwoLandscape
                const onePortraitTwoLandscapeGrid = photoGrids.nth(8);
                await expect(onePortraitTwoLandscapeGrid).toBeVisible();
                await expect(onePortraitTwoLandscapeGrid.getByTestId('photo-link')).toHaveCount(3);

                // OnePortraitTwoLandscapeMediumTwoLandscapeSmall
                const onePortraitTwoLandscapeMediumTwoLandscapeSmallGrid = photoGrids.nth(9);
                await expect(onePortraitTwoLandscapeMediumTwoLandscapeSmallGrid).toBeVisible();
                await expect(
                    onePortraitTwoLandscapeMediumTwoLandscapeSmallGrid.getByTestId('photo-link')
                ).toHaveCount(5);

                // OnePortraitTwoTopAndBottomLandscape
                const onePortraitTwoTopAndBottomLandscapeGrid = photoGrids.nth(10);
                await expect(onePortraitTwoTopAndBottomLandscapeGrid).toBeVisible();
                await expect(
                    onePortraitTwoTopAndBottomLandscapeGrid.getByTestId('photo-link')
                ).toHaveCount(3);

                // SixInARow
                const sixInARowGrid = photoGrids.nth(11);
                await expect(sixInARowGrid).toBeVisible();
                await expect(sixInARowGrid.getByTestId('photo-link')).toHaveCount(6);

                // ThreeInARow
                const threeInARowGrid = photoGrids.nth(12);
                await expect(threeInARowGrid).toBeVisible();
                await expect(threeInARowGrid.getByTestId('photo-link')).toHaveCount(3);

                // ThreeInARowWithPadding
                const threeInARowWithPaddingGrid = photoGrids.nth(13);
                await expect(threeInARowWithPaddingGrid).toBeVisible();
                await expect(threeInARowWithPaddingGrid.getByTestId('photo-link')).toHaveCount(3);

                // TwoInARow
                const twoInARowGrid = photoGrids.nth(14);
                await expect(twoInARowGrid).toBeVisible();
                await expect(twoInARowGrid.getByTestId('photo-link')).toHaveCount(2);

                // TwoInARowWithPadding
                const twoInARowWithPaddingGrid = photoGrids.nth(15);
                await expect(twoInARowWithPaddingGrid).toBeVisible();
                await expect(twoInARowWithPaddingGrid.getByTestId('photo-link')).toHaveCount(2);

                // TwoPortraitOneLandscapeWithPadding
                const twoPortraitOneLandscapeWithPaddingGrid = photoGrids.nth(16);
                await expect(twoPortraitOneLandscapeWithPaddingGrid).toBeVisible();
                await expect(
                    twoPortraitOneLandscapeWithPaddingGrid.getByTestId('photo-link')
                ).toHaveCount(3);

                // ContentSection
                const contentSection = blocksContainer.getByTestId('content-section');
                await expect(contentSection).toBeVisible();
            });
        });
    });

    test.describe('Photo detail page', () => {
        test.beforeEach(async ({page}) => {
            await page.goto('/example-collection-1/example-photo-1-slug#photo');
        });

        test('should load page successfully', async ({page}) => {
            await expect(page).toHaveTitle(/Example photo 1/);
        });

        test('should use meta content for SEO', async ({page}) => {
            await expect(page).toHaveTitle(/Example photo 1 | Example collection 1/);

            const metaDescription = page.locator('meta[name="description"]');
            await expect(metaDescription).toHaveAttribute(
                'content',
                'Example collection 1 meta description.'
            );
        });

        test('should display title and description', async ({page}) => {
            await expect(
                page
                    .getByTestId('page-content')
                    .getByText('Example collection 1 page title', {exact: true})
            ).toBeVisible();
            await expect(
                page.getByTestId('page-content').getByText('Example collection 1 description.')
            ).toBeVisible();
        });

        test('should display photo title', async ({page}) => {
            await expect(page.getByText('Example photo 1')).toBeVisible();
        });

        test('should display current photo pagination', async ({page}) => {
            await expect(page.getByTestId('pagination')).toHaveText('1/2');
        });

        test('should allow navigation to next photo', async ({page}) => {
            await page.getByText('Next photo').click();
            await expect(page).toHaveURL('/example-collection-1/example-photo-2-slug');
        });

        test('should allow navigation to previous photo', async ({page}) => {
            await page.getByText('Next photo').click();
            await page.getByText('Previous photo').click();
            await expect(page).toHaveURL('/example-collection-1/example-photo-2-slug');
        });

        test('should allow navigation back to all photos', async ({page}) => {
            await page.getByText('Back to all photos').first().click();
            await expect(page).toHaveURL('/example-collection-1#example-photo-1-slug');
        });

        test('should allow keyboard navigation between photos', async ({page}) => {
            await page.getByRole('main').focus();
            await page.keyboard.press('ArrowRight');
            await expect(page).toHaveURL('/example-collection-1/example-photo-2-slug');
            await page.keyboard.press('ArrowLeft');
            await expect(page).toHaveURL('/example-collection-1/example-photo-1-slug');
        });
    });
});
