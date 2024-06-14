import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .trim()
  .split("\n");

function partOne() {
  return input
    .map((v: string) => {
      const [l, w, h] = v.split("x").map(Number);

      const sides = [2 * l * w, 2 * w * h, 2 * h * l];

      return sides.reduce((a, b) => a + b) + Math.min(...sides) / 2;
    })
    .reduce((a: number, b: number) => a + b);
}

function partTwo() {
  return input
    .map((v: string) => {
      const [l, w, h] = v.split("x").map(Number);
      const [a, b] = [l, w, h].sort((a, b) => a - b);

      const ribbonLength = (a + b) * 2;
      const bowLength = l * w * h;

      return ribbonLength + bowLength;
    })
    .reduce((a: number, b: number) => a + b);
}

console.log("Part 1: " + partOne());
console.log("Part 2: " + partTwo());
