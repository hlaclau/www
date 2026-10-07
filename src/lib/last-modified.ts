import { execSync } from 'node:child_process';

// Date of the last commit, so lastmod/dateModified only move when the site actually changes.
// Undefined when git history isn't available at build time; callers should omit the field then.
function readLastCommitDate(): string | undefined {
    try {
        const date = execSync('git log -1 --format=%cs', {
            stdio: ['ignore', 'pipe', 'ignore'],
        })
            .toString()
            .trim();
        return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : undefined;
    } catch {
        return undefined;
    }
}

export const LAST_MODIFIED = readLastCommitDate();
