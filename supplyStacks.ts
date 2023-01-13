export class Supply{
  stacks: Map<number, string[]>

  constructor(stacks: Map<number, string[]>) {
    this.stacks = stacks
  }

  operateCrane(move:number, from:number, to:number){
    const stackMovingFrom = this.stacks.get(from)!
    const stackMovingTo = this.stacks.get(to)!
    const movedCrates = stackMovingFrom?.splice(stackMovingFrom.length - move, move).reverse()

    stackMovingTo.push(...movedCrates)
    this.stacks.set(from, stackMovingFrom)
    this.stacks.set(to, stackMovingTo)
  }

  followCraneInstructions(instructions: number[][]){
    instructions.forEach(instruction =>{
      const move = instruction[0]
      const from = instruction[1]
      const to = instruction[2]
      this.operateCrane(move,from,to)
    })
  }

  getTopOfStacks(): string{
    let result: string[] = []
    this.stacks.forEach(stack =>{
        result.push(stack.pop()!)
    })
    return result.join('')
  }
}