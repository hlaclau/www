/**
 * Creates an emphasized span with italic and underline styling
 */
export function highlight(text: string): string {
    return `<span class="italic underline underline-offset-2 decoration-1 font-semibold">${text}</span>`;
}

/**
 * Replaces specified words in text with highlighted versions
 */
export function highlightWords(
    text: string,
    wordsToHighlight: string[]
): string {
    let result = text;

    for (const word of wordsToHighlight) {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        result = result.replace(regex, highlight(word));
    }

    return result;
}
