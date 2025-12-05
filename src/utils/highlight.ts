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
        const parts = result.split(word);
        if (parts.length > 1) {
            result = parts.join(highlight(word));
        }
    }

    return result;
}
