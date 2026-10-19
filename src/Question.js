/**
 * Represents a quiz question with one correct answer.
 */
export class Question {
  #text
  #options
  #correctAnswerIndex
  #category
  #points

  /**
   * Creates a quiz question.
   *
   * @param {string} text - The question text.
   * @param {string[]} options - The available answer options.
   * @param {number} correctAnswerIndex - The index of the correct option.
   * @param {string} category - The category of the question.
   * @param {number} points - The number of points the question is worth.
   */
  constructor(text, options, correctAnswerIndex, category = 'General', points = 1) {
    this.#validateCategory(category)

    this.#validateText(text)

    this.#validateOptionsArray(options)

    if (!Number.isInteger(correctAnswerIndex) || correctAnswerIndex < 0 || correctAnswerIndex >= options.length) {
      throw new RangeError('Correct answer index must refer to an existing option.')
    }
    this.#validatePoints(points)
    this.#validateOptionTexts(options)

    this.#text = text
    this.#options = [...options]
    this.#correctAnswerIndex = correctAnswerIndex
    this.#category = category.trim()
    this.#points = points
  }

  /**
   * Validates the question text.
   *
   * @param {string} text - The question text.
   * @throws {TypeError} If the text is not a non-empty string.
   */
  #validateText(text) {
    if (typeof text !== 'string' || text.trim() === '') {
      throw new TypeError('Question text must be a non-empty string.')
    }
  }
  /**
   * Validates the question category.
   *
   * @param {string} category - The question category.
   * @throws {TypeError} If the category is not a non-empty string.
   */
  #validateCategory(category) {
    if (typeof category !== 'string' || category.trim() === '') {
      throw new TypeError('Category must be a non-empty string.')
    }
  }

  /**
   * Validates the question's point value.
   *
   * @param {number} points - Points awarded for a correct answer.
   * @throws {RangeError} If points is not a positive integer.
   */
  #validatePoints(points) {
    if (!Number.isInteger(points) || points < 1) {
      throw new RangeError('Points must be a positive integer.')
    }
  }

  /**
   * Validates the answer options array.
   *
   * @param {string[]} options - The available answer options.
   * @throws {TypeError} If fewer than two options are supplied.
   */
  #validateOptionsArray(options) {
    if (!Array.isArray(options) || options.length < 2) {
      throw new TypeError('A question must have at least two answer options.')
    }
  }

  /**
   * Validates the text of each answer option.
   *
   * @param {string[]} options - The available answer options.
   * @throws {TypeError} If an option is not a non-empty string.
   */
  #validateOptionTexts(options) {
    for (const option of options) {
      if (typeof option !== 'string' || option.trim() === '') {
        throw new TypeError('Each answer option must be a non-empty string.')
      }
    }
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
    if (!Number.isInteger(answerIndex) || answerIndex < 0 || answerIndex >= this.#options.length) {
      throw new RangeError('Answer index must refer to an existing option.')
    }
    return answerIndex === this.#correctAnswerIndex
  }
  /**
   * Returns the question's category.
   *
   * @returns {string} The category.
   */
  getCategory() {
    return this.#category
  }
  /**
   * Returns the points available for this question.
   *
   * @returns {number} The point value.
   */
  getPoints() {
    return this.#points
  }
}
