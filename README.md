# Word counter

## Specifications

Specifications can be found [here](https://gist.github.com/lucas-foodles/8d60f484586f30b67e77d258709b844e).

To implement the counter, the following hypothesis were used:
- any whitespace is a separator
- any non-whitespace character (including punctuation and numbers) are considered part of words
- any non-empty string with no separator is a word

## Setup environment

```bash
npm install
npm run build
```

## Run the counter

To run tests: `npm run test`

To run the program:

```bash
npm run build
node dist "this is a sentence" 2
```
