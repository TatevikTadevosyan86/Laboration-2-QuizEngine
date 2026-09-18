/**
 * Represents a quiz question with one correct answer.
 */
export class Question {
  #text
  #options
  #correctAnswerIndex
  /**
   * Creates a quiz question.
   *
   * @param {string} text - The question text.
   * @param {string[]} options - The available answer options.
   * @param {number} correctAnswerIndex - The index of the correct option.
   */
  constructor(text, options, correctAnswerIndex) {
    if (typeof text !== 'string' || text.trim() === '') {
      throw new TypeError('Question text must be a non-empty string.')
    }
    if (!Array.isArray(options) || options.length < 2) {
      throw new TypeError('A question must have at least two answer options.')
    }
    if (!Number.isInteger(correctAnswerIndex) || correctAnswerIndex < 0 || correctAnswerIndex >= options.length) {
      throw new RangeError('Correct answer index must refer to an existing option.')
    }
    for (const option of options) {
      if (typeof option !== 'string' || option.trim() === '') {
        throw new TypeError('Each answer option must be a non-empty string.')
      }
    }
    this.#text = text
    this.#options = [...options]
    this.#correctAnswerIndex = correctAnswerIndex
  }
  /**
   * Returns the question text.
   *
   * @returns {string} The question text.
   */
  getText() {
    return this.#text
  }

  /**
   * Returns a copy of the answer options.
   *
   * @returns {string[]} The answer options.
   */
  getOptions() {
    return [...this.#options]
  }

  /**
   * Checks whether the selected answer is correct.
   *
   * @param {number} answerIndex - The selected option's index.
   * @returns {boolean} Whether the answer is correct.
   */
  isCorrect(answerIndex) {
    return answerIndex === this.#correctAnswerIndex
  }
}
