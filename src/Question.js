/**
 * Represents a quiz question with one correct answer.
 */
export class Question {
  #text;
  #options;
  #correctAnswerIndex;
  /**
   * Creates a quiz question.
   *
   * @param {string} text - The question text.
   * @param {string[]} options - The available answer options.
   * @param {number} correctAnswerIndex - The index of the correct option.
   */

  constructor(text, options, correctAnswerIndex) {
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