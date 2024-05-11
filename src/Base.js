import Fraction from 'fraction.js'
import { Matrix } from './core/Matrix.js'

export class Base extends Matrix {
  /**
   * Extends the matrix according to what is decided
   * @param {{isIdentity: boolean, matrixToExtend?: Array<string[]>}} options
   * @return {[newMatrix: Array<string[]>, indexToStartExtendedColumns: number]}
   */
  extendMatrix ({ isIdentity = false, matrixToExtend = [] }) {
    const rowsLength = this.Matrix.length

    let indexToStartExtendedColumns = 0
    /** @type {Array<string[]>} */
    const newMatrix = []

    if (isIdentity) {
      this.Matrix.forEach((row, index) => {
        /** @type {string[]} */
        const newRow = [...row]

        indexToStartExtendedColumns = indexToStartExtendedColumns || row.length

        for (let i = 0; i < rowsLength; i++) {
          const element = i === index ? '1' : '0'
          newRow.push(element)
        }
        newMatrix.push(newRow)
      })
    } else if (matrixToExtend.length >= 1) {
      this.Matrix.forEach((row, index) => {
        /** @type {string[]} */
        const newRow = [...row]

        indexToStartExtendedColumns = indexToStartExtendedColumns || row.length

        for (let i = 0; i < rowsLength - 1; i++) {
          const element = new Fraction(matrixToExtend[index][i])

          const result = element.toFraction()

          newRow.push(result)
        }
        newMatrix.push(newRow)
      })
    }

    return [newMatrix, indexToStartExtendedColumns]
  }

  /**
   * Returns the transpose of the matrix you are working with.
   * @returns {Array<string[]>}
   */
  transpose () {
    const newMatrix = []
    this.Matrix[0].forEach((_, colIndex) => {
      const newRow = []

      this.Matrix.forEach(row => {
        newRow.push(row[colIndex])
      })
      newMatrix.push(newRow)
    })

    return newMatrix
  }
}
