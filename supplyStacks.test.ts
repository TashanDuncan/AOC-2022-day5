import { readFileSync } from "fs";
import { Supply } from "./supplyStacks";
describe('supply Stacks part 1', () => {
  let testData = new Map<number,string[]>([
    [1,['Z','N']],
    [2,['M','C','D']],
    [3,['P']],
  ])
  const testSupply = new Supply(testData)
  it('should return list of stacks', () => {
    expect(testSupply.stacks).toEqual(testData)
  });
});