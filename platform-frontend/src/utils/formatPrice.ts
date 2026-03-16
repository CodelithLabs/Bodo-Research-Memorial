export function formatPrice(
    price: number,
    currency: string = 'USD',
    locale: string = 'en-US'
): string {
    if (price === 0) {
        return 'Free';
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(price);
}

export function formatPriceShort(price: number): string {
    if (price === 0) return 'Free';
    if (price >= 1000) {
        return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
}

export function calculateDiscount(
    originalPrice: number,
    discountedPrice: number
): number {
    if (originalPrice <= 0) return 0;
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}
