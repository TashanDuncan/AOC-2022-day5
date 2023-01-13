import { reverse } from "dns";

export class Supply {
  stacks: Map<number, string[]>;

  constructor(stacks: Map<number, string[]>) {
    this.stacks = stacks;
  }

  operateCrane(move: number, from: number, to: number, reverse = true) {
    const stackMovingFrom = this.stacks.get(from)!;
    const stackMovingTo = this.stacks.get(to)!;
    const movedCrates = reverse
      ? stackMovingFrom?.splice(stackMovingFrom.length - move, move).reverse()
      : stackMovingFrom?.splice(stackMovingFrom.length - move, move);

    stackMovingTo.push(...movedCrates);
    this.stacks.set(from, stackMovingFrom);
    this.stacks.set(to, stackMovingTo);
  }

  followCraneInstructions(instructions: number[][], reverse = true) {
    instructions.forEach((instruction) => {
      const move = instruction[0];
      const from = instruction[1];
      const to = instruction[2];
      if (reverse) {
        this.operateCrane(move, from, to);
      } else {
        this.operateCrane(move, from, to, false);
      }
    });
  }

  getTopOfStacks(): string {
    let result: string[] = [];
    this.stacks.forEach((stack) => {
      result.push(stack.pop()!);
    });
    return result.join("");
  }
}
