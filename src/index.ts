import listWordOccurences from "./occurences";

const [sentence, strSize] = process.argv.slice(2);
if (!sentence || !strSize) {
  console.error("Missing sentence or size");
}
const n = Number(strSize);
if (Number.isNaN(n)) {
  console.error("Invalid size");
}

const list = listWordOccurences(sentence, n);
list.forEach(([w, c]) => {
  console.log(`(${w}, ${c})`);
});
