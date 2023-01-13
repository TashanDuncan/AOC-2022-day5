"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supplyStacks_1 = require("./supplyStacks");
describe('supply Stacks part 1', () => {
    let testData = new Map([
        [1, ['Z', 'N']],
        [2, ['M', 'C', 'D']],
        [3, ['P']],
    ]);
    const testSupply = new supplyStacks_1.Supply(testData);
    it('should return list of stacks', () => {
        expect(testSupply.stacks).toEqual(testData);
    });
});
