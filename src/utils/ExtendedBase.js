import { Base } from '../Base'

export class ExtendedBase extends Base {
  /**
   * Return a matrix of objects that contains more info about matrix
   * @param {{isExtendedMatrix?: boolean}} param
   * @returns {Array<{nf: string, otherProperties}>}
   */
  toDisplayable ({ isExtendedMatrix = false }) {
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

    return newMatrix
  }
}
