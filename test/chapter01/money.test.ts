import { Money } from '../../src/chapter01/money'

test('money test, 3000 - 1000 to equal 2000', () => {
  const baseMoney = new Money(3000)
  const discounted = baseMoney.minus(1000)
  expect(discounted.value).toBe(2000)
})
