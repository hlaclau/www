import { expect, test } from '@playwright/test';

// Vercel Analytics is only served on Vercel; stub it so it doesn't 404 locally.
test.beforeEach(async ({ page }) => {
    await page.route('**/_vercel/**', (route) =>
        route.fulfill({ contentType: 'text/javascript', body: '' })
    );
});

test.describe('homepage', () => {
    test('renders without console errors', async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (err) => errors.push(err.message));
        page.on('console', (msg) => {
            if (msg.type() === 'error') errors.push(msg.text());
        });

        const response = await page.goto('/');
        expect(response?.status()).toBe(200);
        await expect(page).toHaveTitle(/Hugo Laclau/);
        await expect(page.getByRole('heading', { level: 1 })).toHaveText(
            'Hugo Laclau'
        );
        expect(errors).toEqual([]);
    });

    test('shows about and contact sections', async ({ page }) => {
        await page.goto('/');
        await expect(page.getByText('À propos')).toBeVisible();
        await expect(
            page.getByRole('link', { name: 'GitHub' })
        ).toHaveAttribute('href', 'https://github.com/hlaclau');
        await expect(
            page.getByRole('link', { name: 'LinkedIn' })
        ).toHaveAttribute('href', /linkedin\.com\/in\//);
    });

    test('has SEO metadata', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('meta[name="description"]')).toHaveAttribute(
            'content',
            /.+/
        );
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
            'href',
            'https://hlaclau.fr/'
        );
        await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
            'content',
            'https://hlaclau.fr/og.png'
        );

        const jsonLd = await page
            .locator('script[type="application/ld+json"]')
            .textContent();
        expect(() => JSON.parse(jsonLd ?? '')).not.toThrow();
    });

    test('theme toggle switches and persists', async ({ page }) => {
        await page.goto('/');
        const html = page.locator('html');
        await expect(html).toHaveClass(/dark/);

        await page.getByRole('button', { name: 'Changer de thème' }).click();
        await expect(html).not.toHaveClass(/dark/);

        await page.reload();
        await expect(html).not.toHaveClass(/dark/);
    });
});

test.describe('english version', () => {
    test('is served with English content and metadata', async ({ page }) => {
        const response = await page.goto('/en/');
        expect(response?.status()).toBe(200);
        await expect(page.locator('html')).toHaveAttribute('lang', 'en');
        await expect(page.getByText('About', { exact: true })).toBeVisible();
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
            'href',
            'https://hlaclau.fr/en/'
        );
        await expect(
            page.locator('link[rel="alternate"][hreflang="fr"]')
        ).toHaveAttribute('href', 'https://hlaclau.fr/');
    });

    test('language switcher navigates between versions', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: 'Switch to English' }).click();
        await expect(page).toHaveURL(/\/en\/$/);
        await page.getByRole('link', { name: 'Passer en français' }).click();
        await expect(page).toHaveURL(/\/$/);
        await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    });
});

test('unknown routes serve the 404 page', async ({ page }) => {
    const response = await page.goto('/does-not-exist');
    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
        "Cette page n'existe pas."
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        'content',
        /noindex/
    );
});

test('static assets are served', async ({ request }) => {
    for (const path of [
        '/robots.txt',
        '/manifest.json',
        '/favicon.png',
        '/favicon.svg',
        '/og.png',
        '/sitemap-index.xml',
    ]) {
        const response = await request.get(path);
        expect(response.status(), path).toBe(200);
    }
});
