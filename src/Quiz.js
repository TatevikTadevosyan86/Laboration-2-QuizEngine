/**
 * Holds a collection of quiz questions.
 */
export class Quiz {
  #questions = []
  /**
   * Adds a question to the quiz.
   *
   * @param {import('./Question.js').Question} question - The question to add.
   */
  addQuestion(question) {
    this.#questions.push(question)
  }
  /**
   * Returns the number of questions.
   *
   * @returns {number} The question count.
   */
  getQuestionCount() {
    return this.#questions.length
  }
  /**
   * Returns the question at the given index.
   *
   * @param {number} index - The question's position, starting at zero.
   * @returns {import('./Question.js').Question} The requested question.
   * @throws {RangeError} If the index is invalid.
   */
  getQuestion(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.#questions.length) {
      throw new RangeError('Question index must refer to an existing question.')
    }

    return this.#questions[index]
  }
}
