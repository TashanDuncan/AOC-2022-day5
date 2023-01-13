
export class Supply{
  stacks: Map<number, string[]>

  constructor(stacks: Map<number, string[]>) {
    this.stacks = stacks
  }

  operateCrane(move:number, from:number, to:number){
    const stackMovingFrom = this.stacks.get(from)!
    const stackMovingTo = this.stacks.get(to)!
    const movedCrates = stackMovingFrom.splice(stackMovingFrom.length - 1, move)
    stackMovingTo?.push(...movedCrates)
    this.stacks.set(from, stackMovingFrom)
    this.stacks.set(to, stackMovingTo)
  }
}

let testData = new Map<number,string[]>([
  [1,['Z','N']],
  [2,['M','C','D']],
  [3,['P']],
])
const testSupply = new Supply(testData)
console.log(testSupply.stacks)
testSupply.operateCrane(1,2,1)
console.log(testSupply.stacks)