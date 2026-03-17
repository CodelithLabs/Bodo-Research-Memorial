interface RatingDistribution {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
}

export function calculateAverageRating(
    ratings: number[],
    totalReviews?: number
): number {
    if (ratings.length === 0) return 0;

    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = sum / ratings.length;

    // Round to 1 decimal place
    return Math.round(average * 10) / 10;
}

export function calculateRatingDistribution(
    ratings: number[]
): RatingDistribution {
    const distribution: RatingDistribution = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    };

    ratings.forEach((rating) => {
        const rounded = Math.round(rating);
        if (rounded >= 1 && rounded <= 5) {
            distribution[rounded as keyof RatingDistribution]++;
        }
    });

    return distribution;
}

export function calculateRatingPercentage(
    rating: number,
    totalRatings: number
): number {
    if (totalRatings === 0) return 0;
    return Math.round((rating / totalRatings) * 100);
}

export function getRatingLabel(rating: number): string {
    if (rating >= 4.5) return 'Excellent';
    if (rating >= 4.0) return 'Great';
    if (rating >= 3.5) return 'Good';
    if (rating >= 3.0) return 'Fair';
    if (rating >= 2.0) return 'Poor';
    if (rating >= 1.0) return 'Bad';
    return 'No ratings';
}

export function formatRating(rating: number): string {
    if (rating === 0) return 'N/A';
    return rating.toFixed(1);
}
