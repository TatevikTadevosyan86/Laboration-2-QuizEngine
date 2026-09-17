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