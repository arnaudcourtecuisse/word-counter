type ResultTuple = [string, number];

export default function listWordOccurences(
  sentence: string,
  listSize: number
): ResultTuple[] {
  const occurences = countWords(sentence);
  return formatCount(occurences, listSize);
}

export function countWords(sentence: string): Record<string, number> {
  const words = sentence.trim().split(/\s+/);
  return words.reduce<Record<string, number>>((result, word) => {
    const updated = { ...result, [word]: (result[word] ?? 0) + 1 };
    return updated;
  }, {});
}

export function formatCount(
  occurences: Record<string, number>,
  listSize: number
): ResultTuple[] {
  return Object.entries(occurences)
    .sort((r1, r2) => {
      const diff = r2[1] - r1[1];
      if (diff !== 0) {
        return diff;
      }
      if (r1[0] < r2[0]) {
        return -1;
      }
      return 1;
    })
    .slice(0, listSize);
}
