import { readFileSync } from "fs";
import { Supply } from "./supplyStacks";

const testInstructions = readFileSync(__dirname + '/test-instructions.txt').toString().split("\n").map((element: string) => {
  const result = element.split(' ')
  return[Number(result[1]),Number(result[3]),Number(result[5])]
});

const instructions = readFileSync(__dirname + '/instructions.txt').toString().split("\n").map((element: string) => {
  const result = element.split(' ')
  return[Number(result[1]),Number(result[3]),Number(result[5])]
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
  it('should return the top of each stack', () => {
    expect(testSupply.getTopOfStacks()).toEqual('NDP')
  });

  it('should match test example', () => {
    testSupply.followCraneInstructions(testInstructions);
    expect(testSupply.getTopOfStacks()).toEqual('CMZ');
  });
  it('should match input data', () => {
    const realData = new Map<number,string[]>([
      [1,['S','T','H','F','W','R']],
      [2,['S','G','D','Q','W']],
      [3,['B','T','W',]],
      [4,['D','R','W','T','N','Q','Z','J']],
      [5,['F','B','H','G','L','V','T','Z']],
      [6,['L','P','T','C','V','B','S','G']],
      [7,['Z','B','R','T','W','G','P']],
      [8,['N','G','M','T','C','J','R']],
      [9,['L','G','B','W']],
    ])
    testSupply = new Supply(realData)

    testSupply.followCraneInstructions(instructions);
    expect(testSupply.getTopOfStacks()).toEqual('CMZ');
  });
});