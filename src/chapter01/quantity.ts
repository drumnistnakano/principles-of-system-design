interface quantity {
  value: number
  canAdd(other: number): boolean
  add(other: number): number
  addValue(other: number): number
}

class Quantity implements quantity {
  private MIN: number = 1
  private MAX: number = 100

  constructor(private value: number) {
    if (value < this.MIN) throw new Error(`不正: ${this.MIN} 未満`)
    if (value > this.MAX) throw new Error(`不正 ${this.MAX} 超`)
    this.value = value
  }

  canAdd = (other: quantity): boolean => {
    const added = this.addValue(other)
    return added <= this.MAX
  }

  add = (other: quantity): Quantity => {
    if (!this.canAdd(other)) throw new Error(`不正:合計が ${this.MAX} 超`)

    const added = this.addValue(other)

    return new Quantity(added)
  }

  private addValue = (other: quantity): number => {
    return this.value + other.value
  }
}

const quantity = new Quantity(2)
console.log(quantity)

export {}
