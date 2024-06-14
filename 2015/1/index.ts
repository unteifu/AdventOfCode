import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("");

function partOne() {
  return input
    .map((v: string) => (v === "(" ? 1 : -1))
    .reduce((acc: number, currentValue: number) => acc + currentValue, 0);
}

function partTwo() {
  const floors = input.map((v: string) => (v === "(" ? 1 : -1));

  let acc = 0;
  let i: number;

  for (i = 0; i < floors.length; i++) {
    let instruction = floors[i];
    acc += instruction;

    if (acc < 0) {
      break;
    }
  }

  return i + 1;
}

console.log("Part 1: " + partOne());
console.log("Part 2: " + partTwo());
