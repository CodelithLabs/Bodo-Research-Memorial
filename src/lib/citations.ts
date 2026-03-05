export interface CitationData {
    title: string;
    author?: string;
    year?: string;
    publisher?: string;
    url: string;
    accessDate: string;
    platformName?: string;
}

export function generateAPA(data: CitationData): string {
    const author = data.author || "Bodo Research Memorial";
    const year = data.year ? `(${data.year})` : "(n.d.)";
    const platform = data.platformName || "Bodo Research Memorial";
    return `${author}. ${year}. ${data.title}. ${platform}. Retrieved ${data.accessDate}, from ${data.url}`;
}

export function generateMLA(data: CitationData): string {
    const author = data.author || "Bodo Research Memorial";
    const platform = data.platformName || "Bodo Research Memorial";
    const year = data.year || "n.d.";
    return `${author}. "${data.title}." ${platform}, ${year}, ${data.url}. Accessed ${data.accessDate}.`;
}

export function generateChicago(data: CitationData): string {
    const author = data.author || "Bodo Research Memorial";
    const platform = data.platformName || "Bodo Research Memorial";
    const year = data.year || "n.d.";
    return `${author}. "${data.title}." ${platform}. ${year}. ${data.url} (accessed ${data.accessDate}).`;
}
