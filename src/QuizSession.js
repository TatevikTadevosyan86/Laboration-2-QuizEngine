/**
 * Tracks one attempt at a quiz.
 */
export class QuizSession {
  #quiz
  #currentQuestionIndex = 0
  #score = 0

  /**
   * Creates a session for a quiz.
   *
   * @param {import('./Quiz.js').Quiz} quiz - The quiz to attempt.
   */
  constructor(quiz) {
    this.#quiz = quiz
  }

  /**
   * Returns the current question.
   *
   * @returns {import('./Question.js').Question} The current question.
   */
  getCurrentQuestion() {
    return this.#quiz.getQuestion(this.#currentQuestionIndex)
  }

  /**
   * Returns the number of correct answers.
   *
   * @returns {number} The current score.
   */
  getScore() {
    return this.#score
  }
}
