import { ExtendedBase as Matrix } from '../../src/utils/ExtendedBase'

describe('test in core of Matrix Class with fractions', () => {
  const MATRIX_BASE = [
    ['2', '3'],
    ['4', '5']
  ]

  /** @type {Matrix} */
  let matrix
  beforeEach(() => (matrix = new Matrix(MATRIX_BASE)))

  test('should return object displayable', () => {
    const EXPECTED_MATRIX = [
      { nf: 'a', x1: '2', x2: '3' },
      { nf: 'b', x1: '4', x2: '5' }
    ]

    const newMatrix = matrix.toDisplayable({})

    expect(newMatrix).toEqual(EXPECTED_MATRIX)
  })

  test('should return object displayable and their identity', () => {
    const EXPECTED_MATRIX = [
      { nf: 'a', x1: '2', x2: '3', i1: '1', i2: '0' },
      { nf: 'b', x1: '4', x2: '5', i1: '0', i2: '1' }
    ]

    const [extendedMatrix] = matrix.extendMatrix({ isIdentity: true })
    matrix.setMatrix({ newMatrix: extendedMatrix })
    const newMatrix = matrix.toDisplayable({
      isExtendedMatrix: true
    })

    expect(newMatrix).toEqual(EXPECTED_MATRIX)
  })

  test('should return matrix identity when use the extendMatrix method', () => {
    const EXPECTED_MATRIX = [
      ['2', '3', '1', '0'],
      ['4', '5', '0', '1']
    ]

    const EXPECTED_INDEX_TO_START_EXTENDED_MATRIX = 2

    const [newMatrix, indexToStartExtendedMatrix] = matrix.extendMatrix({
      isIdentity: true
    })

    expect(newMatrix).toEqual(EXPECTED_MATRIX)
    expect(indexToStartExtendedMatrix).toEqual(
      EXPECTED_INDEX_TO_START_EXTENDED_MATRIX
    )
  })
  test('should return matrix with extend input matrix when use the extendedMatrix', () => {
    const EXPECTED_MATRIX = [
      ['2', '3', '5/3'],
      ['4', '5', '3/2']
    ]
    const MATRIX_TO_EXTEND = [['5/3'], ['3/2']]

    const [newMatrix] = matrix.extendMatrix({
      matrixToExtend: MATRIX_TO_EXTEND
    })

    expect(newMatrix).toEqual(EXPECTED_MATRIX)
  })
})
