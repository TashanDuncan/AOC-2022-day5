"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supply = void 0;
const fs = require('fs');
class Supply {
    constructor(stacks) {
        this.stacks = stacks;
    }
    operateCrane(move, from, to) {
        const stackMovingFrom = this.stacks.get(from);
        const stackMovingTo = this.stacks.get(to);
        const movedCrates = stackMovingFrom.splice(stackMovingFrom.length - move, move).reverse();
        stackMovingTo === null || stackMovingTo === void 0 ? void 0 : stackMovingTo.push(...movedCrates);
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
}
exports.Supply = Supply;
let testData = new Map([
    [1, ['Z', 'N']],
    [2, ['M', 'C', 'D']],
    [3, ['P']],
]);
const testSupply = new Supply(testData);
console.log(testSupply.stacks);
testSupply.operateCrane(1, 2, 1);
console.log(testSupply.stacks);
testSupply.operateCrane(3, 1, 3);
console.log(testSupply.stacks);
