"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supplyStacks_1 = require("./supplyStacks");
describe('supply Stacks part 1', () => {
    let testData;
    let testSupply;
    beforeEach(() => {
        testData = new Map([
            [1, ['Z', 'N']],
            [2, ['M', 'C', 'D']],
            [3, ['P']],
        ]);
        testSupply = new supplyStacks_1.Supply(testData);
    });
    it('should return list of stacks', () => {
        expect(testSupply.stacks).toEqual(testData);
    });
    it('should move stacks based on instructions', () => {
        const move = 1;
        const from = 2;
        const to = 1;
        testSupply.operateCrane(move, from, to);
        testData = new Map([
            [1, ['Z', 'N', 'D']],
            [2, ['M', 'C']],
            [3, ['P']],
        ]);
        expect(testSupply.stacks).toEqual(testData);
    });
});
