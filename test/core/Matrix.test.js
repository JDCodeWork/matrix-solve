import { Matrix } from '../../src/core/Matrix'

describe('test in core of Matrix Class with natural numbers', () => {
  const MATRIX_BASE = [
    ['2', '3'],
    ['4', '5']
  ]

  /** @type {Matrix} */
  let matrix
  beforeEach(() => (matrix = new Matrix(MATRIX_BASE)))

  test('should return matrix when create a new instance and execute getMatrix method', () => {
    expect(matrix.getMatrix()).toEqual(MATRIX_BASE)
  })
  test('should multiply first row when use corresponding method', () => {
    const EXPECTED_MATRIX = [
      ['2', '3'],
      ['8', '10']
    ]

    const newRow = matrix.multiplyRow({
      indexOfRowToMultiply: 1,
      multiplier: 2
    })
    expect(matrix.getMatrix()).toEqual(MATRIX_BASE)

    matrix.setRow({ indexOfRowToSet: 1, newRow })
    expect(matrix.getMatrix()).toEqual(EXPECTED_MATRIX)
  })
  test('should add first row with secondRow', () => {
    const EXPECTED_MATRIX = [
      ['6', '8'],
      ['4', '5']
    ]

    const newRow = matrix.addRows({
      indexOfFirstRowToSum: 0,
      secondRowToSum: MATRIX_BASE[1]
    })
    expect(matrix.getMatrix()).toEqual(MATRIX_BASE)

    matrix.setRow({ indexOfRowToSet: 0, newRow })
    expect(matrix.getMatrix()).toEqual(EXPECTED_MATRIX)
  })
  test('should return add multiplied row with base row', () => {
    const EXPECTED_MATRIX = [
      ['18', '23'],
      ['4', '5']
    ]

    const multipliedRow = matrix.multiplyRow({
      indexOfRowToMultiply: 1,
      multiplier: 4
    })

    const addedRow = matrix.addRows({
      indexOfFirstRowToSum: 0,
      secondRowToSum: multipliedRow
    })

    expect(matrix.getMatrix()).toEqual(MATRIX_BASE)

    matrix.setRow({ indexOfRowToSet: 0, newRow: addedRow })

    expect(matrix.getMatrix()).toEqual(EXPECTED_MATRIX)
  })
})

describe('test in core of Matrix Class with fractions', () => {
  const MATRIX_BASE = [
    ['2', '3'],
    ['4/3', '5/2']
  ]

  /** @type {Matrix} */
  let matrix
  beforeEach(() => (matrix = new Matrix(MATRIX_BASE)))

  test('should multiply first row when use corresponding method', () => {
    const EXPECTED_MATRIX = [
      ['1', '3/2'],
      ['4/3', '5/2']
    ]

    const newRow = matrix.multiplyRow({
      indexOfRowToMultiply: 0,
      multiplier: '1/2'
    })
    expect(matrix.getMatrix()).toEqual(MATRIX_BASE)

    matrix.setRow({ indexOfRowToSet: 0, newRow })
    expect(matrix.getMatrix()).toEqual(EXPECTED_MATRIX)
  })
  test('should add first row with secondRow', () => {
    const EXPECTED_MATRIX = [
      ['10/3', '11/2'],
      ['4/3', '5/2']
    ]

    const newRow = matrix.addRows({
      indexOfFirstRowToSum: 0,
      secondRowToSum: MATRIX_BASE[1]
    })
    expect(matrix.getMatrix()).toEqual(MATRIX_BASE)

    matrix.setRow({ indexOfRowToSet: 0, newRow })
    expect(matrix.getMatrix()).toEqual(EXPECTED_MATRIX)
  })
  test('should return add multiplied row with base row', () => {
    const EXPECTED_MATRIX = [
      ['14/5', '9/2'],
      ['4/3', '5/2']
    ]

    const multipliedRow = matrix.multiplyRow({
      indexOfRowToMultiply: 1,
      multiplier: '3/5'
    })

    const addedRow = matrix.addRows({
      indexOfFirstRowToSum: 0,
      secondRowToSum: multipliedRow
    })

    expect(matrix.getMatrix()).toEqual(MATRIX_BASE)

    matrix.setRow({ indexOfRowToSet: 0, newRow: addedRow })

    expect(matrix.getMatrix()).toEqual(EXPECTED_MATRIX)
  })
  // 
})
