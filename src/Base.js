import Fraction from 'fraction.js'
import { Matrix } from './core/Matrix'

export class Base extends Matrix {
  /**
   * Return a matrix of objects that contains more info about matrix
   * @param {{isExtendedMatrix?: boolean}} param
   * @returns {Array<{nf: string, otherProperties}>}
   */
  convertsToDisplayable ({ isExtendedMatrix = false }) {
    const newMatrix = []

    /** @type {number} */
    // @ts-ignore
    const indexToNumberTSEColumns =
      isExtendedMatrix || this.getMatrix()[0].length + 1

    this.Matrix.forEach((row, index) => {
      const newRow = { nf: this.ABC[index] }

      for (let i = 0; i < row.length; i++) {
        const element = row[i]

        const isExtended = i > indexToNumberTSEColumns ? true : false
        newRow[!isExtended ? `x${i + 1}` : `i${i - row.length + 3}`] = element
      }

      newMatrix.push(newRow)
    })

    console.log('newMatrix', newMatrix)
    return newMatrix
  }

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
}
