"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const supplyStacks_1 = require("./supplyStacks");
const testInstructions = (0, fs_1.readFileSync)(__dirname + '/test-instructions.txt').toString().split("\n").map((element) => {
    return element.replace(/\D/g, '').split('').map((num) => Number(num));
});
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
    it('should complete multiple crane operations', () => {
        testSupply.operateCrane(1, 2, 1);
        testSupply.operateCrane(3, 1, 3);
        testData = new Map([
            [1, []],
            [2, ['M', 'C']],
            [3, ['P', 'D', 'N', 'Z']],
        ]);
        expect(testSupply.stacks).toEqual(testData);
    });
    it('should read test instructions to operate crane', () => {
        testSupply.followCraneInstructions(testInstructions);
        testData = new Map([
            [1, ['C']],
            [2, ['M']],
            [3, ['P', 'D', 'N', 'Z']],
        ]);
        expect(testSupply.stacks).toEqual(testData);
    });
    it('should return the top of each stack', () => {
        expect(testSupply.getTopOfStacks()).toEqual('NDP');
    });
});
