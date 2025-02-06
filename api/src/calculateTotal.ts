const ITEM_PRICE = 8;
const DISCOUNT_MAP: { [id: number]: number } = {
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.85,
  5: 0.8,
};

export const calculateTotal = (
  shirt1: number,
  shirt2: number,
  shirt3: number,
  shirt4: number,
  shirt5: number
): number => {
  let counts = [shirt1, shirt2, shirt3, shirt4, shirt5];
  counts = counts.filter((count) => count !== 0);
  const groups = [];
  while (counts.length > 0) {
    groups.push(counts.length);
    for (let i = 0; i < counts.length; i++) {
      counts[i]--;
    }
    counts = counts.filter((count) => count !== 0);
  }
  let total = 0;
  for (let group of groups) {
    total += group * ITEM_PRICE * DISCOUNT_MAP[group];
  }
  return total;
};
