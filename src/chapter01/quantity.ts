type otherValue = {
  value: number
}

interface quantity {
  value: number
  canAdd(other: otherValue): boolean
  add(other: otherValue): number
  addValue(other: otherValue): number
}

class Quantity implements quantity {
  private MIN: number = 1
  private MAX: number = 100
  value: number

  constructor(_value: number) {
    if (_value < this.MIN) throw new Error(`不正: ${this.MIN} 未満`)
    if (_value > this.MAX) throw new Error(`不正 ${this.MAX} 超`)
    this.value = _value
  }

  canAdd(other: otherValue): boolean {
    const added = this.addValue(other)
    return added <= this.MAX
  }

  add(other: otherValue): number {
    if (!this.canAdd(other)) throw new Error(`不正:合計が ${this.MAX} 超`)

    const added = this.addValue(other)

    return new Quantity(added)
  }

  private addValue(other: otherValue): number {
    return this.value + other.value
  }
}

const quantity = new Quantity(2)
console.log(quantity)
console.log(quantity.add(3))

export {}
