import { describe, beforeEach, test, expect } from '@jest/globals'
import { Base as Matrix } from '../src/Base'

describe('Test in Base of Matrix', () => {
  const MATRIX_BASE = [
    ['2', '3'],
    ['4', '5']
  ]
  /** @type {Matrix} */
  let matrix
  beforeEach(() => (matrix = new Matrix(MATRIX_BASE)))

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
      ['2', '3', '5'],
      ['4', '5', '3']
    ]
    const MATRIX_TO_EXTEND = [[5], [3]]

    const [newMatrix] = matrix.extendMatrix({
      matrixToExtend: MATRIX_TO_EXTEND
    })

    expect(newMatrix).toEqual(EXPECTED_MATRIX)
  })

  test('should return the transpose of the matrix', () => {
    const EXPECTED_MATRIX = [
      ['2', '4'],
      ['3', '5']
    ]

    const newMatrix = matrix.transpose()

    expect(newMatrix).toEqual(EXPECTED_MATRIX)
  })
})
