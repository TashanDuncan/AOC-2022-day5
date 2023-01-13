import { readFileSync } from "fs";
import { Supply } from "./supplyStacks";

const testInstructions = readFileSync(__dirname + '/test-instructions.txt').toString().split("\n").map((element: string) => {
  return element.replace(/\D/g,'').split('').map((num:string) => Number(num))
});
describe('supply Stacks part 1', () => {
  let testData: Map<number, string[]>
  let testSupply: Supply

  beforeEach(() => {
    testData = new Map<number,string[]>([
      [1,['Z','N']],
      [2,['M','C','D']],
      [3,['P']],
    ])
    testSupply = new Supply(testData)
  })
  it('should return list of stacks', () => {
    expect(testSupply.stacks).toEqual(testData)
  });


  it('should move stacks based on instructions', () => {
    const move = 1
    const from = 2
    const to = 1
    testSupply.operateCrane(move, from , to)
    testData = new Map<number,string[]>([
      [1,['Z','N','D']],
      [2,['M','C']],
      [3,['P']],
    ])
    expect(testSupply.stacks).toEqual(testData)
  });

  it('should complete multiple crane operations', () => {

    testSupply.operateCrane(1, 2 , 1)
    testSupply.operateCrane(3, 1 , 3)
    testData = new Map<number,string[]>([
      [1,[]],
      [2,['M','C']],
      [3,['P','D','N','Z']],
    ])
    expect(testSupply.stacks).toEqual(testData)
  });

  it('should read test instructions to operate crane', () => {

    testSupply.followCraneInstructions(testInstructions)
    testData = new Map<number,string[]>([
      [1,['C']],
      [2,['M']],
      [3,['P','D','N','Z']],
    ])
    expect(testSupply.stacks).toEqual(testData)
  });
});