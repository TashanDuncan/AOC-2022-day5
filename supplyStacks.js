"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supply = void 0;
class Supply {
    constructor(stacks) {
        this.stacks = stacks;
    }
    operateCrane(move, from, to, reverse = true) {
        const stackMovingFrom = this.stacks.get(from);
        const stackMovingTo = this.stacks.get(to);
        const movedCrates = reverse
            ? stackMovingFrom === null || stackMovingFrom === void 0 ? void 0 : stackMovingFrom.splice(stackMovingFrom.length - move, move).reverse()
            : stackMovingFrom === null || stackMovingFrom === void 0 ? void 0 : stackMovingFrom.splice(stackMovingFrom.length - move, move);
        stackMovingTo.push(...movedCrates);
        this.stacks.set(from, stackMovingFrom);
        this.stacks.set(to, stackMovingTo);
    }
    followCraneInstructions(instructions, reverse = true) {
        instructions.forEach((instruction) => {
            const move = instruction[0];
            const from = instruction[1];
            const to = instruction[2];
            if (reverse) {
                this.operateCrane(move, from, to);
            }
            else {
                this.operateCrane(move, from, to, false);
            }
        });
    }
    getTopOfStacks() {
        let result = [];
        this.stacks.forEach((stack) => {
            result.push(stack.pop());
        });
        return result.join("");
    }
}
exports.Supply = Supply;
