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
}