// src/utils/codeTests.ts

// Finds the first lowercase letter at the deepest level of nested parentheses.
// Returns null if the input is invalid or there's no letter at any depth.
// Examples:
// "a" -> 'a'
// "a(b)c" -> 'b'
// "a(b)((c)d)e" -> 'c'
export function deepestLetter(str: string): string | null {
    let maxDepth = 0;
    let currentDepth = 0;
    let result: string | null = null;

    for (const char of str) {
        if (char === '(') {
            currentDepth++;
        } else if (char === ')') {
            currentDepth--;
            if (currentDepth < 0) return null; // too many closing parens
        } else if (/[a-z]/.test(char)) {
            if (currentDepth > maxDepth) {
                maxDepth = currentDepth;
                result = char;
            }
        }
    }

    return currentDepth === 0 ? result : null;
}

// Draws a 7x7 ASCII grid based on a list of points.
// Each point gets an 'O', with lines ('|', '-', '+') drawn outward from it.
// Lines that cross turn into '+'.
// Example:
// (2,2) -> center cross with O
// (2,2), (4,4) -> overlapping grid with two centers and '+' where lines intersect
export function asciiArtTargets(points: { x: number, y: number }[]): string {
    const grid: string[][] = Array.from({ length: 7 }, () => Array(7).fill('.'));

    for (const { x, y } of points) {
        // Vertical line
        for (let i = 0; i < 7; i++) {
            if (i !== y) {
                if (grid[i][x] === '-') grid[i][x] = '+';
                else if (grid[i][x] === '.') grid[i][x] = '|';
            }
        }

        // Horizontal line
        for (let j = 0; j < 7; j++) {
            if (j !== x) {
                if (grid[y][j] === '|') grid[y][j] = '+';
                else if (grid[y][j] === '.') grid[y][j] = '-';
            }
        }

        grid[y][x] = 'O';
    }

    return grid.map(row => row.join('')).join('\n');
}

// Builds a string of a given length using '#' characters spaced as evenly as possible.
// Returns null for lengths below 3.
// Tries to fit in the max number of hashes with at least 1 space between each.
// Examples:
// 3 -> "# #"
// 5 -> "# # #"
// 8 -> "#      #"
export function evenlySpacedHashes(size: number): string | null {
    if (size < 3) return null;

    for (let hashes = Math.floor(size / 2) + 1; hashes >= 2; hashes--) {
        const gaps = hashes - 1;
        const space = (size - hashes) / gaps;

        if (Number.isInteger(space)) {
            return Array(hashes)
                .fill('#')
                .join(' '.repeat(space));
        }
    }

    return '#'.padEnd(size - 1, ' ') + '#';
}
