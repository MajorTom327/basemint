export type StackingBuds = {
    id: number
    currentStakeTimestamp: number
    totalStakeTimeAccrued: number
  }

export type BudAttribute = {
  trait_type: string
  value: string
}

export type BudsInput = {
  name?: string,
  description?: string,
  image?: string,
  attributes: BudAttribute[],
}
export class Buds {
  name: string
  description: string
  image: string
  attributes: BudAttribute[] = []

  constructor(input: BudsInput) {
    this.name = input.name || "";
    this.description = input.description || "";
    this.image = input.image || "";
    this.attributes = input.attributes;
  }
}

export default Buds
