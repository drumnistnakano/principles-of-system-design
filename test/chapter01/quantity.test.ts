import { Quantity } from '../../src/chapter01/quantity'

test('quantity test, 1 + 2 to equail 3', () => {
  const quantity = new Quantity(1)
  const added = new Quantity(2)
  const { value } = quantity.add(added)
  expect(value).toBe(3)
})
