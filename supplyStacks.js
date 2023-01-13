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
        const movedCrates = stackMovingFrom.splice(stackMovingFrom.length - 1, move);
        stackMovingTo === null || stackMovingTo === void 0 ? void 0 : stackMovingTo.push(...movedCrates);
        this.stacks.set(from, stackMovingFrom);
        this.stacks.set(to, stackMovingTo);
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
