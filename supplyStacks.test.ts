import { readFileSync } from "fs";

describe('supply Stacks part 1', () => {
  let testData = new Map<number,string[]>([
    [1,['Z','N']],
    [2,['M','C','D']],
    [3,['P']],
  ])
  const testSupply = new Supply()
  it('should return list of stacks', () => {
    expect(testSupply.stacks).toEqual(testData)
  });
});