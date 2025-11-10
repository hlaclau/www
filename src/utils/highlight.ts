/**
 * Creates a highlighted span with primary background and text
 */
export function highlight(text: string): string {
    return `<span class="bg-primary/20 text-primary font-medium px-1 rounded hover:bg-primary/30 hover:scale-105 transition-all duration-200 cursor-default">${text}</span>`;
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
