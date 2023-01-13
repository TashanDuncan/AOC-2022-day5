"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supply = void 0;
class Supply {
    constructor(stacks) {
        this.stacks = stacks;
    }
    operateCrane(move, from, to) {
        const stackMovingFrom = this.stacks.get(from);
        const stackMovingTo = this.stacks.get(to);
        const movedCrates = stackMovingFrom === null || stackMovingFrom === void 0 ? void 0 : stackMovingFrom.splice(stackMovingFrom.length - move, move).reverse();
        stackMovingTo.push(...movedCrates);
        this.stacks.set(from, stackMovingFrom);
        this.stacks.set(to, stackMovingTo);
    }
    followCraneInstructions(instructions) {
        instructions.forEach(instruction => {
            const move = instruction[0];
            const from = instruction[1];
            const to = instruction[2];
            this.operateCrane(move, from, to);
        });
    }
    getTopOfStacks() {
        let result = [];
        this.stacks.forEach(stack => {
            result.push(stack.pop());
        });
        return result.join('');
    }
}
exports.Supply = Supply;
