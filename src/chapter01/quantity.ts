class Quantity {
  private MIN: number = 1
  private MAX: number = 100
  value: number

  constructor(value: number) {
    if (value < this.MIN) throw new Error(`不正: ${this.MIN} 未満`)
    if (value > this.MAX) throw new Error(`不正 ${this.MAX} 超`)
    this.value = value
  }

  canAdd(other: Quantity): boolean {
    const added = this.addValue(other)
    return added <= this.MAX
  }

  add(other: Quantity): Quantity {
    if (!this.canAdd(other)) throw new Error(`不正:合計が ${this.MAX} 超`)

    const added = this.addValue(other)

    return new Quantity(added)
  }

  private addValue(other: Quantity): number {
    return this.value + other.value
  }
}

const quantity = new Quantity(2)
console.log(quantity, 'initial')
const addValueQuantity = new Quantity(3)
console.log(addValueQuantity, 'add')
console.log(quantity.add(addValueQuantity), 'result')
