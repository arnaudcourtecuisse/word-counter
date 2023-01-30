import { countWords, formatCount } from "../occurences";

describe("countWords", () => {
  it("should detect all words in the sentence", () => {
    const result = countWords("this is a sentence");
    expect(result).toHaveProperty("this");
    expect(result).toHaveProperty("is");
    expect(result).toHaveProperty("a");
    expect(result).toHaveProperty("sentence");
  });

  it("should count multiples occurences of words", () => {
    const result = countWords("some sentences have some words multiple times.");
    expect(result.some).toBe(2);
  });

  it("should not return empty words when there are starting or ending whitespaces", () => {
    const result = countWords(
      "  this sentence starts and ends with whitespaces "
    );
    expect(result).not.toHaveProperty("");
  });

  it("should not return empty words when there are multiple consecutive whitespaces", async () => {
    const result = countWords(
      "this sentence    have extra    whitespaces in the middle"
    );
    expect(result).not.toHaveProperty("");
  });

  it("should consider all whitespaces as separators", async () => {
    const result = countWords(
      "this sentence have\ttabs and\nnewlines as separators"
    );
    expect(result).not.toHaveProperty("have\ttabs");
    expect(result.have).toBe(1);
    expect(result.tabs).toBe(1);
    expect(result).not.toHaveProperty("and\nnewlines");
    expect(result.and).toBe(1);
    expect(result.newlines).toBe(1);
  });
});

describe("formatCount", () => {
  it("should sort results by occurence and alphabetical order", () => {
    const list = formatCount({ b: 1, a: 1, c: 2 }, 3);
    expect(list[0][0]).toBe("c");
    expect(list[1][0]).toBe("a");
    expect(list[2][0]).toBe("b");
  });

  it("should keep first lines when there are more words than request", () => {
    const list = formatCount({ b: 1, a: 1, c: 2 }, 2);
    expect(list).toHaveLength(2);
    expect(list[0][0]).toBe("c");
    expect(list[1][0]).toBe("a");
  });
});
