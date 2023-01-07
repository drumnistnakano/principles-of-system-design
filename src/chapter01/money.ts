/**
 * 金額を扱う値オブジェクト
 * @class Money
 */
export class Money {
  private MIN: number = 0
  value: number

  constructor(value: number) {
    if (this.isValidMoney(value))
      throw new Error(`金額不正: ${this.MIN} 円未満`)
    this.value = value
  }

  isValidMoney(currentMoney: number): boolean {
    return currentMoney < this.MIN
  }

  minus(minusMoney: number): Money {
    const result = new Money(this.value - minusMoney)
    if (this.isValidMoney(result.value))
      throw new Error(`残金不正: ${this.MIN} 円未満`)
    return result
  }
}
